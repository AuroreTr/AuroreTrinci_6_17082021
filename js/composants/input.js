class Input{

    /**
     * [consttuctor description]
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  props      [props description]
     * @param   {("text" | "number" | "submit")}  props.type
     * @param   {Function} [props.oninput]
     * @param   {String}  props.className
     *
     * @constructor
     */
    constructor(domTarget, props){
        this.DOM = document.createElement("input");
        domTarget.appendChild(this.DOM);
        Object.assign(this.DOM, {props})
    }
}