
class Persona{
    constructor(nombre, edad =0, sexo, altura=0, peso=0){
        this.nombre = nombre.toUpperCase();
        this.edad = parseInt(edad);
        this.sexo = sexo.toUpperCase();
        this.altura = parseFloat(altura);
        this.peso = parseFloat(peso);
    }
    crearPersona(){
        this.nombre = this.nombre;
        this.edad = this.edad;
        this.sexo = this.sexo;
        this.altura = this.altura;
        this.peso = this.peso;
    }
    calcularIMC(){
        let imc = this.peso/(this.altura*this.altura);
        if(imc<18.5){
            console.log("Su IMC es menor que 18.5 - ESTAS FLACO METELE OLLA!!");
        }
        if(imc>=18.5 && imc<24.9){
            console.log("18.5 < IMC < 24.9 - PESO NORMAL");
        }
        if(imc>=24.9 && imc<29.9){
            console.log("24.9 < IMC < 29.9 - OJO TENES SOBREPESO");
        }
        if(imc >30){
            console.log("IMC > 30 - ESTAS RE GORDO. AFLOJALE A LOS POSTRES!!")
        }
    }
    esMayor(){
        let mayor = 0;
        let menor = 0;
        if(this.edad >= 18){
            mayor = mayor + 1;
            console.log("ES MAYOR DE EDAD");
        }else{
            console.log("ES MENOR DE EDAD");
            menor = menor + 1;
        }
    }
    mostrarResultado(){
        console.log("RESUMEN")
        console.log(" MAYORES DE EDAD "+(mayor/3)*100+ " % ");
        console.log(" MENORES DE EDAD "+(menor/3*100)+ " % ");
    }
}


const person = new Persona(prompt("Ingrese su Nombre: "), parseInt(prompt("Ingrese su Edad: ")),
prompt("Ingrese sexo:('M' / 'F') "), parseFloat(prompt("Ingrese su Altura (mts): ")), parseFloat(prompt("Ingrese su Peso (kg): ")));

for(const datos in person){
    console.log(person[datos])
}
person.calcularIMC();
person.esMayor();

const person1 = new Persona(prompt("Ingrese su Nombre: "), parseInt(prompt("Ingrese su Edad: ")),
prompt("Ingrese sexo:('M' / 'F') "), parseFloat(prompt("Ingrese su Altura (mts): ")), parseFloat(prompt("Ingrese su Peso (kg): ")));

for(const datos1 in person1){
    console.log(person1[datos1])
}

person1.calcularIMC();
person1.esMayor();

const person2 = new Persona(prompt("Ingrese su Nombre: "), parseInt(prompt("Ingrese su Edad: ")),
prompt("Ingrese sexo:('M' / 'F') "), parseFloat(prompt("Ingrese su Altura (mts): ")), parseFloat(prompt("Ingrese su Peso (kg): ")));

for(const datos2 in person2){
    console.log(person2[datos2])}

person2.calcularIMC();
person2.esMayor();

