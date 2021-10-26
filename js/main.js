import { initDataManagerSource } from "./dataManager.js";
import {Index} from "./pages/index.js";
initDataManagerSource("data.json");
const page = new Index(document.body);