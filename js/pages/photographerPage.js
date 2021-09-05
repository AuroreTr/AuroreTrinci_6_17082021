class PhotographerPage{

    /**
     * un tableau de cartes
     * @type {Array}
     */
    photographers;

    /**
     * un tableau de media
     * @type {Array}
     */
    media;
  
    constructor(domTarget){
      this.domTarget = domTarget;
      // this.DOM = domTarget;
      // this.DOM.innerHTML = "loading";
      this.initPage();
    }
  
    async initPage(){
      const data = await dataManager.getAllData();
      // const data = await dataManager.getPhotographerData();
      // console.log(data);
      this.infoPhotographer = data.photographers;
      // console.log(this.dataPhotographer);
      this.mediaData = data.media;
      // console.log(this.mediaData);
      this.getPhotographerData(82);
      // this.render();
    }

    // render() {
      // this.DOM.innerHTML = obj;
    // }

    getPhotographerData(photographerId) {
      const infoPhotographer = this.infoPhotographer;
      infoPhotographer.forEach(element => {
        let photographerIdentifiant = element.id;
        if (photographerIdentifiant === photographerId) {
          let newPhotographer = new Photographer(element, this.domTarget, "fullview");
          console.log(newPhotographer);
        }
      });

      this.mediaData.forEach(element => {
        let id = element.photographerId;
        this.dataPhotographer = element;
        if (id === photographerId) {
          console.log(element);
          let newPhotographerData = new PhotographerMedia(element, this.domTarget);
          console.log(newPhotographerData);
        }
      });
          // console.log(infoPhotographer);
          // let newPhotographer = new Photographer(this.dataPhotographer, this.domTarget, "fullView");
          // console.log(newPhotographer);

        }

    }
  
    // render(){
    //   let newPhotographer = new Photographer(this.dataPhotographer, this.domTarget, "fullView");
    //   console.log(newPhotographer);

      // mediaData.forEach(element => {
      //   let id = element.photographerId;
      //   if (id === photographerId) {
          
      //   }
      //   });

      // this.media.forEach(element => {
      //   new PhotographerDetails(element);
      // });
      // console.log('ok');
    // }
  // }