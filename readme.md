# ractive-lazyload-img

A [Ractive](http://www.ractivejs.org/) decorator that lazy-loads images when they get within 200px of the viewport.

## Usage

```js
const lazy = require('ractive-lazyload-img')

new Ractive({
	el: '#content',
	template: '#template',
	decorators: {
		lazy
	}
})

```

```html
<img
	src="/transparent-pixel.png"
	as-lazy="'/path/to/images/' + dynamicImageName"
/>
```

# License

[WTFPL](http://wtfpl2.com/)
