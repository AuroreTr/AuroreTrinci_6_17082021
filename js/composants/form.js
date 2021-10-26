export class Form{
    constructor(domTarget){
        // <div class='bground'>
        this.DOM = document.createElement('div');
        domTarget.appendChild(this.DOM);
        this.DOM.className = 'bground';

        domTarget.appendChild(this.DOM);
        this.domTarget = domTarget;

        this.DOM = document.createElement('form');
        domTarget.appendChild(this.DOM);
        domTarget.className = 'contact-form';
        domTarget.id = 'contact-form';
        domTarget.setAttribute('action', 'photographerPage.html');
        domTarget.setAttribute('method', 'get');
        domTarget.setAttribute('onsubmit', 'validate()');
    }

    render() {
        // <div class='content'>
        const content = document.createElement('div');
        this.DOM.appendChild(content);
        content.setAttribute('class', 'content');

        // <span> with id and class attribute
        const closeSpan = document.createElement('span');
        content.appendChild(closeSpan);
        closeSpan.id = 'close';
        closeSpan.className = 'close';

        this.DOM = document.createElement('form');
        this.domTarget.appendChild(this.DOM);
        this.domTarget.className = 'contact-form';
        this.domTarget.id = 'contact-form';
        this.domTarget.setAttribute('action', 'photographerPage.html');
        this.domTarget.setAttribute('method', 'get');
        this.domTarget.setAttribute('onsubmit', 'validate()');

    }


    validText(input){
        
    }
}