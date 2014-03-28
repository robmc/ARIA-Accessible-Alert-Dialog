// NOTE: This JS should be refactored for efficiency. This is simply a proof of concept to illustrate and document a solution.
		
// Toggle function that hides/shows content. 
// If the style is not display: none;, it applies display; none;. 
// Otherwise, it applies display: '' to make the div visible. It then applies a tabIndex value of -1 so that focus can be applied when visible with focus().
function toggle() {
	var div = document.getElementById('alert-dialog');
	var overlay = document.getElementById('modal-overlay');
	if (div.style.display != 'none') {
		div.style.display = 'none';
		overlay.style.display = 'none';
	}
	else {
		div.style.display = '';
		overlay.style.display = '';
		div.tabIndex = -1;
		document.getElementById('cancel-button').focus();
	}
}
			
// Keeps focus within the dialog window
function retainFocus(e) {
	var first = document.getElementById("alert-dialog"),
	last = document.getElementById("confirm-button");
			
	var evt = e || window.event;
	var keyCode = evt.which || evt.keyCode;
	if (keyCode == 9) { // Keycode 9 is tab
		first.focus();
	}
	else if (keyCode == 13 || keyCode == 32) { // Keycode 13 is Enter and keycode 32 is Space
		document.getElementById('alert-dialog').style.display = 'none'; // Hides the dialog
		document.getElementById('modal-overlay').style.display = 'none'; // Hides the overlay
		document.getElementById('activation-button').setAttribute("aria-hidden", "false"); // Sets aria-hidden as false for the activation button
		document.getElementById('alert-dialog').setAttribute("aria-hidden", "true"); // Sets aria-hidden as true for the dialog
		document.getElementById('activation-button').focus(); // Returns focus to the button that activated the dialog
	}
	evt.preventDefault();
}

// This block looks for the Escape key keydown event. If the dialog is being displayed, it hides the dialog and overlay upon pressing Escape.
// This is the default behavior of a modal dialog 
document.addEventListener("keydown", function(event) {
	if (document.getElementById('alert-dialog').display != 'none' && event.keyCode == 27) {
		document.getElementById('alert-dialog').style.display = 'none';
		document.getElementById('modal-overlay').style.display = 'none';
	}
}, true);
			
// Toggles the aria-hidden attribute which disables elements for screen readers
function toggleAriaHidden() {
	var button = document.getElementById('activation-button');
	var dialog = document.getElementById('alert-dialog');
	var allChildNodes = document.getElementById("main").getElementsByTagName('*');
				
	if (dialog.style.display != 'none'){
		button.setAttribute("aria-hidden", "true");
		dialog.setAttribute("aria-hidden", "false");
		for(var i = 0; i < allChildNodes.length; i++){ // Removes all elements in the div with the id main from the tab index
			allChildNodes[i].setAttribute("tabindex", "-1");
		}
	}
	else {
		button.setAttribute("aria-hidden", "false");
		dialog.setAttribute("aria-hidden", "true");
	}
}
			
// Returns focus to the activation button upon closing the dialog window
function returnFocus() {
	document.getElementById('activation-button').focus();
}