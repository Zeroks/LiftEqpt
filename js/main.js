let changeColor = document.getElementById("change-color");
changeColor.onclick = function() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
}

let sendForm = document.getElementById("send-form");
sendForm.onclick = function(event) {
  
  let errors = false;
  event.preventDefault(); 

  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let comment = document.getElementById("comment");

  if (name.value.trim() == '') {
    name.className = 'error';
    errors = true;
  } else {
    name.className = '';
  }

  if (phone.value.trim() == '') {
    phone.className = 'error';
    errors = true;
  } else {
    phone.className = '';
  }

  if (comment.value.trim() == '') {
    comment.className = 'error';
    errors = true;
  } else {
    comment.className = '';
  }

  if (errors) {
    alert("Заполните все поля");
  }

}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

setTimeout(()=> {
  modal.style.display = "block";
}, 10000);

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const swiper = new Swiper('.swiper', {

  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});