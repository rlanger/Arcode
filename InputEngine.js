InputEngine = function () {

// A dictionary mapping ASCII key codes to string values
// describing the action we want to take when that key is pressed.
this.bindings = {};

// A dictionary mapping actions that might be taken to a boolean
// value indicating whether that action is currently being performed.
this.actions = {};

}

InputEngine.prototype.setup = function () {
    // Setting up the W, A, S, D keys to move PC
    this.bind(38, 'move-up');
    this.bind(37, 'move-left');
    this.bind(40, 'move-down');
    this.bind(39, 'move-right');

    //this.bind(87, 'move-up');
    //this.bind(65, 'move-left');
    //this.bind(83, 'move-down');
    //this.bind(68, 'move-right');
};

InputEngine.prototype.onKeyDown = function (event) {
  // Grab the keyID property of the event object parameter,
  // then set the equivalent element in the 'actions' object
  // to true.
console.log("KEY DOWN");

  var action = this.bindings[event.keyCode];
  if (action) {
  		event.preventDefault();
     	this.actions[action] = true;
  }
};

InputEngine.prototype.onKeyUp = function (event) {

	console.log("KEY UP");

	var action = this.bindings[event.keyCode];

	if (action) {
		event.preventDefault(); 
		this.actions[action] = false;
	}
};

InputEngine.prototype.bind = function (key, action) {
	this.bindings[key] = action;
};

gInput = new InputEngine();
gInput.setup();