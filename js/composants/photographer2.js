import {Tag} from "./tag.js";
import {SimpleComponent} from "./simpleComponent.js";
import {NavTags} from "./navtags.js";
import {ContactButton} from "./contactButton.js";
export class Photographer {

    /**
     * photographer name
     * @type {string}
     */
    name;

    /**
     * photographer id
     * @type {number}
     */
    id;

    /**
     * photographer city
     * @type {String}
     */
    city;

    /**
     * photographer country
     * @type {String}
     */
    country;

    /**
     * photographer tags
     * @type {Array}
     */
    tags;

    /**
     * photographer tagline
     * @type {String}
     */
    tagline;

    /**
     * service rate of photographer
     * @type {Number}
     */
    price;

    /**
     * photographer photo
     * @type {String} 
     */ 
    portrait;
  
  
    /**
     * [constructor description]
     *
     * @param   {Object}  data  [data description]
     * @param   {String}  data.name  [data description]
     * @param   {Number}  data.id  [data description]
     * @param   {String}  data.city  [data description]
     * @param   {String}  data.country  [data description]
     * @param   {Array}   data.tags  [data description]
     * @param   {String}  data.tagline  [data description]
     * @param   {Number}  data.price  [data description]
     * @param   {string}  data.portrait  [data description]
     * 
     * @constructor
     */
    constructor(data, domTarget, view){
      if (view === 'fullview') {
        const margin = document.createElement('div');
        margin.className = 'margin';
        domTarget.appendChild(margin);  
      }
      this.DOM = document.createElement("article");
      if (view === 'resume') this.DOM.className = 'resume-view';
      if (view === 'fullview') this.DOM.className = 'full-view';
      domTarget.appendChild(this.DOM);
      for (const [key, value] of Object.entries(data)) {
        this[key] = value;
      }
      view === "resume" ? this.resume() : this.fullView();
    }

    insertTags(domTarget){
      for (const tagName of this.tags) {
        new Tag(tagName, null, domTarget, 'fullview-tag');
      }
    }
  
    /**
     * resume view of photographer infos
     *
     * @return  {Void}  [return description]
     */
    resume(){
      const link = document.createElement('a');
      // @ts-ignore
      link.onclick = ()=>{ window.changePage("photographer", this.id) };
      const image = link.appendChild(document.createElement('img'));
      image.className = 'portrait';
      image.setAttribute('src', `../images/photographers_id_photos/${this.portrait}`);
      image.setAttribute('alt', `Photo de ${this.name}`);
      new SimpleComponent('h2', this.name, link);
      this.DOM.appendChild(link);
      new SimpleComponent('address', this.city+', '+this.country, this.DOM, 'localisation-index', 'localisation');
      new SimpleComponent('span', this.tagline, this.DOM, 'tagline-index', 'tagline');
      new SimpleComponent('span', this.price+'€/jour', this.DOM, 'price');
      const container = document.createElement('p');
      this.DOM.appendChild(container);
      this.insertTags(container);
    }

    /**
     * full view of photographer infos
     *
     * @return  {Void}  [return description]
     */
    fullView(){
      const container = document.createElement("div");
      container.classList.add('photographer-info');
      new SimpleComponent("h2", this.name,container, 'name-fullview');
      new SimpleComponent('address', this.city+', '+this.country, container, 'localisation-index', 'localisation');
      new SimpleComponent("span", this.tagline,container, 'tagline-fullview');
      new NavTags(this.tags, null, container, 'tag-fullview');
      this.DOM.appendChild(container);
      // new contactButton();
      new ContactButton(this.DOM);
      const image = document.createElement('img');
      image.className = 'portrait-fullview';
      image.setAttribute('src', `../images/photographers_id_photos/${this.portrait}`);
      image.setAttribute('alt', `Photo de ${this.name}`);
      this.DOM.appendChild(image);
    }
  }