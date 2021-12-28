// import { initDataManagerSource } from "./dataManager.js";
// import { Index } from "./pages/index.js";
// initDataManagerSource('data.json');
// const page = new Index(document.body);


/**
 * for the router
 */
import { initDataManagerSource } from "./dataManager.js";
import {extractUrl, setTarget, changePage} from "./router.js";
import {Lightbox} from "./composants/lightbox.js";
initDataManagerSource("data.json");
setTarget(document.body);
extractUrl();

document.addEventListener('keydown', (event) => {
    if (["Enter", "ArrowRight", "ArrowLeft"].indexOf(event.code) === -1) return;
    if (event.code === "Enter") return document.activeElement.click();
    // @ts-ignore
    if (!window.page.next) return;
    // @ts-ignore
    if (event.code === "ArrowRight") return window.page.next();
    // @ts-ignore
    window.page.prev();
})