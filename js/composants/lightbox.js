import { getPhotographerMedia } from "../dataManager.js";

export class Lightbox {
  constructor(domTarget, id) {
    this.DOM = domTarget;
    this.photographerId = id;
    this.initPage();
  }

  async initPage() {
    console.log("ok1");

    this.mediaList = await getPhotographerMedia(this.photographerId);
    this.createHtmlModale();
    this.render();
  }

  render() {}


  createHtmlModale() {
    // console.log("ok");
    // creation of the container of the modal
    let modaleContainer = document.createElement("div");
    this.DOM.appendChild(modaleContainer);
    modaleContainer.className = "modale-container";
    modaleContainer.id = "modale-container";

    // creation of the modal
    let modale = document.createElement("div");
    modaleContainer.appendChild(modale);
    modale.className = "modale";
    modale.id = "modale";

    // creation of the close button
    const close = document.createElement("i");
    modale.appendChild(close);
    close.className = "fas";
    close.id = "close";
    close.classList.add("fa-times", "close");

    // creation of the chevrons for the previous and next btn
    const previous = document.createElement("i");
    modale.appendChild(previous);
    previous.className = "fa";
    previous.classList.add("fa-chevron-left", "previous");
    const next = document.createElement("i");
    modale.appendChild(next);
    next.className = "fa";
    next.classList.add("fa-chevron-right", "next");

    // creation of the content of the modal
    const modaleContent = document.createElement("div");
    modale.appendChild(modaleContent);
    modaleContent.className = "modale-content";

    // creation of container of the image
    const media = document.createElement("img");
    modaleContent.appendChild(media);
    media.className = 'media-img';
    media.setAttribute("src", "");
    media.setAttribute("alt", "");
  }

  manageModale() {
    const modaleFull = document.querySelector("#modale-container");
    const closeModale = document.querySelector("#close");
    const links = document.querySelectorAll(".media-link");

    // we add the click listener on the links
    for(let link of links){
        link.addEventListener("click", function(e){
            e.preventDefault();

            // On ajoute l'image du lien cliqué dans la modale
            const image = modaleFull.querySelector(".media-img"); //TOFIX
            image.src = this.href;

            // On affiche la modale
            modaleFull.classList.add("show");
        });
    }
    
    // On active le bouton close
    closeModale.addEventListener("click", function(){
        modaleFull.classList.remove("show");
    });

    // On ferme au clic sur la modale
    modaleFull.addEventListener("click", function(){
        modaleFull.classList.remove("show");
    });

    // TODO : créer les fonctionnalités des boutons previous and next
  }

}
