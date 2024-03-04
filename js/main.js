window.onload = function()
{
    'use strict';
    if ("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register('/news/sw.js');
    };
    loadData();
};

function create(){
	//fill text
	document.getElementById("title").innerHTML = document.getElementById("myTitle").value;
	document.getElementById("nav").innerHTML = document.getElementById("myNav").value;
	document.getElementById("lead").innerHTML = document.getElementById("myLead").value;
	//set colors
	document.getElementById("nav").style.color = document.getElementById("myNavColor").value;
	document.getElementById("nav").style.backgroundColor = document.getElementById("myNavBgColor").value;
	document.getElementById("title").style.color = document.getElementById("myColor").value;
	document.getElementById("title").style.backgroundColor = document.getElementById("myBgColor").value;
	document.getElementById("lead").style.color = document.getElementById("myColor").value;
	document.getElementById("lead").style.backgroundColor = document.getElementById("myBgColor").value;
	document.getElementById("output").style.backgroundColor = document.getElementById("myBgColor").value;
	//font families
	document.getElementById("nav").style.fontFamily = document.getElementById("myNavFontFamily").value;
	document.getElementById("title").style.fontFamily = document.getElementById("myTitleFontFamily").value;
	document.getElementById("lead").style.fontFamily = document.getElementById("myLeadFontFamily").value;
	//font sizes
	document.getElementById("nav").style.fontSize = document.getElementById("myNavFontSize").value;
	document.getElementById("title").style.fontSize = document.getElementById("myTitleFontSize").value;
	document.getElementById("lead").style.fontSize = document.getElementById("myLeadFontSize").value;
	//font weight
	document.getElementById("nav").style.fontWeight = document.getElementById("myNavFontWeight").value;
	document.getElementById("title").style.fontWeight = document.getElementById("myTitleFontWeight").value;
	document.getElementById("lead").style.fontWeight = document.getElementById("myLeadFontWeight").value;
	//add image
	document.getElementById("image").src = URL.createObjectURL(document.getElementById("myImage").files[0]);
}

