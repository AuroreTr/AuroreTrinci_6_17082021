import { getPhotographers, getPhotographersTags } from "../dataManager.js";
import {Photographer} from "../composants/photographer.js";
import {Header} from "../composants/header.js";

// import {getPhotographers, getPhotographersTags} from "../dataManager.js";
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
      this.firstRender();
    }

    // createNewPhotographer() {
    //   this.photographers.forEach(element => {
    //     new Photographer(element, this.DOM, "resume");
    //  });

    // }

    async firstRender(){
      this.tags = await getPhotographersTags();
      new Header(this.DOM, this.tags, this.tagClick.bind(this), 'Nos photographes');
      this.main =  document.createElement('main');
      this.main.id = 'main-index';
      this.DOM.appendChild(this.main);
      this.render();
    }
  
    render(){
      this.main.innerText="";
      this.photographers = getPhotographers(this.filters);
      this.photographers.forEach(element => {
         new Photographer(element, this.main, "resume");
      });
    }

    tagClick(tagName){
      const index = this.filters.indexOf(tagName);
      if (index >= 0) this.filters.splice(index, 1);
      else this.filters.push(tagName);
      this.render();
    }
  }