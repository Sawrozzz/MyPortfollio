
  document.addEventListener('DOMContentLoaded', function() {

    function scrollToCardContainer() {
      const cardContainer = document.querySelector('.card-container');

      if (cardContainer) {
        cardContainer.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }

  
    const educationLink = document.querySelector('.link3 a');
    
    if (educationLink) {
      educationLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToCardContainer();
      });
    }
  });
  