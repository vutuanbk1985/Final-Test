const a = Number(document.getElementById("numA").value);
const b = Number(document.getElementById("numB").value);
const result = document.getElementById("result");
const btn = document.getElementById("btn");
// const prime = document.getElementById("prime");
let sum;
// let primeList = [];

// function tinhTong (a, b)    {
//     if (checkPrime(a, b))   {
//         sum += 
//     }
// }

btn.onclick = () => {
    const a = Number(document.getElementById("numA").value);
    const b = Number(document.getElementById("numB").value);
    console.log(checkValid(a, b))
    if (checkValid(a, b)) {
        
        
        checkPrime(a, b);
        result.innerHTML = sum;
        console.log(sum);
        // prime.innerHTML = primeList;
    }
}

function checkValid(a, b) {
    if (a === null || b === null || a >= b || isNaN(a) || isNaN(b)) {
        alert("So nhap vao khong hop le");
        return false;
    }



    return true;

}

function checkPrime(a, b) {
    let check;
    
    if (a <= 2) {
        sum = 2;
        for (i = 3; i <= Math.floor(b); i++) {
            check = true;
            for (j = 2; j < i; j++) {
                if (i % j === 0) {
                    check = false;
                    break;
                }

            }
            if (check)  { 
                console.log(i);
                // primeList += i;
                sum += i;
            }
        }
    } else {
        sum = 0;
        for (i = Math.ceil(a); i <= Math.floor(b); i++) {
            check = true;
            for (j = 2; j < i; j++) {
                if (i % j === 0) {
                    check = false;
                    break;
                }

            }
            if (check)  { 
                console.log(i);
                // primeList += i;
                sum += i;
            }
            
        }
    }
    return sum;
}

