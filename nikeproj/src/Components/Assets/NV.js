

     
        let SlideIndex = 0;
        ShowSlides();
        

        function ShowSlides() {
          let i;
          let Slides = document.getElementsByClassName("Slides");
          for (i = 0; i < Slides.length; i++) {
            Slides[i].style.display = "none";  
          }
          SlideIndex++;
          if (SlideIndex > Slides.length) {SlideIndex = 1} 
          Slides[SlideIndex-1].style.display = "block";  

          setTimeout(ShowSlides, 2000);
        }

          let dropdown = document.getElementById("hd");
          let data = document.getElementById("hdul");
          data.style.display="none"
          dropdown.addEventListener("mouseenter" , ()=>{
             data.style.display="block"
          })

          dropdown.addEventListener("mouseleave", () => {
            data.style.display = "none";
        });

          let content = document.querySelector('.body-container');

          let dropdownmen = document.getElementById("mc");
          let datamen = document.getElementById("MC");
          datamen.style.display="none"
          dropdownmen.addEventListener("mouseenter" , ()=>{
             content.classList.add('faded'); 
             datamen.style.display="block"
          })

          dropdownmen.addEventListener("mouseleave", () => {
            content.classList.remove('faded'); 
            datamen.style.display = "none";
        });

          let dropdownwomen = document.getElementById("wc");
          let datawomen = document.getElementById("WC");
          datawomen.style.display="none"
          dropdownwomen.addEventListener("mouseenter" , ()=>{
            content.classList.add('faded'); 
             datawomen.style.display="block"
          })

          dropdownwomen.addEventListener("mouseleave", () => {
            content.classList.remove('faded');
            datawomen.style.display = "none";
        });


          let dropdownkids = document.getElementById("kc");
          let datakids = document.getElementById("KC");
          datakids.style.display="none"
          dropdownkids.addEventListener("mouseenter" , ()=>{
            content.classList.add('faded'); 
             datakids.style.display="block"
          })

          dropdownkids.addEventListener("mouseleave", () => {
            content.classList.remove('faded');
            datakids.style.display = "none";
        });

          let dropdownsales = document.getElementById("sc");
          let datasales = document.getElementById("SC");
          datasales.style.display="none"
          dropdownsales.addEventListener("mouseenter" , ()=>{
            content.classList.add('faded'); 
             datasales.style.display="block"
          })

          dropdownsales.addEventListener("mouseleave", () => {
            content.classList.remove('faded');
            datasales.style.display = "none";
        });
       