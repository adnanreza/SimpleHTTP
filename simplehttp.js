function simpleHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
simpleHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this; // use self so that callback function's this is same
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
// Make an HTTP POST Request
simpleHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this; // use self so that callback function's this is same
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
simpleHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this; // use self so that callback function's this is same
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
