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

    getTags() {
      tagHtml = '<p>';
      this.photographers.forEach(element => {
        // console.log(element.tags);
        this.tags = element.tags;
        this.tags.forEach(tag => {
          this.tag = tag;
          tagHtml+=`<a class='tags' href='?'>${this.tag}</a>`;
        })
      })
      console.log(tagHtml);
    }

  
    render(){
      // new Header()
      this.photographers.forEach(element => {
         new Photographer(element, this.DOM, "resume");
      });
      this.DOM.innerHTML = html;
      html+= `</main>`;
    }
  }