// import { initDataManagerSource } from "./dataManager.js";
// import { Index } from "./pages/index.js";
// initDataManagerSource('data.json');
// const page = new Index(document.body);


/**
 * for the router
 */
import { initDataManagerSource } from "./dataManager.js";
import {extractUrl, setTarget, changePage} from "./router.js";
initDataManagerSource("data.json");
setTarget(document.body);
extractUrl();