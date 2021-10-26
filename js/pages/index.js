import Photographer from "../composants/photographer.js";

import {getPhotographers, getPhotographersTags} from "../dataManager.js";
export class Index{

    /**
     * un tableau de cartes
     * @type {Array}
     */
    photographers;
  
    constructor(domTarget){
      this.DOM = domTarget;
      this.filters = [];

      /*
      TODO : décommenter line 14 et le faire disparaitre à l'appel de initPage()
      */
     
      // this.DOM.innerHTML = "loading";
      this.render();
    }

    createNewPhotographer() {
      this.photographers.forEach(element => {
        new Photographer(element, this.DOM, "resume");
     });

    }
  
    async render(){
      this.DOM.innerText="";
      this.photographers = await getPhotographers(this.filters);
      this.tags = getPhotographersTags();
      new Header(this.DOM, this.tags, this.tagClick.bind(this), 'Nos photographes');
      const container = document.createElement('main');
      this.DOM.appendChild(container);
      this.photographers.forEach(element => {
         new Photographer(element, container, "resume");
      });
      this.DOM.appendChild(container);
    }

    tagClick(tagName){
      const index = this.filters.indexOf(tagName);
      if (index >= 0) this.filters.splice(index, 1);
      else this.filters.push(tagName);
      this.render();
    }
  }