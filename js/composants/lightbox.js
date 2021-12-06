import { getPhotographerMedia } from "../dataManager.js";

/**
 * @property {string[]} images Chemins des images de la lightbox
 * @property {string} url Image actuellement affichée
 */
export class Lightbox {

  constructor(domTarget, id) {
    this.DOM = domTarget;

    this.photographerId = id;
    this.initPage();
  }

  async initPage() {
    // console.log("ok1");

    this.mediaList = await getPhotographerMedia(this.photographerId);
    this.createHtmlModale();
    this.loadImage();
    this.ecoute();
    this.render();
  }

  render() { }


  createHtmlModale() {

    // creation of the container of the modal
    const lightboxContainer = document.createElement("div");
    this.DOM.appendChild(lightboxContainer);
    lightboxContainer.className = "lightbox-container";
    lightboxContainer.id = "lightbox-container";

    // creation of the modal
    const lightbox = document.createElement("div");
    lightboxContainer.appendChild(lightbox);
    lightbox.className = "lightbox";
    lightbox.id = "lightbox";

    // creation of the close button
    const close = document.createElement("i");
    lightbox.appendChild(close);
    close.className = "fas";
    close.id = "close";
    close.classList.add("fa-times", "close");

    // creation of the chevrons for the previous and next btn
    this.previous = document.createElement("i");
    lightbox.appendChild(this.previous);
    this.previous.className = "fa";
    this.previous.classList.add("fa-chevron-left", "previous");
    this.next = document.createElement("i");
    lightbox.appendChild(this.next);
    this.next.className = "fa";
    this.next.classList.add("fa-chevron-right", "next");

    // creation of the content of the modal
    const lightboxContent = document.createElement("div");
    lightbox.appendChild(lightboxContent);
    lightboxContent.className = "lightbox-content";

    // creation of container of the image
    this.media = document.createElement("img");
    lightboxContent.appendChild(this.media);
    this.media.className = 'media-img';
    this.media.setAttribute("src", "");
    this.media.setAttribute("alt", "");
  }

  loadImage(url) {
    this.links = document.querySelectorAll(".media-link");

    this.arrayLinks = Array.prototype.slice.call(this.links);
    this.images = this.arrayLinks.map(link => link.getAttribute('href'));
    console.log(this.arrayLinks);
    console.log(this.images);

    const lightboxContainerId = document.getElementById("lightbox-container");
    const closeModale = document.querySelector("#close");
    const links = document.querySelectorAll(".media-link");
    // const link = document.querySelectorAll('a');


    // we add the click listener on the links
    for (let link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        url = link.getAttribute('href');
        this.source = url;
        this.media.setAttribute('src', url);
        // console.log(links);
        // console.log(source);
        console.log(link);
        lightboxContainerId.style.display = 'initial';
      });
    }
  }

  nextImage(e) {
    e.preventDefault();
    this.media.setAttribute('src', '');
    // console.log(this.images);
    // console.log(this.arrayLinks);
    // console.log(this.source);
    let i = this.images.findIndex(image => image === this.source);
    console.log(i);
    console.log(this.arrayLinks.length);
    if (i === this.arrayLinks.length - 1) {
      console.log('ok');
      i = - 1;

    }
    console.log(this.arrayLinks[i+1], i);
    this.media.setAttribute('src', this.arrayLinks[i+1]);
    this.loadImage(this.arrayLinks[i+1]);
  }

  closeOnIcon() {
    this.lightboxContainer = document.getElementById('lightbox-container');
    this.lightboxContainer.style.display = 'none';
  }

  closeOnWindow() {
    this.lightboxContainer.style.display = 'none';
  }

  /**
   * close the lightbox on click to the lightox container
   */
  // lightboxContainerId.addEventListener("click", function () {
  //   lightboxContainerId.style.display = 'none';
  // });


  ecoute() {
    // e.preventDefault()
    const close = document.getElementById('close');
    this.next.addEventListener('click', this.nextImage.bind(this));
    close.addEventListener('click', this.closeOnIcon.bind(this));
    close.addEventListener('click', this.closeOnWindow.bind(this));

  }



    // if (link < links.length;) {
    //   this.next.addEventListener('click', function () {
    //     console.log(link++);
    //   });  

    // if (link === links.length -1) {
    //   link = -1;  
    // }  




    /**
     * Clode the lightbox with the close button
     */
  close() {
    // lightboxContainerId.style.display = 'none';
    // }); 
  }

  /**
   * close the lightbox on click to the lightox container
   */
  // lightboxContainerId.addEventListener("click", function () {
  //   lightboxContainerId.style.display = 'none';
  // });



}

