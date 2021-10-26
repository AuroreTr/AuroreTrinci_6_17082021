export class Tag {
    constructor(name, callback, domTarget){
        this.checked = false;
        this.name = name;
        this.DOM = document.createElement("button");
        if (callback !== null){
            this.DOM.onclick = this.click.bind(this);
            this.callback = callback;
        }
        this.render();
        domTarget.appendChild(this.DOM);
    }

  


    render(){
        this.DOM.className = this.checked ? "active" : "inactive";
        this.DOM.innerText = '#'+this.name;
    }

    click(){
        this.DOM.classList.toggle("active");
        this.callback(this.name);
    }
}