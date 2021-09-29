class NavTags{
    constructor(tags, tagAction,  domTarget){
        this.DOM = document.createElement("nav");
        domTarget.appendChild(this.DOM);
        console.log(tags);
        tags.forEach(tag => {
            new Tag(tag, tagAction, this.DOM);
            
        });
    }
}