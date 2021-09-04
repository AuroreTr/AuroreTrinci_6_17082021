class NavTags{
    constructor(data, domTarget){
        this.DOM = document.createElement("nav");
        domTarget.appendChild(this.DOM);
        this.tags = this.extractTags(data);
        this.render();
    }


    extractTags(data){
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