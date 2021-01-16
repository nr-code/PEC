console.log('script loaded')

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubbly = document.getElementsByClassName("bubbly");
  
  for (var i = 0; i < bubbly.length; i++) {
    bubbly[i].addEventListener('mouseover', animateButton, false);
  }
  
  
  
  document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
    let circles = ciclegraph.querySelectorAll( '.bubbly' )
    let angle = 360-90, dangle = 360 / circles.length
    for( let i = 0; i < circles.length; ++i ){
      let bubblybutt = circles[i]
      angle += dangle
      bubblybutt.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
    }
  })