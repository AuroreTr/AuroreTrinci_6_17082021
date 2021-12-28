import { getMediaTitle, getMediaDescription } from "../dataManager.js";
export class Lightbox {
  constructor(domTarget, id, list) {
    this.mediaId = parseInt(id);
    this.source = 'images/';
    this.list = list;
    this.initPage(domTarget);
    this.title = getMediaTitle(id);
    this.mediaDescription = getMediaDescription(id);
    // @ts-ignore
    window.page.next = this.next.bind(this);
    // @ts-ignore
    window.page.prev = this.prev.bind(this);
    // @ts-ignore
    window.page.close = this.close.bind(this);
  }

  async initPage(domTarget) {
    this.DOM = document.createElement("div");
    domTarget.appendChild(this.DOM);
    this.DOM.id = 'container-lightbox';
    this.container = document.createElement("div");
    this.DOM.appendChild(this.container);
    this.container.classList.add('lightbox');
    this.container.innerHTML = `
                <button aria-live='assertive' aria-label='Fermer' id="close-lightbox" onclick='page.close()'><i class="fas fa-times" aria-label="fermer"></i></button>
                <button aria-label='Précédent' id="prev" onclick="page.prev()"><i class="fas fa-chevron-left"></i></button>
                <button aria-label='Suivant' id="next" onclick="page.next()"><i class="fas fa-chevron-right"></i></button>
        `
    this.render()
    console.log(this.mediaDescription);
  }

  render() {
    if (this.image) {
      this.container.removeChild(this.image);
      this.container.removeChild(this.titleMedia);
    } 
    if (this.video) {
      this.container.removeChild(this.video);
      //this.container.removeChild(this.videoDescription);
    } 
    this.media = this.getMedia();
    // si prevId undefined
    //on enregistre prevId nextId
    if (this.media.video) this.showVideo(this.media);
    if (this.media.image) this.showImage(this.media);
    // console.log(document.getElementById("next"))
    document.getElementById("prev").style.display = this.prevId !== null ? "block" : "none";
    document.getElementById("next").style.display = this.nextId !== null ? "block" : "none";
  }

  showImage(media) {
    delete this.video;
    this.image = document.createElement("img");
    this.container.appendChild(this.image);
    this.image.src = this.source + media.image;
    this.image.setAttribute('alt', `${this.mediaDescription}`);
    this.image.classList.add('media-lightbox');
    this.titleMedia = document.createElement('p');
    this.container.appendChild(this.titleMedia);
    this.titleMedia.classList.add('title-media');
    this.titleMedia.innerText = this.media.title;
  }

  showVideo(media) {
    delete this.image;
    this.video = document.createElement('video');
    this.container.appendChild(this.video);
    this.video.classList.add('media-lightbox');
    this.video.setAttribute('controls', '');
    this.video.classList.add('media');
    const videoSource = document.createElement('source');
    this.video.appendChild(videoSource);
    videoSource.src = this.source + media.video;
    videoSource.type = 'video/mp4';
    this.videoDescription = document.createElement('p');
    this.video.appendChild(this.videoDescription);
    this.videoDescription.innerText = '';
    const messageError = document.createElement('p');
    this.video.appendChild(messageError);
    messageError.innerText = 'Votre navigateur ne prend pas en charge les vidéos';

  }

  next() {
    this.mediaId = this.nextId;
    this.render();
  }

  prev() {
    this.mediaId = this.prevId;
    this.render();
  }


  close() {
    const containerLightbox = document.getElementById('container-lightbox');
    containerLightbox.style.display = 'none';
    // @ts-ignore
    delete window.page.next;
    // @ts-ignore
    delete window.page.prev;
    // @ts-ignore
    delete window.page.close;
  }

  getMedia() {
    const max = this.list.length;
    for (let i = 0; i < max; i++) {
      if (this.list[i].id === this.mediaId) {

        this.prevId = this.getId(i - 1);
        this.nextId = this.getId(i + 1);
        return this.list[i];

      }
    }
    console.error("media", this.mediaId, "non trouvé");
  }

  // getMediaTitle(id) {
  //   return this.list[id].title;
  // }

  getId(id) {
    if (!this.list[id]) return null;
    return this.list[id].id;

  }

}