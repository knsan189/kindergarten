$(function(){
    $(".slide-group").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 간격시간
        dots: true, // 동그라미버튼
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    })
})


$(function(){
    var iBtn = document.querySelector('.btn i')
    
    iBtn.addEventListener('click', function(){
        if(this.classList.contains('fa-pause')){
            $('.slide-group').slick('slickPause')
            this.classList.add('fa-play')
            this.classList.remove('fa-pause')
        }
        else{
            $('.slide-group').slick('slickPlay')
            this.classList.add('fa-pause')
            this.classList.remove('fa-play')
        }
    })

})


// $(function(){
//     $('.btn i').on('click', function(){
//         if($(this).hasClass('fa-pause')){
//             $('.slide-group').slick('slickPause')
//             $(this).addClass('fa-play').removeClass('fa-pause')
//         }
//         else{
//             $('.slide-group').slick('slickPlay')
//             $(this).addClass('fa-pause').removeClass('fa-play')
//         }
//     })
// })