let cpSlideIndex = 1;
            cpShowSlides(cpSlideIndex);

            function cpPlusSlides(n) {
                cpShowSlides(cpSlideIndex += n);
            }

            function cpCurrentSlide(n) {
                cpShowSlides(cpSlideIndex = n);
            }   

            function cpShowSlides(n) {
                let i;
                let cpSlides = document.getElementsByClassName("mySlides-cpexamples");
                let cpDots= document.getElementsByClassName("cpdot");
                if (n > cpSlides.length) {cpSlideIndex = 1}
                if (n < 1) {cpSlideIndex = cpSlides.length}
                for (i = 0; i < cpSlides.length; i++) {
                    cpSlides[i].style.display = "none";
                }
                for (i = 0; i < cpDots.length; i++) {
                    cpDots[i].className = cpDots[i].className.replace(" active", "");
                }
                cpSlides[cpSlideIndex-1].style.display = "block";
                cpDots[cpSlideIndex-1].className += " active";
            }