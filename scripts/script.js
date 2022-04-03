'use script'

function myFunction() {
    let btnText = document.getElementById("myBtn");
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  const dark_mode = function () {
   const element = document.querySelector('footer');
   
   element.classList.toggle('dark_mode');

   const element2 = document.getElementById('paragraph1');
   const element3 = document.getElementById('paragraph2');
   const element4 = document.getElementById('paragraph3');
   const element5 = document.getElementById('paragraph4');
   const element6 = document.getElementById('paragraph5');

   const icon_x = document.getElementById('icon');
  
   element2.classList.toggle('information_box');
   element3.classList.toggle('information_box');
   element4.classList.toggle('information_box');
   element5.classList.toggle('information_box');
   element6.classList.toggle('information_box');
   icon_x.classList.toggle('information_box');
   
   
   
   /*const box1 = document.getElementById('information_box').style.color = 'var(--color6)';
   const box2 = document.getElementById('work_with').style.color = 'var(--color6)';
   const icon = document.getElementById('icon').style.color = 'var(--color6)';*/
  

  }

