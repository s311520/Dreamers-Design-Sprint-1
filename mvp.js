function fun(){
  var x = document.getElementById('main')
  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

function menu(){
  var x = document.getElementById('data')
  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

var images = ['a.jpg', 'b.jpg', 'c.jpg','d.jpg', 'e.jpg'];

    var x = 0;

    var imgs = document.getElementById('img');

    setInterval(slider, 3000);


    function slider() {

      if (x < images.length) {
        x = x + 1;
      } else {
        x = 1;
      }


      imgs.innerHTML = "<img src=" + images[x - 1] + ">";


    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
