export class Tag {
    constructor(name, callback, domTarget, btnClassName=null){
        this.checked = false;
        this.name = name;
        this.DOM = document.createElement("button");
        this.DOM.className = "tags";
        if (btnClassName !== null) {
            this.DOM.classList.add = btnClassName;
        } 
        if (callback !== null){
            this.DOM.onclick = this.click.bind(this);
            this.callback = callback;
        }
        
        this.DOM.innerText = '#'+this.name;
        // this.render();
        domTarget.appendChild(this.DOM);
    }

    // render(){
    //     //this.DOM.className = this.checked ? "active" : "inactive";
    //     this.DOM.innerText = '#'+this.name;
    // }

    click(){
        console.log("active",this.name)
        this.DOM.classList.toggle("active");
        this.callback(this.name);
    }
}