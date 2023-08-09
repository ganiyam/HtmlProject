// 로그인
let navLogin = document.querySelector(".nav--login");
let modalBox = document.querySelector('.modal-box');
let xBox = document.querySelector('.x-box');

// 회원가입
let navJoin = document.querySelector(".nav--join");
let modalBox2 = document.querySelector('.modal-box2');
let xBox2 = document.querySelector('.x-box2');

navLogin.addEventListener('click', function(){
    modalBox.style.display = 'flex';
});

navJoin.addEventListener('click', function(){
    modalBox2.style.display = 'flex';
});

xBox.addEventListener('click', function(){
    modalBox.style.display = "none";
});

xBox2.addEventListener('click', function(){
    modalBox2.style.display = "none";
});

xBox.addEventListener('mouseover', function(){
    this.childNodes[1].style.color = '#668904';
});

xBox.addEventListener('mouseout', function(){
    this.childNodes[1].style.color = 'black';
})

var $all = $(".all");
var $inputs = $(".form--join");

$all.on('click', function(){
    if($(this).is(":checked")){
        $inputs.prop('checked', true);
    }else{
        $inputs.prop('checked', false);
    }
})
$inputs.on('click', function(){
    if(!$(this).is(":checked")){
        $all.prop('checked', false);
    }
    if($inputs.filter(":checked").length == 3){
    $all.prop('checked', true);
}
});
// var allCheckbox = document.querySelector(".all");
// var termCheckboxes = document.querySelectorAll(".form--join");

// allCheckbox.addEventListener('click', function() {
//     var isChecked = allCheckbox.checked;
//     termCheckboxes.forEach(function(checkbox) {
//         checkbox.checked = isChecked;
//     });
// });

// termCheckboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('click', function() {
//         var allChecked = true;
//         termCheckboxes.forEach(function(termCheckbox) {
//             if (!termCheckbox.checked) {
//                 allChecked = false;
//             }
//         });
//         allCheckbox.checked = allChecked;
//     });
// });


function over(arg){
    arg.src = "https://image.osulloc.com/kr/ko/static_cdj/images/main/icon_cart_hover.png";
}

function out(arg){
    arg.src = "https://image.osulloc.com/kr/ko/static_cdj/images/main/icon_cart_black.png";
}

function over2(arg){
    arg.src = "https://image.osulloc.com/kr/ko/static_cdj/images/main/icon_more_hover.png";
}

function out2(arg){
    arg.src = "https://image.osulloc.com/kr/ko/static_cdj/images/main/icon_more_black.png";
}

function over3(arg){
    arg.src = "https://image.osulloc.com/kr/ko/static_cdj/images/main/icon_drop_hover.png";
}

function out3(arg){
    arg.src = "https://image.osulloc.com/kr/ko/static_cdj/images/main/icon_drop_black.png";
}