//天気予報を取得する
//units=metricは摂氏での温度の取得を表す
//q=地名,国でどの国のどの地域の天気を入手するかを取得
var url = "http://api.openweathermap.org/data/2.5/forecast/weather?units=metric&q=Kitakata,jp&APPID=[your API key]";

$.ajax({
  type: "get",
  url: url,
  dataType: "json",
  success: function(response){
    console.log("success");
    var obj = response;
    console.log(obj);
  }
});
