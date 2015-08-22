// JavaScript Document

var currframe = 0;


//var changeBg = function(e){
//				$(".bg").css("background","url(../nita/assets/bg/"+currframe+".jpg)");};

var x = document.getElementsByClassName("band");
var z = document.getElementsByClassName("bg");
var y =  document.getElementsByTagName("head");

function changeBg()
{
	x[0].style.background = "url(../nita/assets/bgBand/"+currframe+".png)";
	x[0].style.backgroundColor = "transparent";
	x[0].style.backgroundRepeat = "no-repeat";
	x[0].style.backgroundPosition = "2px 135px";
	if(currframe<32)
	{
	currframe++;
	}
	
}

$(document).ready(function(e) {
    $("#hostelSelect").hide();
});

function btnClick()
{
	"use strict";
	
	setInterval(changeBg, 31) ;
	z[0].className += " change";
	$(".jumbotron").fadeOut(600);
	$("#hostelSelect").fadeIn(800);
	

}

function fetchAssets()
{
	while(currframe<33)
	{
	y[0].innerHTML += "<link rel='preload' href='../nita/assets/bgBand/"+currframe+".png' as='image'>";
	currframe++;
	}
	currframe = 0;
}