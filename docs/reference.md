# Documentation
Documentation how to use ShoutBox, including code examples.

## Options

### browserSupport
Detects browser features defined by the [Modernizr](https://modernizr.com) library. ShoutBox will be shown if one or more features are not supported by the browser. If the Modernizr script is not available `browserSupport` option will be ignored.

```javascript
shoutBox.setOptions({
	'browserSupport': {
		'cssgrid': Modernizr.cssgrid,
		'flexbox': Modernizr.flexbox
	}
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean, Object | false       |

### confirmButton
Confirm button for closing the popup box. If set to false popup will close on click. When used with `localStorage`, once clicked the popup will not be shown again during that browser session.

```javascript
shoutBox.setOptions({
	'confirmButton': 'OK'
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean, String | false       |

### localStorage
Store user interaction (e.g. button press) in the browser's local storage.

```javascript
shoutBox.setOptions({
	'localStorage': true
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean         | false       |

### messageText
Message text, accepts text only.

```javascript
shoutBox.setOptions({
	'messageText': 'Your web browser is not supported.'
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean, String | false       |

### messageTitle
Title for message text, accepts text only.

```javascript
shoutBox.setOptions({
	'messageTitle': 'Hey there!'
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean, String | false       |

### moreButton
Button that redirect user to a page with more information (e.g. privacy, terms of service). Requires `moreButtonURL`.

```javascript
shoutBox.setOptions({
	'moreButton': 'More Info',
	'moreButtonURL': '/about-us'
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean, String | false       |

### moreButtonURL
URL for the `moreButton` option, accepts relative and full URL.

```javascript
shoutBox.setOptions({
	'moreButton': 'Privacy',
	'moreButtonURL': 'https://domain.com/privacy/'
});
```

| Type            | Default     |
|-----------------|-------------|
| Boolean, String | false       |

### shoutID
Identifier for ShoutBox used in CSS styling and internally. Change this if there's a conflict with other scripts, make sure you update the `shoutbox.css` file if you do so.

```javascript
shoutBox.setOptions({
	'shoutID': 'shoutBox'
});
```

| Type            | Default     |
|-----------------|-------------|
| String          | shoutBox    |
