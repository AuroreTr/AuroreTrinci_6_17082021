
export class FormInput {

    constructor(domTarget, labelFor, labelValue, inputProps, spanProps) {
        this.DOM = document.createElement('div');
        domTarget.appendChild(this.DOM);
        this.DOM.className = 'formInput';
        this.render(this.DOM, labelFor, labelValue, inputProps, spanProps);
        domTarget.appendChild(this.DOM);

    }

    render(domTarget, labelFor, labelValue, inputProps, spanProps) {
        this.createLabel(domTarget, labelValue, labelFor);
        this.createInput(domTarget, inputProps);
        this.createSpan(domTarget, spanProps);
    }

    /**
     * create a label tag with value and all attributes
     *
     * @param   {String}  labelValue  [label value (innerText of label)]
     * @param   {String}  labelFor    [for attribute of label]
     *
     * @return  {Void}              [return description]
     */
    createLabel(domTarget, labelValue, labelFor) {
        const label = document.createElement('label');
        domTarget.appendChild(label);
        label.innerText = labelValue;
        label.setAttribute('for', labelFor);
        domTarget.appendChild(label);
    }

        /**
     * create an input tag with all attributes
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  inputProps      [object with all attributes of the input tag]
     * @param   {("text" | "textarea" | "number" | "submit")}  inputProps.type    type attribute of the input tag
     * @param   {Function} [inputProps.oninput]
     * @param   {String}  inputProps.className   class attribute of the input tag
     * @param   {String}  inputProps.id   id attribute of the input tag
     *
     * @return {void}
     */
     createInput(domTarget, inputProps){
            const input = document.createElement("input");
            domTarget.appendChild(input);
            input.setAttribute('required', '');
            Object.assign(input, inputProps);
        }

    /**
     * create a span tag with all attributes
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  spanProps  [domTarget description]
     * @param   {String}  spanProps.id     [id attribute of the span]
     * @param   {String}  spanProps.className  [class attribute of the span]
     *
     * @return  {Void}             [return description]
     */
    createSpan(domTarget, spanProps) {
        const span = document.createElement('span');
        domTarget.appendChild(span);
        Object.assign(span, spanProps);
        // console.log(spanProps);
    }
}