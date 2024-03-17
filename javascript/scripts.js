// $(document).ready(function(){
//     $('.carousel').slick({
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         dots: true,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear'
//     });
// });

//*********SLICK CAROUSEL**********/

$(".carousel").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  //autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  speed: 600,
  variableWidth: true,
  cssEase: "linear"
});



//********TOGGLE BTN************

const toggleBtn = document.getElementById('toggle-btn');
    const toggleOptions = document.querySelector('.toggle-options');

    toggleBtn.addEventListener('click', function() {
        toggleOptions.classList.toggle('show');
    });

//********FAQ INF********/
        const questions = document.querySelectorAll('.question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle('active');
                answer.style.display = answer.classList.contains('active') ? 'block' : 'none';
            });
        });
