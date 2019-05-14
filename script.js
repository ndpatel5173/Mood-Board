function backgroundcolor(color){
$("body").css("background-color",color);
}

$("button").click(function(){
       var input = $('input').val();
if (input==="mad"){
backgroundcolor("red");
}
else if (input==="sad"){
backgroundcolor("blue");
}
else if (input==="happy"){
backgroundcolor("yellow");
}
else if (input==="lovey-dovey"){
    backgroundcolor("pink");
}
});
