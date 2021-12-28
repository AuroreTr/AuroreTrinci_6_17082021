import {Tag} from "./tag.js";
export class NavTags{
    constructor(tags, tagAction,  domTarget, className=null, activeList=[]){
        this.DOM = document.createElement("nav");
        if (className !== null) this.DOM.className = className;        
        domTarget.appendChild(this.DOM);
        let btnClassName;
        tags.forEach(tag => {
            btnClassName =  activeList.indexOf(tag) ===-1 ? null  : "active";
            new Tag(tag, tagAction, this.DOM, btnClassName);
        });
    }
}