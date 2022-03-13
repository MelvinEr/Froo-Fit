const userHandler = require("./models/userHandler");
const {contextBridge} = require("electron");

const getNames = () => {
    return userHandler.getNames();
}

contextBridge.exposeInMainWorld("api", {
    getNames: getNames
})