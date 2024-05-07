const BANCOUSUARIO = []
let usuarioSaldo = 0
let userdni = prompt("ingrese dni")
let usernombre = prompt("ingrese nombre")
let userapellido = prompt("ingrese apellido")
agregarDatosdelUsuario(userdni, usernombre, userapellido)
let saldoDeposito = parseFloat(prompt("Ingrese el monto a depositar"))
depositarSaldodelUsuario ()

function agregarDatosdelUsuario(dni, nombre, apellido) {
    let usuariodatos = (dni + "" + nombre + "" + apellido)
    alert (usuariodatos)
}


function depositarSaldodelUsuario() {
    while (saldoDeposito <= 0){
        alert ("deposite un monto valido")
        saldoDeposito = parseFloat(prompt("ingrese nuevamente el monto a depositar"))
    }
    return alert (saldoDeposito)
    
}



function retirarSaldodelUsuario() {
console.log(retirarSaldodelUsuario)

}

function consultarSaldodelUsuario(dniConsulta) {
    const usuario = BANCOUSUARIO.find(user => userdni === dniConsulta);
    if (usuario){
        alert( usuarioSaldo);
    }else{ alert ("No se encuentra el usuario con ese DNI")

        }
    
console.log(consultarSaldodelUsuario)}//en proceso todavia 

