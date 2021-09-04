class Photographer {

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
     * a media desciption
     * @type {String}
     */
    description;

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
     * service price of photographer
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
     * @param   {number}  data.id  [data description]
     * @param   {String}  data.city  [data description]
     * @param   {String}  data.country  [data description]
     * @param   {Array}   data.tags  [data description]
     * @param   {String}  data.tagline  [data description]
     * @param   {number}  data.price  [data description]
     * @param   {string}  data.portrait  [data description]
     * 
     * @constructor
     */
    constructor(data, domTarget, view){
      this.DOM = document.createElement("article");
      domTarget.appendChild(this.DOM);
      for (const [key, value] of Object.entries(data)) {
        this[key] = value;
      }
      this.DOM.innerHTML = view === "resume" ? this.resume() : this.fullView();
    }

  
    /**
     * photographer html code
     *
     * @return  {String}  [return description]
     */
    resume(){
      return `
        <article>
            <a href='?photographer/${this.id}'>
                <img class='portrait' src='../images/photographers_id_photos/${this.portrait}' alt="${this.description}">
                <h2>${this.name}</h2>
            </a>
            <p class='location'>${this.city}, ${this.country}</p>
            <p class='tagline'>${this.tagline}</p>
            <p class='price'>${this.price}</p>
            <p class='tags'>${this.tags}</p>
        </article>`
    }

    fullView(){
      `
      <h1>full view ${this.name}</h1>
      `
    }


  }