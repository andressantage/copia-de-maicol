import { getUsuarios } from "../API/API.js"



const evaluo = {
    usuario: "",
    contraseña: ""
}


const usuario = document.querySelector('#inputUsuario')
const contraseña = document.querySelector('#contraseña2')
const buscar = document.querySelector('#sesion')
buscar.addEventListener('click', buscador)

usuario.addEventListener('input', e => {
    evaluo.usuario = e.target.value;
    console.log(evaluo);
})
contraseña.addEventListener('input', e => {
    evaluo.contraseña = e.target.value;
    console.log(evaluo);
})


async function buscador() {
    if (evaluo.usuario && evaluo.contraseña) {
        const usuarios = await getUsuarios()
        usuarios.forEach(element => {
            if (element.usuario === evaluo.usuario && element.contraseña === evaluo.contraseña) {
                buscar.addEventListener('click', ()=>{
                    window.location.replace ("/ventas.html")
                })
            }else if(element.usuario === evaluo.usuario && element.contraseña != evaluo.contraseña){
                alert("contraseña incorrecta")
            }
            else if(element.usuario != evaluo.usuario && element.contraseña === evaluo.contraseña){
                alert("Usuario no encontrado")
            }
        });

    }else{
        alert("campos vacios")
    }

}








