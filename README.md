# module17_homework

Выполнены задания:

- Практика 17.5.1 Раздел `15.5` 
- Практика 17.6.1 Раздел `17.6`
- Практика 17.6.2 Раздел `17.6`

## Установка node
```
apt update
apt install `nodejs`
```
## Обновление node
```
npm cache clean -f
sudo npm install -g n
sudo n stable
node --version
```


Установка фрейворка тестирования `jest`
```
npm install --save-dev jest
or
yarn add --dev jest
```


## Запуск тестов
```
npm test
or
yarn test

```

## jest не умеет ES6
но есть `решение`

- установить плагин babel (транспилятор кода из es6 в  es5)
    ```
    yarn add --dev babel-jest @babel/core @babel/preset-env
    ```
- после чего создаем файл babel.config.js

##№ Доп ссылка 
 - Доп [ссылка на статью](https://telegra.ph/Nodejs-npm-yarn-install-10-14)