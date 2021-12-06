
import { getPhotographerMedia } from "../dataManager.js";

export class Lightbox {

    constructor(domTarget, url, images) {
        this.DOM = domTarget;
        this.images = images;
        // this.photographerId = id;
        this.createHtmlModale(url);
        this.loadImage(url);

        this.initPage(url);
    }

    async initPage(url) {

        // this.mediaList = await getPhotographerMedia(this.photographerId);

        const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]'));
        const gallery = links.map(link => link.getAttribute('href'));
        links.forEach(link => link.addEventListener('click', (e) => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'), gallery)
            }));


    }

    // buildDOM (url) {
    //     const dom = document.createElement('div')
    // }

    loadImage(url) {
        const image = new Image();

        const content = document.querySelector('.lightbox__content');
        const loader = document.createElement('div');
        content.appendChild(loader);
        loader.classList.add('lightbox__loader');

        image.onload = function () {
            content.removeChild(loader);
            content.appendChild(image);
        }
        image.src = url;
    }

    createHtmlModale(url) {
        // creation of the container of the modal
        this.lightboxContainer = document.createElement("div");
        this.DOM.appendChild(this.lightboxContainer);
        this.lightboxContainer.className = "lightbox-container";
        this.lightboxContainer.id = "lightbox-container";
    
        // creation of the modal
        let lightbox = document.createElement("div");
        this.lightboxContainer.appendChild(lightbox);
        lightbox.className = "lightbox";
        lightbox.id = "lightbox";
    
        // creation of the close button
        const close = document.createElement("i");
        lightbox.appendChild(close);
        close.classList.add("fas", "fa-times", "lightbox__close");
        close.id = "close";
        close.classList.add("fa-times", "close");
    
        // creation of the chevrons for the previous and next btn
        const previous = document.createElement("i");
        lightbox.appendChild(previous);
        previous.classList.add("fa", "fa-chevron-left", "lightbox__prev");
        const next = document.createElement("i");
        lightbox.appendChild(next);
        next.classList.add("fa", "fa-chevron-right", "lightbox__next");
    
        // creation of the content of the modal
        const lightboxContent = document.createElement("div");
        lightbox.appendChild(lightboxContent);
        lightboxContent.className = "lightbox__content";

        // creation of the loader of the images
        // const loader = document.createElement('div');
        // lightboxContent.appendChild(loader);
        // loader.classList.add('lightbox__loader');
    
        // creation of container of the image
        // const link = document.createElement('a');
        // lightboxContent.appendChild(link);
        // link.setAttribute('href', '');
        // const media = document.createElement("img");
        // link.appendChild(media);
        // media.classList.add('media-img')
        // media.setAttribute("src", `${url}`);
        // media.setAttribute("alt", "");
      }
    


}