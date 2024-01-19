
$('.button_no1').on('mouseover', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })
$('#button_no1').on('click', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })
  
$('#btn_no').on('mouseover', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })
$('.btn_no').on('click', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })
function visible_(){
    big_div.style.visibility ="visible";
}
function love(){
    new_div.remove()
    hrt.style.visibility ="visible";
}
function next(){
    main_div.remove()
    new_div.style.visibility ="visible";
    
}