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
      this.DOM.className = 'resume-view';
      domTarget.appendChild(this.DOM);
      for (const [key, value] of Object.entries(data)) {
        this[key] = value;
      }
      view === "resume" ? this.resume() : this.fullView();
      // this.extractTags(this.tags);
      // console.log(this.getTags(domTarget));

      // this.tagFunction = this.getTags();

    }

    insertTags(domTarget){
      // const data = await dataManager.getAllData();
      // this.infoPhotographer = data;
      // console.log(this.infoPhotographer);
      // const infoPhotographer = this.infoPhotographer;
      // this.allTags = [];

      // infoPhotographer.forEach(element => {
      //   // this.photographerTags = element.tags;
      //   // console.log(photographerTags);
      // this.tags = element.tags;
      // console.log(this.tags);
      // console.log(this.tags);
      for (const tagName of this.tags) {
        new Tag(tagName, null, domTarget);
        // console.log(this.newTag);
        // return `<a href='?'>${this.tag}</a>`;

        // return `
        //   <a href='?'>${name}</a>`;

        
      }
      // this.tags.forEach(name => {
      //   this.name = name;
      //   console.log(this.name);

      //   return `
      //     <a href='?'>${this.name}</a>`
      //   // this.allTags.push(name);
  
      // });
      // })
    //   console.log(this.allTags);
    //   let arrayTags = new Set(this.allTags);
    //   console.log(arrayTags);

    //   arrayTags.forEach(element)
    // }


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
    }
    


  
    /**
     * resume view of photographer infos
     *
     * @return  {Void}  [return description]
     */
    resume(){
      const link = document.createElement('a');
      const image = link.appendChild(document.createElement('img'));
      image.className = 'portrait';
      image.setAttribute('src', `../images/photographers_id_photos/${this.portrait}`);
      image.setAttribute('alt', `Photo de ${this.name}`);
      new SimpleComponent('h2', this.name, link);
      this.DOM.appendChild(link);
      new SimpleComponent('p', this.city+', '+this.country, this.DOM, 'localisation-index', 'localisation');
      new SimpleComponent('p', this.tagline, this.DOM, 'tagline-index', 'tagline');
      new SimpleComponent('p', this.price+'€/jour', this.DOM, 'price');
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
      new SimpleComponent("h1", this.name,container);
      new SimpleComponent("p", this.country,container);
      new SimpleComponent("p", this.tagline,container);
      new NavTags(this.tags, container);
      this.DOM.appendChild(container);
      // new contactButton();
      // new ImagePhotographer();
      
    }
  }