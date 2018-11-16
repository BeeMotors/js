/*//Функция будет отправлять Hello Word каждую секунду
setInterval(function () {
  console.log("Hello World");
}, 1000);

// Timeout функция отправит Blink через 5 секунд после запуска
setTimeout(function () {
  console.log("Blink");
}, 5000);
*/

/*// Сначала создадим Глобальную функцию, а после в нужном месте  запускаем setInterval в параметрах указываем название функции и интервал выполнения
function myfunc() {
  print("The My Function");
}
setInterval(myfunc, 1000);
*/

/*
// Создание функции в переменной MyVarFunc
var MyVarFunc=function myfunc() {
  print("The My Var Function");
};
setInterval(MyVarFunc, 1000);
*/

//
var MyId=setInterval(function() {
  print('Tick');
}, 1000);
  print('MyId = ' + MyId);
