//@ts-nocheck
import { Index } from "./pages/index.js";
import { PhotographerPage } from "./pages/photographerPage.js";
let DOM;
/**
 * [page description]
 *
 * @var {*}
 */
let pageObject;

window.onpopstate = extractUrl;
window.changePage = changePage;

function extractUrl(){
    const request = window.location.search.slice(1);
    if (request.length === 0) return showPage("index");
    const [page, idString] = request.split("/");
    showPage(page, idString);
}

/*
? ou  : index
?photographer/id  photographerPage
*/

/**
 * [showPage description]
 *
 * @param   {String}  page  [page description]
 * @param   {Number | String}  [id]    [id description]
 *
 * @return  {void}        [return description]
 */
function showPage(page, id){
    DOM.innerText = "";
    switch (page) {
        case "index" : window.page = new Index(DOM); break;
        case "photographer" : window.page = new PhotographerPage(DOM, parseInt(id)); break;
        case "tag" : window.page = new Index(DOM, id); break
        default : 
            window.page = null;
            DOM.innerText =  "404";
            break;
    }
}

/**
 * [setTarget description]
 *
 * @param   {HTMLElement}  node  [node description]
 *
 * @return  {void}        [return description]
 */
function setTarget(node){
    DOM = node;
}


/**
 * [showPage description]
 *
 * @param   {String}  page  [page description]
 * @param   {Number}  [id]    [id description]
 *
 * @return  {void}        [return description]
 */
function changePage(page, id){
    const url = page === "index" ? "" : "?"
    history.pushState({}, page, buildUrl(page, id));
    showPage(page, id);
}

function buildUrl(page, id){
    let url =  location.pathname;
    if (page === "index") return url;
    url += "?"+page;
    if (id) url+= "/"+id;
    return url;
}

function clickOnLogo() {
    document.getElementById('logo').addEventListener('click', function() {
        changePage('index');
    });
}

export {
    extractUrl,
    setTarget,
    changePage,
    clickOnLogo
}