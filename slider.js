let currentIndex = 0;
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const slideWidth = document.querySelector('.carousel-item').clientWidth;

    function updateCarousel() {
      const newPosition = -currentIndex * slideWidth;
      document.querySelector('.carousel').style.transform = `translateX(${newPosition}px)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }


function subscribe() {
        // Get the email value
        var email = document.getElementById('email').value;

        // Validate email (you may want to add more robust email validation)
        if (!email || !email.includes('@')) {
          document.getElementById('subscribeMessage').innerHTML = 'Please enter a valid email address.';
          return;
        }

        // Send the email to the server using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'subscribe.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the server response
            document.getElementById('subscribeMessage').innerHTML = xhr.responseText;
          }
        };
        xhr.send('email=' + encodeURIComponent(email));
      }