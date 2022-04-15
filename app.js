let AgeArea = document.querySelector("#AgeArea");
let cal = document.querySelector("#calbtn");
let reset = document.querySelector("#resetbtn");
let r_age = document.querySelector("#r_age");
let answer = document.querySelector(".answer");
let refresh = document.querySelector(".refresh");
let age;
let mytimer1;
let mytimer2;
let alert1 = document.querySelector(".alert1");
let alert2 = document.querySelector(".alert2");

cal.addEventListener('click', function(){
    alert1.classList.remove('active');
    alert2.classList.remove('active');
    age = AgeArea.value.trim();
    //clearInterval(mytimer);
    if (isNaN(age) == true || age == "" || age < 0){
        answer.classList.remove('active');
        alert1.classList.add("active");

        mytimer1 = setInterval(function(){
        alert1.classList.remove('active');
        clearInterval(mytimer1);
    }, 2000);
    }

    else if (age > 90){
        answer.classList.remove('active');
        alert2.classList.add("active");

        mytimer2 = setInterval(function(){
        alert2.classList.remove('active');
        clearInterval(mytimer2);
    }, 2000);
    }
    
    else {
        answer.classList.add('active');

        let r_w = ~~(((90 - age) * 365)/7);

        r_age.innerHTML = separateNumbersInComma(r_w);
        AgeArea.value = "";
    }

    AgeArea.value = "";
});



function separateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


reset.addEventListener('click', function () {
    refresh.click();
});