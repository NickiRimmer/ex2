function calc(event) {
    event.preventDefault();
    let res=document.getElementById('res');
    let a=document.getElementsByName('kolichestvo');
    let b=document.getElementsByName('tovar');
    let ai = Number(a[0].value);
    if (/^\d+$/.test(a[0].value)){
        res.innerHTML=ai * b[0].value;
    }
    else{
        res.innerHTML = 'Uncorrect input';
        alert('Неверный ввод!');
    }
    return false;
};

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed // script1");
    let button = document.getElementById("button1");
    button.addEventListener("click", calc);
});