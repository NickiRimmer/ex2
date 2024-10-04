function calс() {
    let res=document.getElementById('res');
    //alert('yeah');
    let a=document.getElementsByName('kolichestvo');
    let b=document.getElementsByName('tovar');
    let ai = Number(a[0].value);
    console.log(ai * b[0].value);
    console.log(a[0].value);
    if (/^\d+$/.test(a[0].value)){
        res.innerHTML=ai * b[0].value;
    }
    else{
        res.innerHTML = 'Uncorrect input';
        alert('Неверный ввод!');
    }
}