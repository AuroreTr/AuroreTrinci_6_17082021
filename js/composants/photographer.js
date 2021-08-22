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
     * @type {string}
     */
    country;

    /**
     * photographer tags
     * @type {Array}
     */
    tags;

    /**
     * photographer tagline
     * @type {string}
     */
    tagline;

    /**
     * service price of photographer
     * @type {number}
     */
    price;

    /**
     * photographer photo
     * @type {string} 
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
     * @param   {String}  data.tags  [data description]
     * @param   {String}  data.tagline  [data description]
     * @param   {number}  data.price  [data description]
     * @param   {string}  data.portrait  [data description]
     * 
     * @constructor
     */
    constructor(data){
      for (const [key, value] of Object.entries(data)) {
        this[key] = value;
      }
    }
  
    /**
     * photographer html code
     *
     * @return  {String}  [return description]
     */
    get html(){
      return `
        <article>
            <a href='#'>
                <img src='../images/photographers_id_photos/${this.portrait}'>
                <h2>${this.name}</h2>
            </a>
            <p class='location'>${this.city}, ${this.country}</p>
            <p class='tagline'>${this.tagline}</p>
            <p class='price'>${this.price}</p>
            <p class='tags'>${this.tags}</p>
        </article>`

        // <article>
        //   <img src="${this.img}">
        //   <h2>${this.titre}</h2>
        // </article>
      
    }
  }