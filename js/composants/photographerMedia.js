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
      this.render();
    }
  
    /**
     * update DOM content
     *
     * @return  {Void}  [return description]
     */
    render(){
      this.DOM.innerHTML = this.image ? this.templateImage() : this.templateVideo();
      // new Header();

    }

    /**
     * get source of the media with the id photographer
     *
     * @return  {[String]} 
     */
    getSource() {
      // console.log(this.photographerId);
      switch (this.photographerId) {
        case 82:
          this.source = '../images/Tracy/';
          break;
        case 195:
          this.source = '../images/Marcel/';
          break;
        case 243:
          this.source = '../images/Mimi/';
          break;
        case 527:
          this.source = '../images/Nabeel/';
          break;
        case 925:
          this.source = '../images/Rhode/';
          break;
        case 930:
          this.source = '../images/Ellie_Rose/';
          break;
                              
        default:
          const err = 'Impossible de trouver la source du media';
          console.log(err);
          break;
      }
    }

    /**
     * template view of an image
     *
     * @return  {[String]}  [return html code]
     */
    templateImage(){
      this.getSource();
      return  `
      <img class='media' src='${this.source}${this.image}' alt='${this.description}'>
      <p>${this.title}</p>
      <p>${this.likes}</p>`;
    }

    /**
     * template view of a video
     *
     * @return  {[String]}  [return html code]
     */
    templateVideo(){
      this.getSource();
      return `
      <video controls class='media'>
        <source src='${this.source}${this.video}' type='video/mp4'>
        <p>${this.description}</p>
        <p>Votre navigateur ne prend pas en charge les videos</p>
      </video>
      <p>${this.title}</p>
      <p>${this.likes}</p>`;
    }


  }