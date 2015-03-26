# jsbin-robot

> Use phantomjs to send code anonymously to jsbin.com

## Installation

`npm install jsbin-robot`

## Usage

```js
var JsbinRobot = require('jsbin-robot');

new JsbinRobot().send({
  html: '<h1>hello</h1>',
  js: 'console.log("world")',
  css: 'h1 { background-color: red; }'
}, function(err, generatedUrl) {
  if (err) { return console.log(err); }
  console.log(generatedUrl);
});
```

Open the generated url, for instance I received http://jsbin.com/videgewupa/1/edit, and you will see your data saved in jsbin:

<img src="https://raw.githubusercontent.com/marcioj/jsbin-robot/master/printscreen.png">

## Running Tests

Coming soon

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
