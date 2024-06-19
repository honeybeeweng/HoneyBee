// 註解:
// console.log(isMobile)

// ---------------------------------
// let isMobile;

// if($(window).width() <= 480) {
//     isMobile = true;
// } else {
//     isMobile = false;
// }
// 等同下列:
const isMobile = $(window).width() <= 480;

function setGrid() {
    // // if(isMobile == true) { 等同下列
    // if(isMobile) {
    //     $('#Grid').addClass('grid-2');
    // } else {
    //     $('#Grid').addClass('grid-3');
    // }
    // 也等同下面條列:
    if(isMobile) {
        $('#Grid').addClass('grid-2');
        return;
    }
        $('#Grid').addClass('grid-3');

}

setGrid();

$(window).scroll(function(){
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() == 0) {
        $('#Nav').removeClass('nav-active');
        console.log(0)
    }else {
        $('#Nav').addClass('nav-active');
        console.log('要套用 class')
    }
});



// function setScroll