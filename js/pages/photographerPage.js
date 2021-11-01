import { getPhotographerData,
  getPhotographerMedia,
  sortList } from "../dataManager.js";

import {Photographer} from "../composants/photographer.js";
import {Sorting} from "../composants/sorting.js";
import {PhotographerMedia} from "../composants/photographerMedia.js";
import {Header} from "../composants/header.js";
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
  
    constructor(domTarget){
      this.domTarget = domTarget;
      this.domTarget.innerText = "loading";
      this.sortList = [
        "popularité",
        "date",
        "titre"
      ];
      this.actualFilter = this.sortList[0];
      this.initPage();
    }
  
    async initPage(){
      this.infoPhotographer = await getPhotographerData(82);
      console.log(this.infoPhotographer);
      this.mediaList = await getPhotographerMedia(82);
      this.mediaList = sortList(this.mediaList, this.actualFilter);
      this.render();
    }

    render() {
      this.domTarget.innerText="";
      new Header(this.domTarget);
      new Photographer(this.infoPhotographer, this.domTarget, "fullview");
      new Sorting(this.domTarget);
      // new Sorting(this.domTarget, this.sortList, this.sortClick.bind(this));
      this.mediaList.forEach(element => {
        new PhotographerMedia(element, this.domTarget);
      });
    }

    sortClick(keyword){

    }

    // createContactForm() {

    //   // const form = document.createElement('form');
    //   // contentForm.appendChild(form);
    //   const form = new Form(form);

    //   const contentForm = document.createElement('div');
    //   contentForm.appendChild(this.domTarget);
    //   contentForm.className = 'bground';
    //   new ContentForm(form.DOM, form.validText);
    //   new Input(this.DOM, {type:"text","className":"lmklmkmlk", oninput:form.validText})

    //   const formData = document.createElement('div');
    //   form.appendChild(formData);
    //   new FormData()
    // }
  }