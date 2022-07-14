
let usuario;
let contrasenia;

function singIn(dato1,dato2){
    dato1=prompt('Inresar nombre de usuario desesado');
    dato2=prompt('Ingresar contraseña deseada');
    usuario=dato1;
    contrasenia=dato2;
    return usuario,contrasenia;
}

function logIn(dato1,dato2){
    for(let i=1;i<4;i++){
        let usuarioIngresado=prompt('Ingresar Usuario Intento '+ i + ' de 3');
        let contraseniaIngresada=prompt('Ingresar Contraseña Intento '+ i + ' de 3');
    
        if (dato1==usuarioIngresado&&dato2==contraseniaIngresada){
            //console.log('Ingresado Correctamente!');
            alert('Ingresado Correctamente! Hola ' + dato1);
            break;
        }   else if(dato1!=usuarioIngresado||dato2!=contraseniaIngresada){
            
                switch(i){
                    case 2: 
                        alert('Ultimo intento antes de bloquear la cuenta');
                        break;
                    case 3:
                        alert('Su cuenta a sido bloqueada!');
                        break;
                    default:
                        alert('Datos Incorrectos');
                        break;
                }

            }
    }
}
singIn(usuario,contrasenia)
logIn(usuario,contrasenia);

