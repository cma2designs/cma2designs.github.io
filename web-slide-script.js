let webSlideIndex = 1;
            webShowSlides(webSlideIndex);

            function webPlusSlides(n) {
                webShowSlides(webSlideIndex += n);
            }

            function webCurrentSlide(n) {
                webShowSlides(webSlideIndex = n);
            }   

            function webShowSlides(n) {
                let i;
                let webSlides = document.getElementsByClassName("mySlides-webexamples");
                let webDots= document.getElementsByClassName("webdot");
                if (n > webSlides.length) {webSlideIndex = 1}
                if (n < 1) {webSlideIndex = webSlides.length}
                for (i = 0; i < webSlides.length; i++) {
                    webSlides[i].style.display = "none";
                }
                for (i = 0; i < webDots.length; i++) {
                    webDots[i].className = webDots[i].className.replace(" active", "");
                }
                webSlides[webSlideIndex-1].style.display = "block";
                webDots[webSlideIndex-1].className += " active";
            }