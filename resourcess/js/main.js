//mixitup for portfolio //
$(document).ready(function(){

//sticky menu
$(".js-service").waypoint(function(direction){
   if(direction=="down"){
      $("nav").addClass("sticky");
   }
   else{
    $("nav").removeClass("sticky");
   }
});





    var mixer = mixitup('.container');
});

//sticky menu
//smooth scroll
$("a").on('click',function(event){
   if(this.hash !== ""){
      event.preventDefault();

      var hash = this.hash;

      $('html,body').animate({
         scrollTop: $(hash).offset().top 
      }, 800, function(){
         window.location.hash = hash;
      });
    
   }
});



// overlay
function openNav(){
   var myNav=document.getElementById("myNav");
   myNav.style.width="100%";
}

function closeNav(){
   var myNav2=document.getElementById("myNav");
   myNav2.style.width="0%";
}