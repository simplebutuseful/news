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
	document.getElementById("output").style.backgroundColor = document.getElementById("myBgColor").value;
}

