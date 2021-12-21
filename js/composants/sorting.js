import {SimpleComponent} from "./simpleComponent.js";
export class Sorting {

    constructor(domTarget, props, callback) {
        this.DOM = document.createElement('div');
        this.DOM.className = 'sort';
        domTarget.appendChild(this.DOM);
        this.callback = callback;
        this.list = props;
        this.render();
    }

    /**
     * create the sorting selection
     *
     * @return  {Void}  [return description]
     */
    render() {
        const thisDom = this.DOM;
        const label = document.createElement('label');
        thisDom.appendChild(label);
        label.classList.add('sort-by');
        label.innerText = 'Trier par';
        label.setAttribute('for', 'select-sort');

        this.selection = document.createElement('select');
        thisDom.appendChild(this.selection);
        this.selection.setAttribute('name', 'sorting');
        this.selection.setAttribute('id', 'select-sort');
        this.list.forEach(element => {
            this.createOption(this.selection, element, element, 'selection');
        });
        this.selection.onchange = ()=>{
            this.callback(this.selection.value);
        }
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