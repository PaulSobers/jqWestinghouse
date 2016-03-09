function greetUser(nombre){
    $("#greeting").text("Hello, "+nombre);
}
 
 function switchImage(elephant){
     $("#gallery-main").attr("src", elephant );
     
 }
 
 function changeBackgroundColor(){ 
     
     var red = Math.floor(Math.random() * 255);

     var blue = Math.floor(Math.random() * 255);

     var green =  Math.floor(Math.random() * 255);
$("body").css("background-color", "rgb(" + red +", "+ blue +", "+ green +")");
 }