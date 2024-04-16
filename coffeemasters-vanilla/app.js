import Store from './services/Store.js';
import API from './services/API.js'
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
//window is a global object representing the window in which script is running
window.app = {};
// You can access app object globally in JS code either through window.app or app
// We assign Store to the property store on the app object
app.store = Store;
app.router = Router;

//It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});