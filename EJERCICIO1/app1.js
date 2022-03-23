

class Cuenta{
    constructor(nombre, apellido, dni, nroCuenta, saldoActual=0, saldoDepositar=0, retirarSaldo=0, retiroSaldo1=0){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.dni = parseInt(dni);
        this.nroCuenta = parseInt(nroCuenta);
        this.saldoActual = parseFloat(saldoActual);
        this.saldoDepositar = parseFloat(saldoDepositar);
        this.retirarSaldo = parseFloat(retirarSaldo)
        this.retiroSaldo1 = parseFloat(retiroSaldo1);
    }
    /*
    crearCuenta(){        
        this.nroCuenta = this.nroCuenta;        
        this.dni = dni;
        this.saldoActual = this.saldoActual;
    }
    */
    depositarSaldo(){
        this.saldoDepositar = parseFloat(prompt("¿CUANTO DINERO QUIERE DEPOSITAR?"))
        this.saldoActual= this.saldoActual + this.saldoDepositar;
        console.log("SALDO ACTUAL = $ " + this.saldoActual);
    }
    consultarSaldo(){
        console.log("SU SALDO ES $" + this.saldoActual);
    }
    extraerSaldo(){
        this.retirarSaldo = parseFloat(prompt("¿CUANTO DINERO QUIERE RETIRAR?"));
        if(this.retirarSaldo > this.saldoActual){
            console.log("SALDO INSUFICIENTE!!")
        }else{
            this.saldoActual = this.saldoActual - this.retirarSaldo
        }
        console.log("SU SALDO ES $" + this.saldoActual);
    }
    extraccionRapida(){
        this.retiroSaldo1 = parseFloat(prompt("¿INGRESE MONTO EXTRACCIÓN RÁPIDA ?"));
        let limite = this.saldoActual * 1.2
        if(this.retiroSaldo1 > limite ){
            console.log("EXCEDE SALDO DISPONIBLE A EXTRAER ")
        }else{
            this.saldoActual = this.saldoActual - this.retiroSaldo1
        }
        console.log("SU SALDO ES $" + this.saldoActual);
    }
    consultarDatos(){
        console.log("Titular: " + this.nombre + " "+ this.apellido);
        console.log("DNI: " + this.dni);
        console.log("Cuenta N " + this.nroCuenta);
    }
}

const cta = new Cuenta(prompt("Ingrese Nombre"), prompt("Ingrese Apellido"), prompt("Ingrese DNI"), prompt("Ingrese numero de cuenta"));

for(const datos in cta ){
    console.log(cta[datos])
}

do {

    alert(" 1) DEPOSITAR DINERO\n"+" 2) EXTRAER DINERO\n"+" 3) EXTRAER RAPIDA\n"+" 4) CONSULTAR SALDO\n"+" 5) CONSULTAR DATOS\n"+ " 6) SALIR\n" + "ELIJA OPCIÓN");
    
    menu=parseInt(prompt("ELIJA OPCIÓN"));

    switch (menu) {
        case 1:
            cta.depositarSaldo();           
            break;                
        case 2:
            cta.extraerSaldo();
            break;
        case 3:
            cta.extraccionRapida();
            break;
        case 4:
            cta.consultarSaldo();            
            break;
        case 5:
            cta.consultarDatos();            
            break;     
        case 6:
            alert("HASTA LA PRÓXIMA");
            break;
        default:
            alert("OPCION INCORRECTA")    
    }
} while (menu!=6);
