


/*
 myFunction() {

   switch (event.code) {
     case 39:             //right
     $("#board2").animate({marginRight: "-=5px"},500);
}
       break;
    case 37:              //left
      $(board2).animate({marginLeft: "-=5px"},500);

    break;
    case 38:             //up
      $(board2).animate({marginUp: "-=5px"},500);
    break;

    case 40:             //down
      $(board2).animate({marginDown: "-=5px"},500);
      break;

   }


 }
*/

var move = 30;
document.addEventListener("keydown", function(event) {

  switch (event.keyCode) {
    case 37:            //go left

     if (document.getElementById("board2").offsetLeft + move < 500) {
       board2.style.left = (board2.offsetLeft - move) + 'px';
     }
  }
  switch (event.keyCode) {
    case 39:            //go right

     if (document.getElementById("board2").offsetLeft + move < 500) {
       board2.style.left = (board2.offsetLeft + move) + 'px';
     }
  }
  switch (event.keyCode) {
    case 38:            //go up

     if (document.getElementById("board2").offsetTop + move < 500) {
       board2.style.top = (board2.offsetTop - move) + 'px';
     }
  }
  switch (event.keyCode) {
    case 40:            //go down

     if (document.getElementById("board2").offsetTop + move < 500) {
       board2.style.top = (board2.offsetTop + move) + 'px';
     }
  }


  });
