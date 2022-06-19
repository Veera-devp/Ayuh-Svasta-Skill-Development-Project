$(function(){$(".arrow").click(function(e){$(".topMenu").toggleClass("mobile")});$(".menuToggle").click(function(e){$(".menu").toggleClass("mobile")})});$(window).on('load resize',function(){resizeSlider()})
function resizeSlider(){var mainDiv=$(".slidBox")
mainDiv.each(function(index,element){var thisM=$(this)
var wrapDiv=thisM.find(".slideDivWrap")
var thDiv=thisM.find(".thDiv")
var slideDiv=thisM.find(".sliderDiv")
var thDivHeight=thDiv.children().height();$(this).css("height",thDivHeight+"px")
var div_W=wrapDiv.width()
var div_L=thDiv.length
var slideDiv_L=div_W*div_L
slideDiv.css({"width":slideDiv_L+"px","left":"0"})
thDiv.css({"width":div_W+"px"})
$(".slidBtn.prev").addClass("disable")
$(".slidBtn.next").removeClass("disable")})}
$(function(){var mainDiv=$(".slidBox")
mainDiv.each(function(index,element){var thisM=$(this)
var thDiv=thisM.find(".thDiv")
if(thDiv.length>1)
{thisM.append('<div class="slidBtn prev"></div><div class="slidBtn next"></div>')}});$(document).on("click",".slidBtn",function(e){var thisBtn=$(this);var thisParent=thisBtn.parents(".slidBox")
var thDiv=thisParent.find(".thDiv")
var AslideDiv=thisParent.find(".sliderDiv")
var btnNext=thisParent.find(".next")
var btnPrev=thisParent.find(".prev")
var divW=thDiv.width();var divL=thDiv.length
var mWidth=(divW*divL)
var AslideDivW=AslideDiv.width()-divW
if($(this).hasClass("next")){if(AslideDiv.css("left")===-AslideDivW+"px"){}else{if(thisBtn.hasClass("active")||thisBtn.hasClass("disable")){}else{thisBtn.addClass("active")
AslideDiv.animate({left:'-='+divW+"px"},function(){thisBtn.removeClass("active");checkEnd()})}}}else{if(AslideDiv.css("left")==="0px"){}else{if(thisBtn.hasClass("active")||thisBtn.hasClass("disable")){}else{thisBtn.addClass("active")
AslideDiv.animate({left:'+='+divW+"px"},function(){thisBtn.removeClass("active");checkEnd()})}}}
function checkEnd(){if(AslideDiv.css("left")===-AslideDivW+"px"){btnNext.addClass("disable")}else{btnNext.removeClass("disable")}
if(AslideDiv.css("left")==="0px"){btnPrev.addClass("disable")}else{btnPrev.removeClass("disable")}}})})
$(window).load(function(e){resizeDiv()
playAnimation()});$(window).resize(function(e){resizeDiv()});var sHeight;var sWidth;var timer=1000;var sHeight1;function resizeDiv(){sHeight=$('.sliderPgIn').parent(".banner").height()
sWidth=$('.sliderPgIn').width()
var thisWidth=$(this).width()
$(".autoSliser,.slideDiv").css({"width":sWidth+"px"})
$(".slideDiv").css("left",sWidth+"px")
$(".slideDiv.active").css("left","0px")
$(".autoSliser,.slideDiv").css({"height":sHeight+"px"})
sHeight1=$('.sliderPgIn').find(".slideDiv:first img").height()
$(".sliderPgIn,.autoSliser,.slideDiv").css({"height":sHeight+"px"})
$(".shadow").css({"top":(sHeight1+9)+"px"})}
$(function(){$('.sliderPgIn').append('<div class="paginationBox"></div>')
var slideDivLenth=$('.slideDiv').length
for(i=0;i<slideDivLenth;i++){$('.paginationBox').append('<div class="pageNo"></div>')}
var paginationC=$(".paginationBox").width()
var paginC=paginationC/2
$(".paginationBox").css("margin-left",-paginC+"px")
$(".pageNo:first").addClass("pageNoActive")
var ActSldDiv;var ActSldDivInd;var ActSldDivInd;function ActDivs(){actPagNoInd=$(".pageNo.pageNoActive").index()+1}
function RemoAct(){$(".pageNo").removeClass("pageAct")
$(".next, .prev").removeClass("btnAct")
activePageLink()}
function stpoAnimation(){clearInterval(myAnimation)}
$('.paginationBox').children().each(function(o){var pageInd=o+1
$(this).click(function(e){if($(this).hasClass("pageAct")||$(this).hasClass("pageNoActive")){}else{ActDivs()
stpoAnimation()
$(".pageNo").addClass("pageAct")
if(pageInd<actPagNoInd){$(".pageNo").removeClass("pageNoActive")
$(this).addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:sWidth+"px"},timer,function(){$(this).css("left",-sWidth+"px")})
$(".onSlid"+pageInd).addClass("active").css("left",-sWidth+"px").animate({left:"0px"},timer,RemoAct)}else{$(".pageNo").removeClass("pageNoActive")
$(this).addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:-sWidth+"px"},timer,function(){$(this).css("left",sWidth+"px")})
$(".onSlid"+pageInd).addClass("active").css("left",sWidth+"px").animate({left:"0px"},timer,RemoAct)}}})});$(".prev").click(function(e){$(".pageNo").addClass("pageAct")
if($(this).hasClass("btnAct")){}else{stpoAnimation()
if($(".slideDiv.active").is(":first-child")){$(".next, .prev").addClass("btnAct")
$(".pageNo.pageNoActive").removeClass("pageNoActive")
$(".pageNo:last").addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:sWidth+"px"},timer,function(){$(this).css("left",-sWidth+"px")})
$(".slideDiv:last").addClass("active").css("left",-sWidth+"px").animate({left:"0px"},timer,RemoAct)}else{$(".next, .prev").addClass("btnAct")
var ActSlidP=$(".slideDiv.active").index()
$(".pageNo.pageNoActive").removeClass("pageNoActive").prev().addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:sWidth+"px"},timer,function(){$(this).css("left",-sWidth+"px")})
$(".onSlid"+ActSlidP).addClass("active").css("left",-sWidth+"px").animate({left:"0px"},timer,RemoAct)
console.log("else")}}});$(".next").click(function(e){$(".pageNo").addClass("pageAct")
if($(this).hasClass("btnAct")){}else{stpoAnimation()
if($(".slideDiv.active").is(":last-child")){$(".next, .prev").addClass("btnAct")
$(".pageNo.pageNoActive").removeClass("pageNoActive")
$(".pageNo:first").addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:-sWidth+"px"},timer,function(){$(this).css("left",sWidth+"px")})
$(".slideDiv:first").addClass("active").css("left",sWidth+"px").animate({left:"0px"},timer,RemoAct)}else{$(".next, .prev").addClass("btnAct")
var ActSlidN=$(".slideDiv.active").index()+2
$(".pageNo.pageNoActive").removeClass("pageNoActive").next().addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:-sWidth+"px"},timer,function(){$(this).css("left",sWidth+"px")})
$(".onSlid"+ActSlidN).addClass("active").css("left",sWidth+"px").animate({left:"0px"},timer,RemoAct)
console.log("else")}}})})
function stpoAnimation(){clearInterval(myAnimation)}
function activePageLink(){playAnimation()}
var myAnimation;function playAnimation(){$(".pageNo").removeClass("pageNoAct")
myAnimation=setInterval(animateSlider,5000)}
function animateSlider(){$(".pageNo").addClass("pageAct")
if($(".slideDiv.active").is(":last-child")){$(".pageNo.pageNoActive").removeClass("pageNoActive")
$(".pageNo:first").addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").animate({left:-sWidth+"px"},timer,function(){$(this).css("left",sWidth+"px")})
$(".slideDiv:first").addClass("active").css("left",sWidth+"px").animate({left:"0px"},timer,function(){$(".pageNo").removeClass("pageAct")})}else{$(".pageNo.pageNoActive").removeClass("pageNoActive").next().addClass("pageNoActive")
$(".slideDiv.active").removeClass("active").next().addClass("active").css("left",sWidth+"px").animate({left:"0px"},timer,function(){$(".pageNo").removeClass("pageAct")})
$(".slideDiv.active").prev().animate({left:-sWidth+"px"},timer,function(){$(this).css("left",sWidth+"px")})}}
