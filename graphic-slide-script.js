let graphicSlideIndex = 1;
            graphicShowSlides(graphicSlideIndex);

            function graphicPlusSlides(n) {
                graphicShowSlides(graphicSlideIndex += n);
            }

            function graphicCurrentSlide(n) {
                graphicShowSlides(graphicSlideIndex = n);
            }   

            function graphicShowSlides(n) {
                let i;
                let graphicSlides = document.getElementsByClassName("mySlides-graphicexamples");
                let graphicDots = document.getElementsByClassName("graphicdot");
                if (n > graphicSlides.length) {graphicSlideIndex = 1}
                if (n < 1) {graphicSlideIndex = graphicSlides.length}
                for (i = 0; i < graphicSlides.length; i++) {
                    graphicSlides[i].style.display = "none";
                }
                for (i = 0; i < graphicDots.length; i++) {
                    graphicDots[i].className = graphicDots[i].className.replace(" active", "");
                }
                graphicSlides[graphicSlideIndex-1].style.display = "block";
                graphicDots[graphicSlideIndex-1].className += " active";
            }