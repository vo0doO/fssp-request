# ФССП

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Интеграция с сервисом ФССП (Федеральная служба судебных приставов).

## Установка

```
$ npm install fssp-request
```

## API

```js
var fssp = require('fssp-request')
```

### fresh(data, callback)

 __data__ - JSON массив с параметрами:  
 
 __region__ - код региона  
 __surname__ - фамилия  
 __name__ - имя  
 __patronymic__ - отчество  
 __birthday__ - дата рождения

## Пример

```js
fssp(data, function(result){
    res.send(result);
});
```

## Лицензия

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/fresh.svg
[npm-url]: https://npmjs.org/package/fresh
[node-version-image]: https://img.shields.io/node/v/fresh.svg
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/jshttp/fresh/master.svg
[travis-url]: https://travis-ci.org/jshttp/fresh
[coveralls-image]: https://img.shields.io/coveralls/jshttp/fresh/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/fresh?branch=master
[downloads-image]: https://img.shields.io/npm/dm/fresh.svg
[downloads-url]: https://npmjs.org/package/fresh
