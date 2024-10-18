function recalc(event) {
    let opt1 = document.getElementById("opt1");
    let check = document.getElementById("check");
    let kol = document.getElementsByName("kol2");
    let r1 = document.getElementsByName("r1");

    let res = document.getElementById("res2");
    let c1 = document.getElementsByName("check1");
    let c2 = document.getElementsByName("check2");


    let radioVal = r1[0].value;
    r1.forEach(function (radio) {
        if (radio.checked) {
            radioVal = radio.value;
        }
    })

    let cost = 0;
    if (radioVal == "1") {
        opt1.style.display = "none";
        check.style.display = "none";
        cost = 100;
    }
    else if (radioVal == "2") {
        opt1.style.display = "block";
        check.style.display = "none";
        cost = 200 + parseInt(opt1.value);
    }
    else {
        opt1.style.display = "none";
        check.style.display = "block";
        cost = 300;

        if (c1[0].checked){
            cost += 5;
        }
        if (c2[0].checked){
            cost += 7;
        }
    }


    if (/^\d+$/.test(kol[0].value)){
        res.innerHTML = parseInt(kol[0].value) * cost;
    }
    else{
        res.innerHTML = cost;
    }


    console.log("Updated");
}






window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed // script2");
    /*let button = document.getElementById("button1");
    button.addEventListener("click", calc);*/

    

    let r = document.querySelectorAll(".radios input[type=radio]");
    r.forEach(function (radio) {
        
        radio.addEventListener("change", recalc);    
    });

    let s = document.getElementsByName("opt1");
    s[0].addEventListener("change", recalc);

    let c = document.getElementsByName("check");
    c.forEach(function (checkbox) {
        checkbox.addEventListener("change", recalc)
    })

    let c1 = document.getElementsByName("check1");
    let c2 = document.getElementsByName("check2");
    c1[0].addEventListener("change", recalc);
    c2[0].addEventListener("change", recalc);
    

    let k = document.getElementsByName("kol2");
    k[0].addEventListener("blur", recalc);

    recalc();
});