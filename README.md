# module17_homework

upgrade node

```
npm cache clean -f
sudo npm install -g n
sudo n stable
node --version
```


install jest
```
npm install --save-dev jest
or
yarn add --dev jest
```


run test
```
npm install --save-dev jest
or
yarn add --dev jest

```


jest не умеет ES6
но есть решение

уст плагин babel ()транспилятор кода из es6 в  es5

```
yarn add --dev babel-jest @babel/core @babel/preset-env
```
после чего создаем файл babel.config.js