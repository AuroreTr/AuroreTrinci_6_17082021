import {SimpleComponent} from "./simpleComponent.js";
import {NavTags} from "./navtags.js";
export class Header{
    // constructor(dataTags, title, domTarget){
    //     this.DOM = document.createElement("header");
    //     const tags = this.extractTags(dataTags);
    //     this.extractTags();

    //     this.render();
    // }

    constructor(domTarget, tags=null, tagAction=null, title=null, toScroll=null) {
      this.DOM = document.createElement('header');
      domTarget.appendChild(this.DOM);
      this.render();
      if (toScroll !== null) this.toScroll();
      if (tags !== null) new NavTags(tags, tagAction, this.DOM, 'tag-resumeview');
      if (title !== null) new SimpleComponent('h1', title, this.DOM, 'title-index');
      window.onscroll = this.toScroll.bind(this);

    }

    /**
     * renvoie du contenu HTML
     *
     * @return  {Void}  [return description]
     */
    render() {
      // this.extractTags();
      this.DOM.innerHTML = `
      <img class='logo' src="images/logo.png" alt="logo FishEye">
      <span id=go-up>Passer au contenu</span>
      `;
    }

    toScroll(evt) {
      // console.log(window.scrollY);
      const goUp = document.getElementById('go-up');
      const main = document.getElementById('main-index');

      if (window.scrollY > 100) {
        // goUp.style.display = 'block';
        // main.style.paddingTop = '230px';
        // goUp.cl
      } else if (window.scrollY < 100) {
        goUp.style.display = 'none';
        // main.style.paddingTop = '130px';
      }
      // window.addEventListener('scroll', function(e) {
        // goUp.style.display = 'block';
      // });
      // let scrollYPosition = window.scrollY;
      // console.log(scrollYPosition);
      // if (scrollYPosition < 100) goUp.style.display = 'none';
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

// accessibility :
// quoi mettre à la place des <p> dans les infos du photographe

}