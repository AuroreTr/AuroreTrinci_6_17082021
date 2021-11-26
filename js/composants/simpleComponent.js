export class SimpleComponent {
    /**
     * create a HTML tag with his attributes
     *
     * @param   {String}  tag        [tag description]
     * @param   {String}  value      [value description]
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {String}  className  [className description]
     * @param   {Array}  classList  [classList description]
     * @param   {String}  id         [id description]
     *
     * @constructor
     */
    constructor(tag, value, domTarget, className=null, classList=null, id=null){
      const domElement = document.createElement(tag);
      domTarget.appendChild(domElement);
      domElement.innerText=value;
      if (className !== null) domElement.className = className;
      if (classList !== null) domElement.classList.add(classList);
      if (id !== null) domElement.id = id;
    }
}



  // class SimpleComponent {
  //   constructor(domTarget,tag, props){
  //     const domElement = document.createElement(tag);
  //     domTarget.appendChild(domElement);
  //     Object.assign(domElement, props);
  //   }
  // }