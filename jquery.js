
    $(document).ready(function() {
      $('#login-form').submit(function(event) {
        event.preventDefault(); 

        var username = $('#username').val();
        var password = $('#password').val();

        
        if (username === 'admin' && password === 'admin') {
          window.location.href = '1.html'; 
        } else {
          alert('Username atau password salah!'); 
        }
      });
    });
