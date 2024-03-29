## shuffle 🃏

[![npm (scoped)](https://img.shields.io/npm/v/@chazzy13/shuffle.svg)](https://github.com/Chazzy11/shuffle)
[![Tests](https://github.com/Chazzy11/shuffle/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/Chazzy11/shuffle/actions/workflows/tests.yml)
<img src="https://img.shields.io/badge/coverage-100%25-green">
![NPM Downloads](https://img.shields.io/npm/dw/@chazzy13/shuffle)
![NPM License](https://img.shields.io/npm/l/@chazzy13/shuffle)

'shuffle' is an npm package that allows you to quickly and easily shuffle arrays. The shuffle function will randomise the order of the array each time it is run. Useful for the development of dynamic applications that rely on an element of unpredictability, such as quizzes or card games. Could also be used when writing test cases around arrays, to ensure the tests are covering a variety of scenarios. 

### Getting Started
---
To install, run 
```npm i @chazzy13/shuffle``` .

### Usage
---

``` 
import { shuffle } from '@chazzy13/shuffle'; 

shuffle([1, 2, 3, 4, 5]);
// first run => [2, 4, 5, 1, 3]
// second run => [3, 5, 2, 4, 1] ...

shuffle(['cat', 'dog', 'elephant', 'goat']);
// first run => ['dog', 'goat', 'elephant', 'cat']
// second run => ['goat', 'cat', 'dog', 'elephant'] ...
```
### Contributing
---
This project is released in line with the <a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md">Contributor Covenant Code of Conduct</a>. By participating in this project, you agree to abide by its terms. Whether you've spotted a bug, have a question, or think of a new feature, thank you for your help!
