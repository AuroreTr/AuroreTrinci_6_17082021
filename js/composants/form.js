import { SimpleComponent } from "./simpleComponent.js";
import { FormInput } from "./formInput.js";

export class Form{
    constructor(domTarget){
        // create a div with the 'content' class
        this.DOM = document.createElement('div');
        domTarget.appendChild(this.DOM);
        this.DOM.className = 'content';   
        this.render();
        domTarget.appendChild(this.DOM);     
    }

    render() {
        // create 3 tags (span, h3, h3) into the 'content' div
        new SimpleComponent('span', null, this.DOM, 'close', null, 'close');
        new SimpleComponent('h3', 'Contactez-moi', this.DOM, 'title-form', null, 'title-form');
        new SimpleComponent('h3', 'photographer name', this.DOM, 'photographer-name', null, 'photographer-name');

        // create a div with 'modal-body' class and id
        const modalBody = document.createElement('div');
        this.DOM.appendChild(modalBody);
        modalBody.className = 'modal-body';  
        modalBody.id = 'modal-body';  

        const form = document.createElement('form');
        modalBody.appendChild(form);
        form.className = 'contact-form';
        form.id = 'contact-form';
        form.setAttribute('action', 'photographerPage.html');
        form.setAttribute('method', 'get');
        // form.setAttribute('onsubmit', 'validate()');

        // create the labels and the inputs for all the entries of the contact form
        new FormInput(form, 'first-name', 'Prénom', {type: 'text', className: 'text first-name', id: 'first-name'}, {spanId: 'first-name-error', spanClass: 'verif'});
        new FormInput(form, 'last-name', 'Nom', {type: 'text', className: 'text last-name', id: 'last-name'}, {spanId: 'last-name-error', spanClass: 'verif'});
        new FormInput(form, 'email', 'Email', {type: 'email', className: 'text email', id: 'email'}, {spanId: 'email-error', spanClass: 'verif'});
        new FormInput(form, 'message', 'Votre message', {type: 'textarea', className: 'textarea message', id: 'message'}, {spanId: 'message-error', spanClass: 'verif'});

    }


    validText(input){
        
        // const inputList = document.querySelectorAll("input");
        // inputList.forEach(element => {
        // const domError = document.getElementById(element.id + "-error");
        
        // switch (element.type) {
        //     case "text":
        //     element.addEventListener("input", () => { validStringLength(element, domError) });
        //     break;
        //     case "email":
        //     element.addEventListener("input", () => { validEmail(element, domError) });
        //     break;
        //     case "date":
        //     element.addEventListener('input', () => { validateBirthDate(element, domError) });
        //     break;
        //     case'number':
        //     element.addEventListener('input', () => { validateQuantity(element, domError) });
        //     break;
        //     case 'radio':
        //     element.addEventListener('input', () => { validateLocation(element, domError) });
        //     break;
        //     case 'checkbox':
        //     element.addEventListener('input', () => { acceptCgv(element, domError) });
        //     break;
        // }
        // });

        // document.getElementById('btn-submit').addEventListener('click', function (e) {
        // // console.log('check2');
        // e.preventDefault();
        // let domError;
        // let erreurs = 0;
        // inputList.forEach(element => {
        //     domError = document.getElementById(element.id + "-error");
        //     switch (element.type) {
        //     case "text":
        //         if (!validStringLength(element, domError)) erreurs++;
        //         break;
        //     case "email":
        //         if (!validEmail(element, domError)) erreurs++;
        //         break;
        //     case "date":
        //         if(!validateBirthDate(element,  domError)) erreurs++;
        //         break;
        //     case "number":
        //         if (!validateQuantity(element, domError)) erreurs++;
        //         break;
        //     case "radio":
        //         if (!validateLocation(element,domError)) erreurs++;
        //         break;
        //     case 'checkbox':
        //         if (!acceptCgv(element, domError)) erreurs++;
        //         break;
        //     }
        // });
        // // console.log(birthDate.value);
        // // console.log(birthDate.value.length);
        // // console.log(erreurs);
        // if (erreurs === 0) {
        //     modalBody.innerHTML = `<p></p><p id='validation-message'>Nous vous remercions pour votre participation !</p><input id='close2' class='close2' value='Fermer'>`;
        //     const closeValidateModal = document.getElementById('close2');
        //     const validationMessage = document.getElementById('validation-message');
        //     modalBody.style.height = '80vh';
        //     modalBody.style.display = 'flex';
        //     modalBody.style.flexDirection = 'column';
        //     modalBody.style.justifyContent = 'space-between';
        //     modalBody.style.alignItems = 'center';
        //     validationMessage.style.fontSize = '2rem';
        //     validationMessage.style.textAlign = 'center';
        //     validationMessage.style.width = '75%';
        //     closeValidateModal.style.textAlign = 'center';
        //     closeValidateModal.style.width = '180px';
        //     closeValidateModal.style.padding = '12px 0';

        //     //close modal form after submit 
        //     closeValidateModal.addEventListener("click", function () {
        //     modalbg.style.display = "none";
        //     });

        //     return true;
        // }
        // return false;
        // });

    }
}