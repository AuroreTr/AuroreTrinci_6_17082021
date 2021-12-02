import { getPhotographerData,
  getPhotographerMedia} from "../dataManager.js";

import {Photographer} from "../composants/photographer2.js";
import {Sorting} from "../composants/sorting.js";
import {PhotographerMedia} from "../composants/photographerMedia.js";
import {Header} from "../composants/header.js";
import {Form} from "../composants/form.js";
// import { SimpleComponent } from "../composants/simpleComponent.js";
import { Lightbox } from "../composants/lightbox.js";
// import {ContentForm} from "../composants/contentForm.js";
// import {Form} from "../composants/Form.js";
export class PhotographerPage{

    /**
     * un tableau de cartes
     * @type {Object}
     */
     infoPhotographer;

    /**
     * un tableau de media
     * @type {Array}
     */
  
    constructor(domTarget, id){
      this.domTarget = domTarget;
      this.domTarget.innerText = "loading";
      this.sortList = [
        "Popularité",
        "Date",
        "Titre"
      ];
      this.photographerId = id;
      this.render();
    }
  
    async render(){
      this.infoPhotographer = await getPhotographerData(this.photographerId);
      // console.log(this.infoPhotographer);
  
      new Header(this.domTarget);
      new Photographer(this.infoPhotographer, this.domTarget, "fullview");
      new Sorting(this.domTarget, this.sortList, this.updateMedia.bind(this));
      this.allMedias = document.createElement('div');
      this.domTarget.appendChild(this.allMedias);
      this.allMedias.className = 'all-medias';
      this.domTarget.appendChild(this.allMedias);

      new Lightbox(this.domTarget, this.photographerId);

      new Form(this.domTarget);
      this.updateMedia(this.sortList[0]);

      const totalLikesContainer = document.createElement('p');
      this.domTarget.appendChild(totalLikesContainer);
      this.totalLikesNb = document.createElement('p');
      totalLikesContainer.appendChild(this.totalLikesNb);
      this.updateLike();

    }

    updateMedia(filter) {
      this.allMedias.innerText="";
      // new Sorting(this.domTarget, this.sortList, this.sortClick.bind(this));
      
      const mediaList = getPhotographerMedia(this.photographerId, filter);
      mediaList.forEach(element => {
        new PhotographerMedia(element, this.allMedias);
      });
    }

    /**
     * return the total number of likes of the photographer's medias
     * and update the total for each update of individual likes of a media
     *
     * @return  {Void}  return the total number of likes to string
     */
    updateLike(){
      // TODO : écraser le résultat à l'update d'un like au lieu d'ajouter un nouveau paragraphe

      let totalLikes = 0;
      const nbOfLikes = document.querySelectorAll('p.sum-likes')
      
      nbOfLikes.forEach((likes) => {
        // console.log(likes.innerHTML);
        totalLikes += parseInt(likes.innerHTML);
      });
      this.totalLikesToString = totalLikes.toString();
      // console.log(totalLikesToString);
      // return totalLikes;
      // let totalLikesBandeau = new SimpleComponent('p', ' ', this.domTarget, 'total-likes', null, 'total-likes');
      // console.log(this.totalLikesNb);
      this.totalLikesNb.innerText = '';
      // console.log(this.totalLikesNb);
      this.totalLikesNb.innerHTML = this.totalLikesToString;

      
      // console.log(totalLikesToString);

    }

    manageContactFormModale() {
      const contactBtn = document.querySelectorAll('.contact-btn');
      const contactBtnClass = document.getElementById('contact-btn');

      // launch modal event
      contactBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
      // launch modal form
      function launchModal() {
          contactBtnClass.style.display = "initial";
      }
  
      // close modal form
      document.getElementById("close").addEventListener("click", function () {
          contactBtnClass.style.display = "none";
      });
  
      window.addEventListener('click', function (e) {
          if (e.target == contactBtn) {
              contactBtn.style.display = 'none';
          }
      })    
  }



  }