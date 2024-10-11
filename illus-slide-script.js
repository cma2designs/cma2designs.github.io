let illusSlideIndex = 1;
            illusShowSlides(illusSlideIndex);

            function illusPlusSlides(n) {
                illusShowSlides(illusSlideIndex += n);
            }

            function illusCurrentSlide(n) {
                illusShowSlides(illusSlideIndex = n);
            }   

            function illusShowSlides(n) {
                let i;
                let illusSlides = document.getElementsByClassName("mySlides-illusexamples");
                let illusDots= document.getElementsByClassName("illusdot");
                if (n > illusSlides.length) {illusSlideIndex = 1}
                if (n < 1) {illusSlideIndex = illusSlides.length}
                for (i = 0; i < illusSlides.length; i++) {
                    illusSlides[i].style.display = "none";
                }
                for (i = 0; i < illusDots.length; i++) {
                    illusDots[i].className = illusDots[i].className.replace(" active", "");
                }
                illusSlides[illusSlideIndex-1].style.display = "block";
                illusDots[illusSlideIndex-1].className += " active";
            }