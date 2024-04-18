let text=document.querySelector('.printed')
let lang=document.querySelectorAll('.lang')
let main=document.querySelector('.main')
function trackKeyboardActivity() {
    // Add event listener for keydown event
    document.addEventListener('keydown', function(event) {
      // Get the key that was pressed
      const keyPressed = event.key;
      // Get the code of the key that was pressed
      const keyCode = event.code;
      
      // Send an event to analytics service or perform any tracking action
      console.log('Key pressed: ' + keyPressed);
      console.log('Key code: ' + keyCode);
      // Here you can replace console.log with your analytics tracking code
    });
  }
  
  // Call the function to start tracking keyboard activity
trackKeyboardActivity('.printed');
// в обработчик события надо вставить проверку по каждому символу типа 0 символ 1 символ и тд типа hello,act like profecional proggramer, and write a code to how to track online keyboard  activity in js
