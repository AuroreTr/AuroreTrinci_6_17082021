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
      // console.log(this.getTags(domTarget));

      // this.tagFunction = this.getTags();

    }

    // getTags() {
    //   this.tags.forEach(element => {
    //     console.log(element);
    //   });
    // }

    // getTags(domTarget) {
      // this.DOM = document.createElement("p");
      // targetDom.appendChild(this.DOM);
      // domTarget.appendChild(this.DOM);
      // this.tags.forEach(element => {
      //   this.tag = element;
      //   this.DOM.innerHTML+=`<a class='tags' href='?'>${this.tag}</a>`;
      //   console.log(this.tag);


        // this.tags.forEach(tag => {
        //   this.tag = tag;
        //   let tagHtml = `<a class='tags' href='?'>${this.tag}</a>`;
        //   console.log(this.tag);

        // })
    // }
    


  
    /**
     * resume view of photographer infos
     *
     * @return  {String}  [return description]
     */
    resume(){
      return `
        <a href='?photographer/${this.id}'>
            <img class='portrait' src='../images/photographers_id_photos/${this.portrait}' alt="${this.description}">
            <h2>${this.name}</h2>
        </a>
        <p class='location'>${this.city}, ${this.country}</p>
        <p class='tagline'>${this.tagline}</p>
        <p class='price'>${this.price}</p>`
    }

    /**
     * full view of photographer infos
     *
     * @return  {[String]}  [return description]
     */
    fullView(){
      this.tags.forEach(element => {
        this.tag = element;
        this.DOM.innerHTML+=`<a class='tags' href='?'>${this.tag}</a>`;
      });


      return `
        <div>
          <h1>${this.name}</h1>
          <p>${this.country}</p>
          <p>${this.tagline}</p>
          <p>${this.tag}</p>
        </div>
        <button class="contact-me">Contactez-moi</button>
        <img class='portrait' src='../images/photographers_id_photos/${this.portrait}' alt="${this.photographerImageDescription}">`
    }
  }