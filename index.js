const nav = $(".container1");
const navHeight=nav[0].offsetHeight;
const nav2= $(".blclr");
let scrolled=false;
$(window).scroll(function(){
    const scrollPosition = window.scrollY;

  if (scrollPosition > navHeight && !scrolled) {
    nav2.css("color","white")
    nav.addClass('scrolled');
    scrolled = true;
  } else if (scrollPosition <= navHeight && scrolled) {
    nav.removeClass('scrolled');
    nav2.css("color","black");
    scrolled = false;
  }
});
function sendMail() {
	$myform = $('#myform');
	$myform.prop ('action','mailto:gkhatri211@gmail.com');
	$myform.submit();
}