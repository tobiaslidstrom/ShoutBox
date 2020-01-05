/**
 * ShoutBox 0.1.0
 * Copyright (c) 2019 by Tobias Lidström
 * URL: https://github.com/TobiasLidstrom/shoutbox
 */

var ShoutBox = (function () {
	var options = {
		shoutID: 'shoutBox',
		messageTitle: false,
		messageText: false,
		confirmButton: false,
		moreButton: false,
		moreButtonURL: false,
		localStorage: true,
		browserSupport: false
	}

	function setOptions(update_options) {
		Object.assign(options, update_options);
	}

	function shoutTemplate() {
		var docElement = document.createElement('div');
		docElement.setAttribute('id', options.shoutID);
		
		if (options.messageTitle !== false) {
			var docElement_H = document.createElement('h4');
			docElement_H.textContent = options.messageTitle;
			docElement.appendChild(docElement_H);
		}

		if (options.messageText !== false) {
			var docElement_P = document.createElement('p');
			docElement_P.textContent = options.messageText;
			docElement.appendChild(docElement_P);
		}

		if (options.moreButton !== false && options.moreButtonURL !== false) {
			var docElement_Button = document.createElement('button');
			docElement_Button.setAttribute('id', options.shoutID + '_more-button');
			docElement_Button.textContent = options.moreButton;
			docElement.appendChild(docElement_Button);
		}

		if (options.confirmButton !== false) {
			var docElement_Button = document.createElement('button');
			docElement_Button.setAttribute('id', options.shoutID + '_confirm-button');
			docElement_Button.setAttribute('tabindex', 0);
			docElement_Button.setAttribute('autofocus', '');
			docElement_Button.textContent = options.confirmButton;
			docElement.appendChild(docElement_Button);
		}

		document.body.insertBefore(docElement, document.body.firstChild);
	}

	function removeShoutOnClick(docElement) {
		docElement.addEventListener('click', function() {
			var shoutElement = document.querySelector('#' + options.shoutID);
			shoutElement.parentNode.removeChild(shoutElement);
			if (options.localStorage) {
				sessionStorage.setItem(options.shoutID, 'false');
			}
		});
	}

	function shoutBox() {
		if (document.querySelector('#' + options.shoutID) === null) {
			this.shoutTemplate();
		}
	
		if (document.querySelector('#' + options.shoutID) !== null) {
			// Open the more button link
			if (options.moreButton !== false && options.moreButtonURL !== false) {
				var docElement = document.querySelector('#' + options.shoutID + '_more-button');
				docElement.addEventListener('click', function() {
					window.location = options.moreButtonURL;
				});
			}

			// Close shoutBox on confirm button click
			if (options.confirmButton !== false) {
				var docElement = document.querySelector('#' + options.shoutID + '_confirm-button');
				this.removeShoutOnClick(docElement);
			}
			
			// Close shoutBox on box click
			if (options.confirmButton === false) {
				var docElement = document.querySelector('#' + options.shoutID);
				this.removeShoutOnClick(docElement);
			}
		}
	}

	return {
		options: options,
		setOptions: setOptions,
		shoutBox: shoutBox,
		shoutTemplate: shoutTemplate,
		removeShoutOnClick: removeShoutOnClick
	};

});
var shoutBox = new ShoutBox();


// Run script when page is loaded
document.addEventListener('DOMContentLoaded', function() {
	var popup = false;

	// Check for browser support
	if (isObject(shoutBox.options.browserSupport)) {
		if (Modernizr !== null) {
			var feat = shoutBox.options.browserSupport;
			for (var k in feat) {
				if (!feat[k]) {
					popup = true;
					break;
				}
			}
		}
	} else {
		popup = true;
	}

	// Show the shoutbox
	if (shoutBox.options.messageText !== false && popup === true) {
		if (shoutBox.options.localStorage) {
			var storageItem = sessionStorage.getItem(shoutBox.options.shoutID);
			if (storageItem === null || storageItem == 'true') {
				shoutBox.shoutBox();
			}
		} else {
			shoutBox.shoutBox();
		}
	}
});


// Check if variable is a object
function isObject(obj) {
	return obj === Object(obj);
}

/**
* IE fix for Object.assign
*/
if (typeof Object.assign !== 'function') {
	Object.defineProperty(Object, "assign", {
		value: function assign(target, varArgs) {
			'use strict';
			if (target === null || target === undefined) {
				throw new TypeError('Cannot convert undefined or null to object');
			}
			var to = Object(target);
  
			for (var index = 1; index < arguments.length; index++) {
				var nextSource = arguments[index];
				if (nextSource !== null && nextSource !== undefined) { 
					for (var nextKey in nextSource) {
						if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
			}
			return to;
	  	},
		writable: true,
		configurable: true
	});
}