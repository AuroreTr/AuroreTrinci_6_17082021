import {SimpleComponent} from "./simpleComponent.js";
export class ContactButton {

    constructor(domTarget) {
        // const domElement = createElement('button');
        // domTarget.appendChild(domElement);
        new SimpleComponent('button', 'Contactez-moi', domTarget, 'contact-btn', null, 'contact-btn');

        // const contactBtn = document.getElementsByClassName('contact-btn');
        // function onClickContactForm()
    }

    onClickContactForm() {
        const contactBtn = document.querySelector('contact-btn');

        contactBtn.addEventListener('click', function(e) {
            
        })
    }
}