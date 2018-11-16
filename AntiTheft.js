// Подключаем модуль http в переменную http
var http = require('http');
var wifi = require('Wifi');
var WebServer = require('WebServer');
var dg;
//Запускаем индикацию светодиодом
//var on = false;
//setInterval(function () {
//digitalWrite(D2,on = !on);
//}, 500);
function ledon () {
  dg = digitalWrite(D2, 0);
}

//Создаем и запускаем точку доступа
wifi.startAP('AntiTheft', { 
  password: '1234567890', 
  authMode: 'wpa2' }, function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// В модуле http используем функцию creatServer для создания сервера в котором будет функция которая будет передавать параметры req и принимать параметры res
var server = http.createServer(function(req, res){
  console.log("URL: " + req.url);
  
// Получим от сервера заголовки 200 - значит документ найден, и получим параметры страницы (что это будет текст, html или json формат. получим текст
  //res.writeHead('<html><body>');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><meta name="viewport" content="width=device-width, initial-scale=1"><body style=background-color:#fff; width:100%;height:100%;>');
  res.write('<title>AntiTheft System</title>');
// Далее завершаем прием данных методом end и выводим полученную информацию
  res.write('<h1 style="text-align:center;color:rgba(0,0,0,0.6);font-family:Arial;font-size:64px;font-style:italic;text-shadow: 2px 8px 6px rgba(0,0,0,0.2),0px -5px 35px rgba(255,255,255,0.3)">AntiTheft System</h1>'); 
  //res.write('<p>Initialize</p>');
  //res.write('<div style="height:200px;min-width:100%;background:#F2C14E;background: -webkit-linear-gradient(left, #F2C14E, #F78154);position: relative;"></div>');
  //res.write('<p>Pin is '+(D2.read()?'on':'off')+'</p>');
  res.write('<a style="text-decoration: none;outline: none;display: inline-block;color: white;padding: 20px 30px;margin: 10px 20px;border-radius: 10px;font-family: Arial, sans-serif;text-transform: uppercase;letter-spacing: 2px;background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);background-size: 200% auto;box-shadow: 0 0 20px rgba(0,0,0,.1);transition: .5s; a:hover {background-position: right center;}" href="" onclick="ledon ()">Start</a>');
   res.write('<a style="text-decoration: none;outline: none;display: inline-block;color: white;padding: 20px 30px;margin: 10px 20px;border-radius: 10px;font-family: Arial, sans-serif;text-transform: uppercase;letter-spacing: 2px;background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);background-size: 200% auto;box-shadow: 0 0 20px rgba(0,0,0,.1);transition: .5s; a:hover {background-position: right center;}" href="">Stop</a>');
  res.write("<button onclick='ledon ()'>Send</button>");
  /*res.write('<input type="button" name="b" value="Click Me" />');
  
  */
  
  
  res.write('<input type="checkbox" id="check1"><label for="check1">Check1</label>');    
  res.end('</body></html>');
});

// Далее необходимо указать по какому порту будет отслеживаться подключение к нашему серверу
server.listen(80);
console.log('Port 80 scan!');