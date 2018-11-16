var wifi = require("Wifi");
wifi.connect("iPhone6", {password:"670060000"}, function(ap){ console.log("connected:", ap); 
});
