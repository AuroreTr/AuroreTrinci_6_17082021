class Index{

    /**
     * un tableau de cartes
     * @type {Array}
     */
    photographers;
  
    constructor(domTarget){
      this.DOM = domTarget;
      this.DOM.innerHTML = "loading";
      this.initPage();
    }
  
    async initPage(){
      const data = await dataManager.getAllData();
      this.photographers = data.photographers;
      this.render();
    }
  
    render(){
      let html = "";
      let obj;
      this.photographers.forEach(element => {
        obj = new Photographer(element);
        html+= obj.html;
      });
      this.DOM.innerHTML = html;
    }
  }