function calculate()
{
	var dis,pt,wavelength,gainr,gaint, ans;
	pt=Number(document.friss.pt.value);
	dis=Number(document.friss.distance.value);
	wavelength=Number(document.friss.wave.value);
	gainr=Number(document.friss.gr.value);
	gaint=Number(document.friss.gt.value);
	ans=( pt * wavelength*gainr*gaint)/(4*dis*3.14);
	document.getElementById("disp").innerHTML=ans;
}	