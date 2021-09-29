class Header{
    // constructor(dataTags, title, domTarget){
    //     this.DOM = document.createElement("header");
    //     const tags = this.extractTags(dataTags);
    //     this.extractTags();

    //     this.render();
    // }

    constructor(domTarget, tags=null, tagAction=null, title=null) {
      this.DOM = document.createElement('header');
      domTarget.appendChild(this.DOM);
      this.render();
      if (tags !== null) new NavTags(tags, tagAction, this.DOM);
      if (title !== null) new SimpleComponent('h1', title, this.DOM);
    }

    render() {
      // this.extractTags();
      this.DOM.innerHTML = `
      <img class='logo' src="images/logo.png" alt="logo FishEye">
      `;
    }



/*
  <header>
          <img class='logo' src="images/logo.png" alt="logo FishEye">
          <nav aria-label="photographer-categories">
            <div><a href='?'>Passer au contenu</a></div>
            <a class='tags' href="?">#Portrait</a>
            <a class='tags' href="?">#Art</a>
            <a class='tags' href="?">#Fashion</a>
            <a class='tags' href="?">#Architecture</a>
            <a class='tags' href="?">#Travel</a>
            <a class='tags' href="?">#Sport</a>
            <a class='tags' href="?">#Animals</a>
            <a class='tags' href="?">#Events</a>
          </nav>
          <h2 class='title-index'>Nos photographes</h2>
        </header>
 */

}