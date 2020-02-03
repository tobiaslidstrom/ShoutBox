# ShoutBox
A highly customizable popup window with browser feature detection

[![Release](https://img.shields.io/github/v/release/tobiaslidstrom/shoutbox)](/../../releases/)
[![License](https://img.shields.io/github/license/tobiaslidstrom/shoutbox)](LICENSE)
[![PayPal](https://img.shields.io/badge/donate-PayPal-blue)](https://paypal.me/tobiaslidstrom)
[![Liberapay](https://img.shields.io/liberapay/patrons/tobiaslidstrom)](https://liberapay.com/tobiaslidstrom)

## Features
* Pure and fast JavaScript, no dependencies required
* Cross-browser support for Chrome, Firefox and IE11+
* Highly customizable and easy to use
* Browser feature detection

## Getting Started
ShoutBox is easy to setup and highly customizable. Options are defined in `shoutBox.setOptions` and any styling is done by CSS. See the [Documentation](docs/reference.md) for more information.

### Installation
Download and install the [latest version](/../../releases/) from GitHub.

Add the following in the page header:
```html
<link rel='stylesheet' href='shoutbox.min.css' type='text/css'>
<script type="text/javascript" src="shoutbox.min.js"></script>

<script>
	shoutBox.setOptions({
		'confirmButton': 'OK',
		'messageTitle': 'Hey there!',
		'messageText': 'Your web browser is not supported. Please upgrade to a modern browser.',
		'localStorage': false,
		'browserSupport': {
			'cssgrid': Modernizr.cssgrid,
			'flexbox': Modernizr.flexbox
		}
	});
</script>
```

## Donations
You can help funding the development and show your appreciation of the work put into this project by making a donation through [PayPal](https://paypal.me/tobiaslidstrom) or [Liberapay](https://liberapay.com/tobiaslidstrom).

## Authors
This project is developed and maintained by Tobias Lidström.

## Licensing
ShoutBox is licensed under the [MIT License](LICENSE).