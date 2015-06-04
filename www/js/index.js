var app = {};

//Init the app
app.initialize = function () {
  this.bindEvents();
};

//Bind events to the document
app.bindEvents = function () {
  document.addEventListener('deviceready', this.onDeviceReady, false);
};

//Init app
app.initialize();