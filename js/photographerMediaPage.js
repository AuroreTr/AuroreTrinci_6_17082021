import { initDataManagerSource } from "./dataManager.js";
import {PhotographerPage} from "./pages/photographerPage.js";
initDataManagerSource("data.json");
// const page = new Index(document.body);

// const dataManager = new DataManager("data.json");
const page = new PhotographerPage(document.body);