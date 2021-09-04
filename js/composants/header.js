class Header{
    constructor(data, title, domTarget){
        this.DOM = document.createElement("header");
        const tags = this.extractTags(data);
    }


    extractTags(data){

    }
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