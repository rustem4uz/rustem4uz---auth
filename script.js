function togglePassword() {
    var pwd = document.getElementById('password')
    var btn = document.querySelector('.toggle-password')
    if (pwd.type === 'password') {
      pwd.type = 'text'
      btn.textContent = 'Скрыть'
    } else {
      pwd.type = 'password'
      btn.textContent = 'Показать'
    }
  }
  
  function showAlert() {
    var el = document.getElementById('customAlert')
    el.classList.add('show')
    el.classList.remove('hide')
  }
  
  // сборка и «рассыпание»
  function hideAlert() {
    var alert = document.getElementById('customAlert')
    var rect = alert.getBoundingClientRect()
    var pieces = 200;
    alert.classList.remove('show')
    alert.style.visibility = 'hidden'
  
    for (var i = 0; i < pieces; i++) {
      var piece = document.createElement('div')
      piece.className = 'alert-piece'
      piece.style.left = rect.left + Math.random() * rect.width + 'px'
      piece.style.top = rect.top + Math.random() * rect.height + 'px'
      document.body.appendChild(piece)
  
      setTimeout(function() {
        piece.style.transform = 'translateY(' + (100 + Math.random() * 400) + 'px) rotate(' + Math.random() * 360 + 'deg)'
        piece.style.opacity = 0
      }, 10)
  
      setTimeout(function() { piece.remove() }, 5200)
    }
  }