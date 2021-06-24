window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.backgroundColor = "#1687a7";
    document.getElementById("navbar").style.padding = "1.20vh 0";
    document.getElementById("navbar").style.transition = "all 250ms";
    document.getElementById("logo").style.width = "4.68vw"
    document.getElementById("logo").style.height = "9.02vh";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.padding = "1.35vh 0";
    document.getElementById("logo").style.width = "5.07vw"
    document.getElementById("logo").style.height = "10.65vh";
  }
}