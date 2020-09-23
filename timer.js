

function clock_time(){


var hours = document.querySelector('#hours');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds')

var date= new Date();
var current_hours=date.getHours();
var current_minutes=date.getMinutes();
var current_seconds=date.getSeconds();

hours.innerHTML=format_time(current_hours);
minutes.innerHTML=format_time(current_minutes);
seconds.innerHTML=format_time(current_seconds);


function format_time(i){
if(i<10)
 i='0'+i;
 return i;
}


 var interval = setTimeout(clock_time, 500);

} 


