// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like-glyph');
const hiddenError =  document.querySelector('#modal');
const modalMessage = document.querySelector('#modal-message');
hiddenError.classList.add('hidden');
likes.forEach((like)=> like.addEventListener('click',()=>{
  mimicServerCall()
  .then(()=> toggleLike(like))
  .catch((error)=> display(error));
}));

function toggleLike(like){
  if(like.textContent === EMPTY_HEART){
    like.textContent = FULL_HEART;
    like.style.color= "red";
  }
  else{
    like.textContent = EMPTY_HEART;
  }
}

function display(errorMessage){
    hiddenError.classList.remove('hidden');
    modalMessage.textContent = errorMessage;
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
