function calculate()
{
	var t, length,h , ans,dayweek;
	t=Number(document.air.temp.value);
	length=Number(document.air.length_day.value);
	h=Number(document.air.hum.value);
	dayweek=Number(document.air.day.value);
	ans=((t>78 && length>8 && length<17) ||(h>85 && t>78 && length>8 && length<17)|| (h>85 && t>78 && (dayweek==6 || dayweek==7) )|| (h>85 && (dayweek==6 || dayweek==7)))?"ON":"OFF";
	document.getElementById("disp").innerHTML=ans;
}	