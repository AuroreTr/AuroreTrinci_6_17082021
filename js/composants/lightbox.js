import { getSource, getMediaTitle } from "../dataManager.js";
export class Lightbox{
    constructor(domTarget, id, list, photographerId){
        this.mediaId = parseInt(id);
        this.source = getSource(photographerId);
        this.list = list;
        this.initPage(domTarget);
        this.title = getMediaTitle(id);
        // @ts-ignore
        window.page.next = this.next.bind(this);
        // @ts-ignore
        window.page.prev = this.prev.bind(this);
      }
    
      async initPage(domTarget) {
          
        const DOM = document.createElement("div");
        domTarget.appendChild(DOM);
        DOM.id = 'container-lightbox';
        this.container = document.createElement("div");
        DOM.appendChild(this.container);
        this.container.classList.add('lightbox');
        this.container.innerHTML = `
                <button id="close-lightbox"><i class="fas fa-xmark"></i></button>
                <button id="prev" onclick="page.prev()"><i class="fas fa-chevron-left"></i></button>
                <button id="next" onclick="page.next()"><i class="fas fa-chevron-right"></i></button>
        `
        this.render()
      }

    render(){
        console.log("..",this.image, this.video)
        if (this.image) this.container.removeChild(this.image);
        if (this.video) this.container.removeChild(this.video);
        this.media=  this.getMedia();
        // si prevId undefined
        //on enregistre prevId nextId
        if (this.media.video) this.showVideo(this.media);
        if (this.media.image) this.showImage(this.media);
        // console.log(document.getElementById("next"))
        document.getElementById("prev").style.display = this.prevId !== null ? "block" : "none";
        document.getElementById("next").style.display = this.nextId !== null ? "block" : "none";
    }

    showImage(media){
        this.image = document.createElement("img");
        this.container.appendChild(this.image);
        this.image.src = this.source + media.image;
        this.image.classList.add('media-lightbox');
        const titleMedia = document.createElement('p');
        this.container.appendChild(titleMedia);
        titleMedia.classList.add('title-media');
        titleMedia.innerText = this.media.title;
    }

    showVideo(media){
        this.video = document.createElement('video');
        this.container.appendChild(this.video);
        this.video.classList.add('media-lightbox');
        this.video.setAttribute('controls', '');
        this.video.classList.add('media');
        const videoSource = document.createElement('source');
        this.video.appendChild(videoSource);
        videoSource.src = this.source + media.video;
        videoSource.type = 'video/mp4';
        const videoDescription = document.createElement('p');
        this.video.appendChild(videoDescription);
        videoDescription.innerText = '';
        const messageError = document.createElement('p');
        this.video.appendChild(messageError);
        messageError.innerText = 'Votre navigateur ne prend pas en charge les vidéos';

    }

    next(){
        this.mediaId = this.nextId;
        this.render();
    }

    prev(){
        this.mediaId = this.prevId;
        this.render();
    }

    getMedia(){
        const max = this.list.length;
        for(let i=0; i<max; i++){
          if (this.list[i].id === this.mediaId) {
              
            this.prevId = this.getId(i-1);
            this.nextId = this.getId(i+1);
            return this.list[i];
            
          }
        }
        console.error("media",this.mediaId,"non trouvé");
      }

    getMediaTitle(id) {
        return this.list[id].title;
    }

    getId(id){
        if (!this.list[id]) return null;
        return this.list[id].id;

    }
}