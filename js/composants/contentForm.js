import {SimpleComponent} from "./simpleComponent.js";

export class ContentForm {

    constructor(domTarget){
        const content = document.createElement('div');
        domTarget.appendChild(content);
        content.className = 'content';
        new SimpleComponent('span', null, content, 'close', null, 'close');
        new SimpleComponent('h3', 'Contactez-moi', content, 'title-form', null, 'title-form');
        new SimpleComponent('h3', 'à récupérer', content, 'photographer-name', null, 'photographer-name');
        new SimpleComponent('div', null, content, 'modal-body', null, 'modal-body');
    }
}