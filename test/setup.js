const React = require("React");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

global.React = React;
global.window = dom.window;
global.document = dom.window.document;

const exposedProperties = ['window', 'navigator', 'document'];
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// Set variables and cookies here
global.navigator = {
  userAgent: 'node.js',
  plugins: []
};
