import { getPhotographerData, getPhotographerMedia } from "../dataManager.js";

import { Photographer } from "../composants/photographer2.js";
import { Sorting } from "../composants/sorting.js";
import { PhotographerMedia } from "../composants/photographerMedia.js";
import { Header } from "../composants/header.js";
import { Form } from "../composants/form.js";
// import { SimpleComponent } from "../composants/simpleComponent.js";
import { Lightbox } from "../composants/lightbox.js";
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
    this.sortList = ["Popularité", "Date", "Titre"];
    this.photographerId = id;
    this.render();
    // console.log(this.domTarget);
  }

  async render() {
    this.infoPhotographer = await getPhotographerData(this.photographerId);
    // console.log(this.infoPhotographer);

    new Header(this.domTarget);
    new Photographer(this.infoPhotographer, this.domTarget, "fullview");
    new Sorting(this.domTarget, this.sortList, this.updateMedia.bind(this));
    this.allMedias = document.createElement("div");
    this.domTarget.appendChild(this.allMedias);
    this.allMedias.className = "all-medias";
    this.domTarget.appendChild(this.allMedias);

    new Form(this.domTarget);

    
    // new Lightbox(this.domTarget, this.photographerId, this.mediaList);

    this.updateMedia(this.sortList[0]);

    const totalLikesContainer = document.createElement("p");
    this.domTarget.appendChild(totalLikesContainer);
    this.totalLikesNb = document.createElement("p");
    totalLikesContainer.appendChild(this.totalLikesNb);
    this.updateLike();
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
      new PhotographerMedia(element, this.allMedias);
    });
  }

  /**
   * return the total number of likes of the photographer's medias
   * and update the total for each update of individual likes of a media
   *
   * @return  {Void}  return the total number of likes to string
   */
  updateLike() {
    // TODO : écraser le résultat à l'update d'un like au lieu d'ajouter un nouveau paragraphe

    let totalLikes = 0;
    const nbOfLikes = document.querySelectorAll("p.sum-likes");

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
      console.log('launch modal');
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
    console.log("ok", id, this.mediaList)
<<<<<<< HEAD
    new Lightbox(this.domTarget, id, this.mediaList)
=======
    new Lightbox(this.domTarget, id, this.mediaList, this.photographerId);
    document.getElementById('container-lightbox').style.display = 'block';
>>>>>>> preprod
  }
}
