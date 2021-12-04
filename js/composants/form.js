import { SimpleComponent } from "./simpleComponent.js";
import { FormInput } from "./formInput.js";

export class Form {

    constructor(domTarget) {
        // create a div with the 'content' class
        this.DOM = document.createElement("div");
        domTarget.appendChild(this.DOM);
        this.DOM.className = "content";
        this.DOM.id = "content";

        // create a div with 'modal-body' class and id
        this.modalBody = document.createElement("div");
        this.DOM.appendChild(this.modalBody);
        this.modalBody.className = "modal-body";
        this.modalBody.id = "modal-body";
        this.modalBody.innerHTML = '';

        this.render();
        // domTarget.appendChild(this.DOM);
        this.validInputs();
    }

    render() {
        const close = document.createElement("i");
        this.modalBody.appendChild(close);
        close.id = "close";
        close.className = "close";
        close.classList.add("fas", "fa-times");

        new SimpleComponent(
            "h3",
            "Contactez-moi",
            this.modalBody,
            "title-form",
            null,
            "title-form"
        );
        new SimpleComponent(
            "h3",
            "photographer name",
            this.modalBody,
            "photographer-name",
            null,
            "photographer-name"
        );

        const form = document.createElement("form");
        this.modalBody.appendChild(form);
        form.className = "contact-form";
        form.id = "contact-form";
        // form.setAttribute("action", "photographerPage.html");
        // form.setAttribute("method", "get");
        // form.setAttribute('onsubmit', 'validate()');

        // create the labels and the inputs for all the entries of the contact form
        new FormInput(
            form,
            "first-name",
            "Prénom",
            { type: "text", className: "text first-name", id: "first-name" },
            { id: "first-name-error", className: "verif" }
        );
        new FormInput(
            form,
            "last-name",
            "Nom",
            { type: "text", className: "text last-name", id: "last-name" },
            { id: "last-name-error", className: "verif" }
        );
        new FormInput(
            form,
            "email",
            "Email",
            { type: "email", className: "text email", id: "email" },
            { id: "email-error", className: "verif" }
        );
        new FormInput(
            form,
            "message",
            "Votre message",
            { type: "textarea", className: "textarea message", id: "message" },
            { id: "message-error", className: "verif" }
        );

        // submit button
        const submitBtnContainer = document.createElement('div');
        form.appendChild(submitBtnContainer);
        submitBtnContainer.className = 'submit-btn-container';
        const submitBtn = document.createElement("button");
        submitBtnContainer.appendChild(submitBtn);
        submitBtn.className = "submit-btn";
        submitBtn.id = "submit-btn";
        submitBtn.setAttribute('type', 'submit');
        submitBtn.innerText = 'Envoyer';

        const errorMessage = document.querySelectorAll('.verif');
        errorMessage.forEach(element => {
            if (element.innerHTML !== null) {
                const labels = document.querySelectorAll('label');
                labels.forEach(element => {
                    element.style.marginTop = '0';
                });
            }
        });
    }

    // validContactForm() {
    // this.validInputs();
    // document.getElementById("submit-btn").addEventListener("click", validBtn());
    // const submitBtnId = document.querySelectorAll('#submit-btn');
    // submitBtnId.forEach((btn) => btn.addEventListener("click", this.validBtn));
    // this.validBtn();

    // }

    // validate string length for the first name and the last name
    validNames(input, errorMessage) {
        // console.log("...",input, input.id, errorMessage)
        const regexName = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if ((input.value.length < 2) || (!regexName.test(input.value))) {
            errorMessage.innerText =
                "Veuillez entrer 2 caractères ou plus, sans caractères spéciaux pour le champ du nom";
            // console.log('min 2');
            // console.log('validNames false');
            return false;
        }
        errorMessage.innerHTML = "";
        // console.log('nb of characters ok');
        // console.log('validNames true');
        return true;
    }

    validMessage(input, errorMessage) {
        // console.log("...",input, input.id, errorMessage)
        if (input.value.length < 2) {
            errorMessage.innerText =
                "Veuillez entrer 2 caractères ou plus pour le champ du message";
            // console.log('min 2');
            // console.log('validNames false');
            return false;
        }
        errorMessage.innerHTML = "";
        // console.log('nb of characters ok');
        // console.log('validNames true');
        return true;
    }


    // validate email
    validEmail(input, errorMessage) {
        const regexEmail =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (!regexEmail.test(input.value) || input.value.length < 1) {
            errorMessage.innerHTML = `Veuillez entrer une adresse email valide.`;
            return false;
        }
        errorMessage.innerHTML = "";
        return true;
    }


    // validBtn() {
    //     const submitBtnId = document.querySelectorAll('#submit-btn');
    //     submitBtnId.forEach((btn) => btn.addEventListener('click', function (e) {

    //         const inputList = document.querySelectorAll("input");
    //         e.preventDefault();
    //         console.log(inputList);
    //         let erreurs = 0;
    //         inputList.forEach((element) => {
    //             console.log(element);
    //             const domError = document.getElementById(element.id + "-error");
    //             switch (element.type) {
    //                 case "text":
    //                     console.log('ok');
    //                     if (!this.validNames(element, domError)) erreurs++;
    //                     break;
    //                 case "email":
    //                     if (!this.validEmail(element, domError)) erreurs++;
    //                     break;
    //             }
    //         });

    //         if (erreurs === 0) {
    //             this.modalBody.innerHTML = `<p></p><p id='validation-message'>Nous vous remercions pour votre participation !</p><input id='close2' class='close2' value='Fermer'>`;
    //             return true;
    //         }
    //     }));
    //     return false;

    // }

    validInputs() {
        const inputList = document.querySelectorAll("input");

        inputList.forEach((element) => {
            // console.log(element);
            let domError = document.getElementById(element.id + "-error");
            switch (element.id) {
                case "first-name":
                case "last-name":
                    // if (!this.validNames(element, domError)) erreurs++;
                    element.addEventListener("input", () => {
                        this.validNames(element, domError);
                    });
                    break;
                case "email":
                    // if (!this.validEmail(element, domError)) erreurs++;
                    element.addEventListener("input", () => {
                        this.validEmail(element, domError);
                    });
                    break;
                case "message":
                    element.addEventListener('input', () => {
                        this.validMessage(element, domError);
                    });
                    break;
            }
            document.getElementById('submit-btn').addEventListener('click', (e) => {

                e.preventDefault();
                inputList.forEach((element) => {
                    // console.log(element);
                    let domError = document.getElementById(element.id + "-error");
                    let erreurs = 0;
                    switch (element.id) {
                        case "first-name":
                        case "last-name":
                            this.validNames(element, domError);
                            if (!this.validNames(element, domError)) erreurs++;
                            break;
                        case "email":
                            this.validEmail(element, domError);
                            if (!this.validEmail(element, domError)) erreurs++;
                            break;
                        case "message":
                            this.validMessage(element, domError);
                            if (!this.validMessage(element, domError)) erreurs++;
                            break;
                    }
                    if (erreurs === 0) {
                        this.modalBody.innerHTML = `<p></p><p id='validation-message'>Nous vous remercions pour votre participation !</p><input id='close2' class='close2' value='Fermer'>`;
                        return true;
                    }
                });
                return false;

            });
        })
    }

}
