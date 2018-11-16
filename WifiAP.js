var wifi = require("Wifi");
//Создаем и запускаем точку доступа
wifi.startAP('AntiTheft', { 
  password: '1234567890', 
  authMode: 'wpa2' }, function(err) {
  if (err) throw err;
  console.log("Connected!");
});
