var prompt = require('prompt-sync')();
const n = 100;

function menu(){
    console.log(" \n===== Hi there! what can I calculate for you? =====")
    console.log(" 1) Celcuis to Kelvin")
    console.log(" 2) Besic area")
    console.log(" 3) Volume of besic shape")
    console.log(" --- Exit type \'x\' ---")
    var ch = prompt('Enter your choice:');
    if(ch == 1){
        temp();
        console.log("\n what's next? ...\n")
        menu()
    }else if (ch ==2){
        Area()
        console.log("\n what's next? ...\n")
        menu()
    }else if(ch ==3){
        Volume()
        console.log("\n what's next? ...\n")
        menu()
    }else if(ch =='x'){
        i=100;
    }
    else{
        console.log(" \n**** plese enter only number 1-3 ****\n or enter \'x\' to exit\n\n")
        menu()
    }
}
function temp(){
    var c = prompt("\n ### Please input celcius:")
    var k = Number(c)+273.15;
    console.log(" This "+c+" Celcius = "+k+" Kelvin ####")
}
function submenu(){
    console.log("\n ----- Please input type of shape -----")
    console.log(" 1) Square")
    console.log(" 2) Triangle")
    console.log(" 3) Circle")
    console.log(" ---- type \'z\' to go back ----")
}
function Area(){
    for(j=0;j<=50;j++){
        submenu()
        var sch = prompt(' Enter your choice: ')
        if(sch ==1){
            squareA()
        }else if (sch ==2){
            triangleA()
        }else if (sch ==3){
            circleA()
        }else if (sch =='z'){
            j=50;
        }else{
            console.log(" \n**** plese enter only number 1-3 ****\n or enter \'z\' to exit\n\n")
            submenu()
        }
    }
}

function squareA(){
    var hieght = prompt("## Please input hieght : ")
    var width = prompt("## Please input width: ")
    var area= hieght*width;
    console.log(" This area of "+hieght+" X "+width+" ="+area+ " ###")
}
function triangleA(){
    var hieght = prompt("## Please input hieght : ")
    var base = prompt("## Please input base: ")
    var area= hieght*base*0.5;
    console.log(" This area of 1/2 X "+hieght+" X "+base+" ="+area+ " ###")
}
function circleA(){
    var r = prompt("## Please input radius : ")
    const pie = 3.14
    var area= pie*r*r
    console.log(" This area of "+r +" = "+area+ " ###")
}

function Volume(){
    for(j=0;j<=50;j++){
        submenu()
        var sch = prompt(' Enter your choice: ')
        if(sch ==1){
            squareV()
        }else if (sch ==2){
            triangleV()
        }else if (sch ==3){
            circleV()
        }else if (sch =='z'){
            j=50;
        }else{
            console.log(" \n**** plese enter only number 1-3 ****\n or enter \'z\' to exit\n\n")
            submenu()
        }
    }
}

function squareV(){
    var hieght = prompt("## Please input hieght : ")
    var width = prompt("## Please input width: ")
    var length = prompt("## Please input length: ")
    var volume= hieght*width*length;
    console.log(" This volume of cube is "+hieght+" X "+width+"X"+length+" ="+volume+ " ###")
}
function triangleV(){
    var hieght = prompt("## Please input hieght : ")
    var base = prompt("## Please input base: ")
    var width = prompt("## Please input width: ")
    var volume= hieght*width*0.5*base;
    console.log(" This volume of pyramid is 1/2 X "+hieght+" X "+base+" X "+width+" ="+volume+ " ###")
}
function circleV(){
    var r = prompt("## Please input radius : ")
    const pie = 3.14
    var volume= (4/3)*pie*r*r*r
    console.log(" This volume of sphere with radius "+r+ " = "+volume+ " ###")

}
for(i = 0; i<=n;i++){
    menu();
}
