
  document.addEventListener('DOMContentLoaded', function() {
    function scrollToContact() {
      const contactSection = document.querySelector('.contact');

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    const contactLink = document.querySelector('.link2 a');
    
    if (contactLink) {
      contactLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToContact();
      });
    }
  });
