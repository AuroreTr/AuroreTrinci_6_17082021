class Tag{
    constructor(name, domTarget){
        this.checked = false;
        this.name = name;
        this.DOM = document.createElement("button");
        this.DOM.onclick = click.bind(this);
        this.render();
        domTarget.appendChild(this.DOM);
    }


    render(){
        this.DOM.className = this.checked ? "active" : "inactive";
        this.DOM.innerText=this.name;
    }

    click(){

    }
}