# ФССП

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
