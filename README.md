                 _     _ _  __       
        /\      | |   | (_)/ _|      
       /  \   __| | __| |_| |_ _   _ 
      / /\ \ / _` |/ _` | |  _| | | |
     / ____ \ (_| | (_| | | | | |_| |
    /_/    \_\__,_|\__,_|_|_|  \__, |
                                __/ |
                               |___/ 

Addition, the NPM way.

[ ![Codeship Status for Middlerun/addify](https://app.codeship.com/projects/a2290c70-0b39-0136-afe4-3aeedc3a22e1/status?branch=master)](https://app.codeship.com/projects/281808)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/eccd6b8a749647babeb6c564b4eaf6cb)](https://www.codacy.com/app/Middlerun/addify)

## Installation

```
npm install addify
```

or

```
yarn add addify
```

## Usage

```
const addify = require('addify');  // ES5
```
or
```
import addify from 'addify'        // ES6
```

```
const result = addify(2, 2)        // 4
```

## API reference

```
addify(a, b)
```

### Parameters

`a`
- A value to be added to `b`

`b`
- A value to be added to `a`

### Return value

The result of adding `a` and `b`

## License

Copyright 2018 Eddie McLean

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
