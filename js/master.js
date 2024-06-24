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
const $grid = $('#Grid');
const $nav = $('#Nav');

function setGrid() {
    // // if(isMobile == true) { 等同下列
    // if(isMobile) {
    //     $('#Grid').addClass('grid-2');
    // } else {
    //     $('#Grid').addClass('grid-3');
    // }
    // 也等同下面條列:
    if(isMobile) {
        // $('#Grid').addClass('grid-2');
        $grid.addClass('grid-2');
        return;
    }
        // $('#Grid').addClass('grid-3');
        $grid.addClass('grid-3');

}

function setScroll(){
    $(window).scroll(function(){
        
        // isMobile:true
        // !isMobile:false
        // if (isMobile == true) {
            
        // console.log($(window).scrollTop());
            
        if(!isMobile) return;

        // if ($(window).scrollTop() == 0) {
        if ($(this).scrollTop() == 0) {

           $nav.removeClass('nav-active');
                
           // console.log(0)

        }else {
            $nav.addClass('nav-active');
                
            // console.log('要套用 class')
        }
    });
}

// 06/19寫法
// function setScroll(){
//     $(window).scroll(function(){
//         if (isMobile == true) {
//             // console.log($(window).scrollTop());
//             if ($(window).scrollTop() == 0) {
//                 $nav.removeClass('nav-active');
                
//                 // console.log(0)
                
//             }else {
//                 $nav.addClass('nav-active');
                
//                 // console.log('要套用 class')
//             }
//         }
//     });
// }


// 其他動畫載入的函式庫
function setInit() {
    setGrid();
}

// 其他事件的函式庫
function setEvent() {
    setScroll();
}

setInit();
setEvent();




// function setScroll