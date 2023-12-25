const caveza = document.getElementById('navbar');
const foto = document.getElementById('photos');

document.addEventListener('scroll', () => { 
  var scroll_position = window.scrollY;
  if (scroll_position > 200){
     navbar.style.backgroundColor = '#003349';
     photos.style.display = 'block'; 
      
  } else{
     navbar.style.backgroundColor = '#333';
     photos.style.display = 'none'; 
  }
});