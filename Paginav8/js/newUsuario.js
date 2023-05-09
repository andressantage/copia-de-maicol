import { nuewUsuario } from "../API/API.js";


(function () {
        

    const formulario = document.querySelector('#Registrarr')
    formulario.addEventListener('submit',newUsuarios)

    function newUsuarios (e){
        e.preventDefault()
        
        const nombre = document.querySelector('#nombre').value
        const usuario = document.querySelector('#usuario').value
        const contraseña = document.querySelector('#contraseña').value
        
        console.log(nombre);
        

        const registro = {
            nombre,
            usuario,
            contraseña,

        }
        if(validation(registro)){
            alert("todos los campos son Oblicagatorios")
            return
        }
        nuewUsuario(registro)
        
        
        
    }


    function validation (Objecto){
        return !Object.values(Objecto).every(element=>element !=='')
    }






})();
