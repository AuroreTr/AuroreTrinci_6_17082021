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
      let html = `
        <header>
          <img class='logo' src="images/logo.png" alt="logo FishEye">
          <nav aria-label="photographer-categories">
            <div><a href='?'>Passer au contenu</a></div>
            <a href="?">#Portrait</a>
            <a href="?">#Art</a>
            <a href="?">#Fashion</a>
            <a href="?">#Architecture</a>
            <a href="?">#Travel</a>
            <a href="?">#Sport</a>
            <a href="?">#Animals</a>
            <a href="?">#Events</a>
          </nav>
        </header>
      `;
      let obj;
      this.photographers.forEach(element => {
        obj = new Photographer(element);
        html+= obj.html;
      });
      this.DOM.innerHTML = html;
    }
  }