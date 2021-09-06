class NavTags{
    constructor(data, domTarget){
        this.DOM = document.createElement("nav");
        domTarget.appendChild(this.DOM);
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        }
    
        // this.tags = this.extractTags(data);
        this.tags = this.extractTags();

        this.render();
    }


    extractTags(){
        // const data = await dataManager.getAllData();
        this.infoPhotographer = data.photographers;
        console.log(this.infoPhotographer);
        const infoPhotographer = this.infoPhotographer;
        this.allTags = [];
  
        infoPhotographer.forEach(element => {
          // this.photographerTags = element.tags;
          // console.log(photographerTags);
          this.tags = element.tags;
          // console.log(this.tags);
          this.tags.forEach(element => {
            // console.log(element);
            this.allTags.push(element);
      
          });
        })
        console.log(this.allTags);
        let arrayTags = new Set(this.allTags);
        console.log(arrayTags);
  
        return [
            "art",
            "fashion"
     ];
    }

    render(){
        this.tags.forEach(tag => {
            new Tag(tag, this.DOM);
            
        });
    }
}