import { getMedia } from "../dataManager.js";
export class Lightbox{
    constructor(domTarget, id, list){
        this.mediaId = id;
        this.list = list;
        this.initPage(domTarget);

        // @ts-ignore
        window.page.next = this.next.bind(this);
        // @ts-ignore
        window.page.prev = this.prev.bind(this);
      }
    
      async initPage(domTarget) {
          
        const DOM = document.createElement("div");
        domTarget.appendChild(DOM);
        this.container = document.createElement("div");
        DOM.appendChild(this.container);
        this.container.innerHTML = `
                <button id="close"><i class="fa-solid fa-xmark"></i></button>
                <button id="prev" onclick="page.prev()"><i class="fa-solid fa-chevron-left"></i></button>
                <button id="next" onclick="page.next()"><i class="fa-solid fa-chevron-right"></i></button>
        `
        this.render()
      }

    render(){
        console.log(this.list);
        console.log(this.mediaId);
        if (this.image) this.container.removeChild(this.image);
        if (this.video) this.container.removeChild(this.video);
        const {media, prevId, nextId} = getMedia(this.mediaId);
        // si prevId undefined
        //on enregistre prevId nextId
        if (media.video) this.showVideo(media);
        if (media.image) this.showImage(media);
    }

    showImage(media){
        this.image = document.createElement("img");
        this.container.appendChild(this.image);
        this.image.src = "";
    }

    showVideo(media){
        this.videoLink = document.createElement('a');
        this.container.appendChild(this.videoLink)
        this.video = document.createElement('video');
        this.videoLink.appendChild(this.video);
        this.video.setAttribute('controls', '');
        this.video.classList.add('media');
        const videoSource = document.createElement('source');
        this.video.appendChild(videoSource);
        videoSource.src = '';
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
        // const index = this.list.indexOf()

    }

    prev(){

    }
}