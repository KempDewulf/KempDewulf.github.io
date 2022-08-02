var acc = document.getElementsByClassName("accordion");
var arr = document.getElementsByClassName("arrow");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    let active = this.classList.contains('active');
    let panel = this.nextElementSibling;
    let arrow = arr;
    
    [...acc].forEach(function(item) {
      item.classList.remove('active');
      item.nextElementSibling.style.maxHeight = null;
    });
    
    if(!active) {
      this.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}