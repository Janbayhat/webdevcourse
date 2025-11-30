const btn2 = document.getElementById("btn2");
document.addEventListener("DOMContentLoaded",()=>{
    pageLoaded();
})
btn2.addEventListener("click",()=>{print("button 2 clicked " + btn2.id + btn2.innerText);});

let txt1;
let txt2;
let btnCalc;
let lblRes;
function pageLoaded(){
    txt1 = document.getElementById("txt1");
    txt2 = document.querySelector('#txt2');
    btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener('click',()=>{calculate()});
    lblRes = document.getElementById("lblRes");
    dropdown = document.getElementById("dropdown")
    
}

function calculate(){
    let txt1text = parseFloat(txt1.value);
    let txt2text = parseFloat(txt2.value);
    let res = 0;
    
    if (dropdown.value=="+"){
    res = txt1text+txt2text;
    }
    if (dropdown.value=="-"){
    res = txt1text-txt2text;
    }
    if (dropdown.value=="*"){
    res = txt1text*txt2text;
    }
    if (dropdown.value=="/"){
        if(txt2text == 0){
        res = 0;
        }
        else{
        res = txt1text/txt2text;
        }
    }
    
    lblRes.innerText=res;
    let str = txt1.value + dropdown.value + txt2.value + "=" + res.toString();
    print(str,true)
}
function print(msg, toAdd) {
    const ta = document.getElementById("output");
    if (ta) {
        if (toAdd = false){
            ta.value = msg;}
        else {ta.value += ("\n" + msg)}}
    else console.log(msg);
}

function demoNative() {
    let out = "=== STEP 1: NATIVE TYPES ===\n";

    // String
    const s = "Hello World";
    out += "\n[String] s = " + s;
    out += "\nLength: " + s.length;
    out += "\nUpper: " + s.toUpperCase();

    // Number
    const n = 42;
    out += "\n\n[Number] n = " + n;

    // Boolean
    const b = true;
    out += "\n\n[Boolean] b = " + b;

    // Date
    const d = new Date();
    out += "\n\n[Date] now = " + d.toISOString();

    // Array
    const arr = [1, 2, 3, 4];
    out += "\n\n[Array] arr = [" + arr.join(", ") + "]";
    out += "\nPush 5 → " + (arr.push(5), arr.join(", "));
    out += "\nMap x2 → " + arr.map(x=>x*2).join(", ");

    // Functions as variables
    const add = function(a,b){ return a+b; };
    out += "\n\n[Function as variable] add(3,4) = " + add(3,4);

    // Callback
    function calc(a,b,fn){ return fn(a,b); }
    const result = calc(10,20,(x,y)=>x+y);
    out += "\n[Callback] calc(10,20, x+y ) = " + result;

    print(out, false);
}