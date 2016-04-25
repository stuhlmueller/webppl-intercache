var _ = require('underscore');


function CacheState(obj) {
  this.obj = obj;
}

CacheState.prototype = {
  constructor: CacheState,
  get: function(key) {
    return this.obj[key];
  },
  set: function(key, value) {
    this.obj[key] = value;
  }
};

function CacheStates() {
  this.states = [];
}


CacheStates.prototype = {
  constructor: CacheStates,
  add: function(obj) {
    var state = new CacheState(obj);
    this.states.push(state);
    return state;
  },
  clear: function() {
    this.states = [];
  }
};


module.exports = {
  cacheStates: new CacheStates()
};
