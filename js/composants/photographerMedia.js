import { SimpleComponent } from "./simpleComponent.js";
import { getSource } from "../dataManager.js";

export class PhotographerMedia {

    /**
     * photographer id
     * @type {number}
     */
    photographerId;

    /**
     * media title
     * @type {String}
     */
    title;

    /**
     * image of media
     * @type {String}
     */
    image;

    /**
     * video of media
     * @type {String}
     */
    video;

    /**
     * photographer tags
     * @type {Array}
     */
    tags;

    /**
     * number of likes
     * @type {Number}
     */
    likes;

    /**
     * a media desciption
     * @type {String}
     */
    description;

    /**
     * a media desciption
     * @type {String}
     */
    date;

    /**
     * a media desciption
     * @type {Number}
     */
    price;

    liked = false;

    /**
     * titre + likes
     * @type {HTMLElement}
     */
    containerMediaInfos;

    /**
     * [constructor description]
     *
     * @param   {Object}  data  [data description]
     * @param   {Number}  data.photographerId  [data description]
     * @param   {String}  data.title  [data description]
     * @param   {String}  data.image  [data description]
     * @param   {String}  data.video  [data description]
     * @param   {Array}   data.tags  [data description]
     * @param   {Number}  data.likes  [data description]
     * @param   {String}  data.description  [data description]
     * @param   {String}  data.date  [data description]
     * @param   {Number}  data.price  [data description]
     * @param   {HTMLElement} domTarget   l'endroit dans le DOM où l'on va insérer l'élément

     * 
     * @constructor
     */
    constructor(data, domTarget){
      this.DOM = document.createElement("article");
      domTarget.appendChild(this.DOM);
      for (const [key, value] of Object.entries(data)) {
        this[key] = value;
      }
      this.photographerId = data.photographerId;
      this.source = getSource(this.photographerId);
      this.DOM.innerHTML = this.image ? this.templateImage() : this.templateVideo();

      this.containerMediaInfos = document.createElement("p");
      this.containerMediaInfos.className = "media-infos";
      this.DOM.appendChild(this.containerMediaInfos);
      
      this.DOM.appendChild(this.containerMediaInfos);
      this.render();

    }
  
    /**
     * update DOM content
     *
     * @return  {Void}  [return description]
     */
    render(){
      // console.log(this)
      this.containerMediaInfos.innerHTML = `
      <h4 class='media-title'>${this.title}</h4>
      `;
      this.containerLikes = document.createElement('span');
      this.containerLikes.className = 'media-likes';
      this.containerMediaInfos.appendChild(this.containerLikes);

      new SimpleComponent('span', `${this.likes}`, this.containerLikes, 'sum-likes');
      this.addHeart();
    }


    /**
     * template view of an image
     *
     * @return  {String}  [return html code]
     */
    templateImage(){
      return `
      <img class='media' src='${this.source}${this.image}' tilte="${this.title}" onclick="page.startLightbox('${this.id}')" alt='${this.description}'>
      `;
    }

    /**
     * template view of a video
     *
     * @return  {String}  [return html code]
     */
    templateVideo(){
      return `
      <a class='media-link' href='${this.source}${this.video}'>
        <video controls class='media'>
          <source src='${this.source}${this.video}' type='video/mp4'>
          <p>${this.description}</p>
          <p>Votre navigateur ne prend pas en charge les videos</p>
        </video>
      </a>`;
    }

    addHeart(){
      // console.log("i", this.image)
      const coeur = document.createElement("i");
      coeur.className = "fa-heart ";
      coeur.id = "fa-heart";
      coeur.classList.add( this.liked? "fas" : "far");
      coeur.onclick = ()=>{
        this.liked = !this.liked;
        this.likes += this.liked ? 1 : -1;
        this.render();
        // @ts-ignore
        window.page.updateLike(this.liked);
      }
      this.containerLikes.appendChild(coeur);
    }
    

  }