import {SimpleComponent} from "./simpleComponent.js";
export class ContactButton {

    constructor(domTarget) {
        // const domElement = createElement('button');
        // domTarget.appendChild(domElement);
        new SimpleComponent('button', 'Contactez-moi', domTarget, 'contact-btn', null, 'contact-btn');
        // const contactBtn = document.createElement('button');
        // domTarget.appendChild(contactBtn);
        // contactBtn.innerText = 'Contactez-moi';
        // contactBtn.classList.add('contact-btn'); 
        // contactBtn.id = 'contact-btn';
        // contactBtn.setAttribute('aria-label', 'cliquez sur ce bouton pour accéder au formulaire de contact');
        // const contactBtn = document.getElementsByClassName('contact-btn');
        // function onClickContactForm()
    }

    onClickContactForm() {
        const contactBtn = document.querySelector('contact-btn');

        contactBtn.addEventListener('click', function(e) {
            
        })
    }
}