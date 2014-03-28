This is a proof of concept using WAI-ARIA roles and properties to create an accessible alert dialog in a simulated modal dialog window. 

This makes use of the ARIA [alertdialog](http://www.w3.org/TR/wai-aria/roles#alertdialog) role and [aria-labelledby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby) property. 

Important notes regarding the accessibility features of this demo:
* When the dialog window is activated, programmatic focus not only moves to the dialog window to assist screen reader and other assistive technology users but also moves to the least critical element (the cancel button) to ensure that if the window were triggered accidentally there is minimal impact.
* When the simulated modal dialog is open, the rest of the page is inactive and no elements in the DOM outside the dialog window can receive programmatic focus. Focus remains within the dialog window until it is closed.
* A JavaScript event listener is included looking for the Escape key. Default behavior of modal dialog windows is that they can be closed by activating the Escape key so this is necessary to account for default functionality.
* When the simulated dialog window is closed, programmatic focus returns to the element that triggered it. This is important as users navigating with screen readers will not lose their place on the page and have to navigate back to their previous location.

Additional notes/explanations are in the source code.
