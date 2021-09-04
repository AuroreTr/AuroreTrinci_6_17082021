class PhotographerDetails {

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
      this.render();
    }
  
    /**
     * update DOM content
     *
     * @return  {void}  [return description]
     */
    render(){
      this.DOM.innerHTML = this.image ? this.templateImage() : this.templateVideo();
    }

    templateImage(){
      return  `
      <img class='media' src='../images/Mimi/${this.image}' alt='${this.description}'>
      <p>${this.title}</p>
      <p>${this.likes}</p>`;
    }

    templateVideo(){
      return 

        // <article>
        //     <a href='?photographer/${this.id}'>
        //         <img class='portrait' src='../images/photographers_id_photos/${this.portrait}' alt="${this.description}">
        //         <h2>${this.name}</h2>
        //     </a>
        //     <p class='location'>${this.city}, ${this.country}</p>
        //     <p class='tagline'>${this.tagline}</p>
        //     <p class='price'>${this.price}</p>
        //     <p class='tags'>${this.tags}</p>
        // </article>`;
    }


  }