class SimpleComponent {
    constructor(tag, value, domTarget, className=null, classList=null){
      const domElement = document.createElement(tag);
      domTarget.appendChild(domElement);
      domElement.innerText=value;
      if (className !== null) domElement.className = className;
      if (classList !== null) domElement.classList.add(classList);
    }
  }