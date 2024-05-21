const bancoUsuario = []

function agregarDatosdelUsuario(dni, nombre, apellido) {
    let datosUsuario = {
        dni,
        nombre,
        apellido,
        saldo:0
    }
    bancoUsuarios.push(datosUsuario)
    alert ("Usuario Guardado")
}



function depositarSaldodelUsuario() {
    while (saldoDeposito <= 0){
        alert ("deposite un monto valido")
        saldoDeposito = parseFloat(prompt("ingrese nuevamente el monto a depositar"))
    }
    for(usuario of bancoUsuarios){
        if(usuario.dni === dni){
            usuario.saldo = usuario.saldo + saldoDeposito
            break
        }
    }


    
    return alert ("el saldo total es: " + saldoDeposito)
    
}

function retirarSaldodelUsuario() {
console.log(retirarSaldodelUsuario)

}

function consultarSaldodelUsuario(dniConsulta) {
    for(usuario of bancoUsuarios){
        if(usuario.dni === dniConsulta){
            alert("El saldo del usuario es: " + usuario.saldo)
            break
        }
    }


}

function principal(){
    let continuar = true
    while(continuar){
        let accion = prompt("A: agregar usuario /  D: depositar saldo / V: ver saldo ")
        if(accion == "A"){
            let userDni = prompt("ingrese dni")
            let userNombre = prompt("ingrese nombre")
            let userApellido = prompt("ingrese apellido")

            agregarDatosdelUsuario(userDni, userNombre, userApellido)
        }else if(accion == "D"){
            let userDni = prompt("ingrese dni para el deposito")
            let saldoDeposito = parseFloat(prompt("Ingrese el monto a depositar"))
            depositarSaldodelUsuario(userDni,saldoDeposito)
        }else if(accion == "V"){
            let userDni = prompt("ingrese dni para consultar su saldo")
            consultarSaldodelUsuario(userDni)
        }
        continuar = confirm("quiere continuar?")
    }
}


principal()
