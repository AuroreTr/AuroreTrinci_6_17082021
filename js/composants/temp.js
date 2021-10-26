import {SimpleComponent} from "./simpleComponent.js";

import {Tag} from "./tag.js";
import {NavTags} from "./navtags.js";
import {ContactButton} from "./contactButton.js";



import {Tag} from "./tag.js";
export class NavTags{
    constructor(tags, tagAction,  domTarget, className=null){
        this.DOM = document.createElement("nav");
        if (className !== null) this.DOM.className = className;

        domTarget.appendChild(this.DOM);
        // console.log(tags);
        tags.forEach(tag => {
            new Tag(tag, tagAction, this.DOM);
            
        });
    }
}