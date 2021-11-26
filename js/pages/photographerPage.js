import { getPhotographerData,
  getPhotographerMedia,
  sortList } from "../dataManager.js";

import {Photographer} from "../composants/photographer.js";
import {Sorting} from "../composants/sorting.js";
import {PhotographerMedia} from "../composants/photographerMedia.js";
import {Header} from "../composants/header.js";
import {Form} from "../composants/form.js";
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
        "popularité",
        "date",
        "titre"
      ];
      this.photographerId = id;
      this.actualFilter = this.sortList[0];
      this.initPage();
    }
  
    async initPage(){
      this.infoPhotographer = await getPhotographerData(this.photographerId);
      // console.log(this.infoPhotographer);
      this.mediaList = await getPhotographerMedia(this.photographerId);
      this.mediaList = sortList(this.mediaList, this.actualFilter);
      this.render();
      this.updateLike();
    }

    render() {
      this.domTarget.innerText="";
      new Header(this.domTarget);
      new Photographer(this.infoPhotographer, this.domTarget, "fullview");
      new Sorting(this.domTarget);
      // new Sorting(this.domTarget, this.sortList, this.sortClick.bind(this));
      const allMedias = document.createElement('div');
      this.domTarget.appendChild(allMedias);
      allMedias.className = 'all-medias';
      this.mediaList.forEach(element => {
        new PhotographerMedia(element, allMedias);
      });

      this.domTarget.appendChild(allMedias);

      new Form(this.domTarget);
    }

    sortClick(keyword){

    }

    createContactForm(domTarget) {

      
    }
    updateLike(){
      // TODO : implémenter le total des likes du photographe
      function getNumberFromInnerHtml(element) {
        let value = element.innerHTML;
        // convert to number
        value = Number(value.replace(/[^0-9.-]+/g,""));
        return value;
      }
      
      let totalLikes = 0;
      const likes = document.getElementsByClassName('p.sum-likes');
      // console.log(likes);
      likes.forEach(element => {
        totalLikes += getNumberFromInnerHtml(element);
      });

    }
  }