// ===== Navigation section switching =====
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');

const menuIcon=document.querySelector('#menu-icon');

const navbar=document.querySelector('header nav');

menuIcon.addEventListener('click', () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
});

/* nav bar when screen is smaller*/ 

/*------------------------- */

navLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    // ignore the gallery link with id="interior1"
    if (link.id === 'interior1') return;

    e.preventDefault();

    // Remove "active" from all links and sections
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add "active" to clicked link
    link.classList.add('active');

    // Add "active" to matching section (based on order)
    sections[index].classList.add('active');

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});



/*-----------------------*/

const resumeBtns=document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click',() => {
        const resumeDetails=document.querySelectorAll('.resume-detail')


        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active')

    });

});



/*---------------------click image in gallery then go to section-----------*/ 

document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ JS is loaded and DOM is ready");

  const galleryPics = document.querySelectorAll('.gallery .pic');

  galleryPics.forEach(pic => {
    pic.addEventListener('click', (e) => {
      e.preventDefault();

      const picId = pic.id; // e.g. "open-interior1"
      const targetId = picId.replace('open-', ''); // e.g. "interior1"
      const targetSection = document.getElementById(targetId);

      console.log(`🎯 Clicked ${picId}, will open section #${targetId}`);

      // Remove 'active' from all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
      });

      // Activate and scroll to the target section
      if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
        console.log(`🔥 Activated section #${targetId}`);
      } else {
        console.log(`⚠️ Section #${targetId} not found`);
      }
    });
  });
});






