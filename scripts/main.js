// Import data and templates
// const templates = require('./templates')`
// const data = require('./data')
const renderPage = require("./render")
const links = require('./links')

links.addNavLinks()
renderPage("Home")
