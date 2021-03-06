import { getPhotographerData, getPhotographerMedia,
  getPrice } from "../dataManager.js";

import { Photographer } from "../composants/photographer2.js";
import { Sorting } from "../composants/sorting.js";
import { FactoryMedia } from "../composants/factoryMedia.js";
import { Header } from "../composants/header.js";
import { Form } from "../composants/form.js";
// import { SimpleComponent } from "../composants/simpleComponent.js";
import { Lightbox } from "../composants/lightbox.js";
import { SimpleComponent } from "../composants/simpleComponent.js";
// import {ContentForm} from "../composants/contentForm.js";
// import {Form} from "../composants/Form.js";
export class PhotographerPage {
  /**
   * un tableau de cartes
   * @type {Object}
   */
  infoPhotographer;

  /**
   * un tableau de media
   * @type {Array}
   */

  constructor(domTarget, id) {
    this.domTarget = domTarget;
    // this.domTarget.innerText = "loading";
    this.sortList = ["Popularit√©", "Date", "Titre"];
    this.photographerId = id;
    this.render();
    // console.log(this.domTarget);
  }

  async render() {
    this.infoPhotographer = await getPhotographerData(this.photographerId);
    this.price = await getPrice(this.photographerId);

    // console.log(this.infoPhotographer);

    new Header(this.domTarget);
    new Photographer(this.infoPhotographer, this.domTarget, "fullview");
    new Sorting(this.domTarget, this.sortList, this.updateMedia.bind(this));
    this.allMedias = document.createElement("div");
    this.domTarget.appendChild(this.allMedias);
    this.allMedias.className = "all-medias";
    this.domTarget.appendChild(this.allMedias);

    new Form(this.domTarget, this.photographerId);

    
    // new Lightbox(this.domTarget, this.photographerId, this.mediaList);

    this.updateMedia(this.sortList[0]);

    const totalLikesContainer = document.createElement("div");
    this.domTarget.appendChild(totalLikesContainer);
    totalLikesContainer.classList.add('total-likes-container');
    const likesResult = document.createElement('div');
    totalLikesContainer.appendChild(likesResult);
    likesResult.classList.add('likes-result');
    this.totalLikesNb = document.createElement("span");
    likesResult.appendChild(this.totalLikesNb);
    this.totalLikesNb.classList.add('total-like');
    this.updateLike();
    const heartLikesResult = document.createElement('i');
    likesResult.appendChild(heartLikesResult);
    heartLikesResult.classList.add('fas', 'fa-heart', 'likes-result-heart');
    const pricePerDay = document.createElement('span');
    totalLikesContainer.appendChild(pricePerDay);
    pricePerDay.innerText = `${this.price}‚ā¨/ jour`;

    // this.launchLightbox();
    this.manageContactFormModale();

    // const links = document.querySelectorAll(".media-link");
    // for (let link of links) {
    //   link.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     console.log(link);
    //     new Lightbox(this.domTarget, this.photographerId);

    //   });
    // }
  }

//   launchLightbox() {
//     const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]'));
//     const gallery = links.map(link => link.getAttribute('href'));
//     links.forEach(link => link.addEventListener('click', (e) => {
//         e.preventDefault()
//         console.log(link);
//         // new Lightbox(e.getAttribute('href'), gallery)
//         }));
// }

  updateMedia(filter) {
    this.allMedias.innerText = "";
    // new Sorting(this.domTarget, this.sortList, this.sortClick.bind(this));

    this.mediaList = getPhotographerMedia(this.photographerId, filter);
    this.mediaList.forEach((element) => {
      new FactoryMedia(element, this.allMedias);
    });
  }

  /**
   * return the total number of likes of the photographer's medias
   * and update the total for each update of individual likes of a media
   *
   * @return  {Void}  return the total number of likes to string
   */
  updateLike() {
    // TODO : √©craser le r√©sultat √† l'update d'un like au lieu d'ajouter un nouveau paragraphe

    let totalLikes = 0;
    const nbOfLikes = document.querySelectorAll("span.sum-likes");
    nbOfLikes.forEach((likes) => {
      // console.log(likes.innerHTML);
      totalLikes += parseInt(likes.innerHTML);
    });
    this.totalLikesToString = totalLikes.toString();
    // console.log(totalLikesToString);
    // return totalLikes;
    // let totalLikesBandeau = new SimpleComponent('p', ' ', this.domTarget, 'total-likes', null, 'total-likes');
    // console.log(this.totalLikesNb);
    this.totalLikesNb.innerText = "";
    // console.log(this.totalLikesNb);
    this.totalLikesNb.innerHTML = this.totalLikesToString;

    // console.log(totalLikesToString);
  }

  /**
   * launch or close the modal of the contact-form
   *
   * @return  {Void}  [return description]
   */
  manageContactFormModale() {
    const contactForm = document.getElementById("content");

    // launch modal form
    document.getElementById("contact-btn").addEventListener("click", function () {
      // console.log('launch modal');
        contactForm.style.display = "initial";
      });

    // close modal form
    document.getElementById("close").addEventListener("click", function () {
      contactForm.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === contactForm) {
        contactForm.style.display = "none";
      }
    });
  }

  startLightbox(id){
    // console.log("ok", id, this.mediaList)
    new Lightbox(this.domTarget, id, this.mediaList);
    document.getElementById('container-lightbox').style.display = 'block';
  }
}
