// Clase Constructora

// SUMA - RESTA - MULTIPLICACION - DIVISION

class Operacion{
    constructor (num1, num2, suma=0, resta=0, mult=0, div=0){
        this.num1 = Number(num1);
        this.num2 = Number(num2);
        this.suma = Number(suma);
        this.resta = Number(resta);
        this.mult = Number(mult);
        this.div = Number(div);
    }
    sumar(){
        this.suma = this.num1 + this.num2;
        return this.suma
    };    
    restar(){
        return this.resta = this.num1 - this.num2
    };
    multiplicar(){  
        if ((this.num1==0)||(this.num2==0)){
        return 0;
        }else{
            return this.mult = this.num1*this.num2
        }
    }
    division(){
        if(this.num2==0){
            return 0;
        }else{
            return this.div = this.num1/this.num2
        }
    }    
}

let n1 = Number(prompt("Ingrese el primer numero"));
let n2 = Number(prompt("Ingrese el segundo numero"));

const op1 = new Operacion(n1,n2);



for(const numeros in op1 ){
    console.log(op1[numeros])
}

console.log ("La suma de " + n1 + " y " + n2 + " = " + op1.sumar());
console.log("La resta de " + n1 + " y " + n2 + " = " + op1.restar())
console.log ("La resta de ambos numeros es = " + op1.restar());

if(op1.multiplicar()==0){
    console.log("ERROR.Multiplicación por 0")
}else{
    console.log ("La multiplicación de ambos numeros es = " + op1.multiplicar());
    console.log("La multiplicación de " + n1 + " x " + n2 + " = " + op1.multiplicar())
}

if(op1.division()==0){
    console.log("ERROR. Division por 0")
}else{
    console.log("La division de ambos numeros es = " + op1.division());
    console.log("La división de " + n1 + " / " + n2 + " = " + op1.division())
}



