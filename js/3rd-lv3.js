$(document).ready(function () {

    // FQA點擊button展開可以在card外圍加上shadow
    $(".accordion-button").click(function (e) { 
        e.preventDefault();
        $('.accordion-item').toggleClass('active1');
    });

    // 點擊頁籤可以在tab上有明顯的下顯也就是除了:hover以外還要新增定格作用(待做)
});