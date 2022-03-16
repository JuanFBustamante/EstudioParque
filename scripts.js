/* navbar effect */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.backgroundColor = "#8E806A";
    document.getElementById("navbar").style.padding = "1.20vh 0";
    document.getElementById("logo").style.padding = "1.20vh 0";
    // document.getElementById("logo").style.width = "4.68vw";
    // document.getElementById("logo").style.height = "9.02vh";
    document.getElementById("navbar").style.height = "9.02vh";
    // document.getElementById("logo").style.display = "block"
    document.getElementById("navbar").style.transition = "all 250ms";
    
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.padding = "1.35vh 0";
    
    // document.getElementById("logo").style.width = "5.07vw"
    // document.getElementById("logo").style.height = "10.65vh";
    // document.getElementById("logo").style.display = "none";
    
  }
}


/* Scroll smooth */
function scrollTo(){
  document.querySelectorAll(".scroll").forEach(t=>t.onclick=scrollAnchors)}
  function scrollAnchors(t,o=null){
    const e=t=>Math.floor(t.getBoundingClientRect().top);
    t.preventDefault();
    var n=o?o.getAttribute("href"):this.getAttribute("href");
    const r=document.querySelector(n);
    if(!r)return;const c=e(r);
    window.scrollBy({top:c,left:0,behavior:"smooth"});
    const l=setInterval((function(){
      const t=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;
      (0===e(r)||t)&&(r.tabIndex="-1",r.focus(),window.history.pushState("","",n),clearInterval(l))}),100)}
    scrollTo();