import {SimpleComponent} from "./simpleComponent.js";
export class Sorting {

    constructor(domTarget) {
        this.DOM = document.createElement('div');
        this.DOM.className = 'sort';
        domTarget.appendChild(this.DOM);
        this.render();
    }

    /**
     * create the sorting selection
     *
     * @return  {Void}  [return description]
     */
    render() {
        const thisDom = this.DOM;
        new SimpleComponent('label', 'Trier par',thisDom, 'sort-by');
        const selection = document.createElement('select');
        thisDom.appendChild(selection);
        selection.setAttribute('name', 'sorting');
        selection.setAttribute('id', 'select-sort');

        this.createOption(selection, 'Popularité', 'popularite', 'selection');
        this.createOption(selection, 'Date', 'date', 'selection');
        this.createOption(selection, 'Titre', 'titre', 'selection');
    }

    /**
     * create option tag of select tag
     *
     * @param   {HTMLElement}    domTarget       the dom from which the tag must be created
     * @param   {String}  value           the value of the option tag
     * @param   {String}  attributeValue  the value of the value attribute
     *
     * @return  {Void}                  [return description]
     */
    createOption(domTarget, value, attributeValue, className) {
        const option = document.createElement('option');
        domTarget.appendChild(option);
        option.innerText = value;
        option.setAttribute('value', attributeValue);
        option.className = className;
        domTarget.appendChild(option);
    }
}