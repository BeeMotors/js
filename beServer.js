//Создаем функцию сервера
function beServer() {
  var http = require("http");// Подключаем библиотеку http
  var httpServer = http.creatServer(function(request, responce){
    print(request);
    
    if (request.url == "/favicon.ico") {
    responce.writeHead(404);
    responce.end("");
    return;
    }
    
  responce.write("<html><body>");
    if (request.url == "/hello") {
      responce.write("<b>Welcome</b> to the NodeMCU test.");
    } else if (responce.url == "/goodbye") {
      responce.write("<b>Please</b> come back again soon.");
    } else {
      responce.write("Sorry ... I didn`t understand!");
    }
    responce.end("</body></html>");
    }); //End of on new browser request
  
  httpServer.listen(80);
  print("Now being an HTTP server!");
} //End of beServer

var ssid = "sweetie";
var password = "kolbanpassword";

// Connect to the access point
var wifi = require("wifi");
print ("Connection to access point");
wifi.connect(ssid, password, null, function(err, ipinfo) {
  if (err) {
    print ("Error connecting to access point.");
    return;
  }
  var NodeMCU = require("ESP8266");
  print("Connect says that we are now connected!!!");
  print("Starting web server at http://" + NodeMCU.getAddressAsString(ipinfo.ip) + ":80");
  beServer();
});
    