import { getCategoria,nuewCategoria,deleteCategoria } from "../API/API.js";


const tabalCategorias = document.querySelector('#categoriasTablas')
document.addEventListener('DOMContentLoaded',cargarTablas)

async function cargarTablas (){
    console.log("holaaaaaaaaaaaaa");
    const infocateorias = await getCategoria()
    infocateorias.forEach(element => {
        const {id,categoria} = element
        tabalCategorias.innerHTML+=`      
                <tr>
                    <th scope="row">${id}</th>
                        <td>${categoria}</td>
                        <td><button type="button" data-prope="${id}" class="btn btn-danger delete" >Borrar</button></td>
                     
                </tr>
        `

        
    });
}

(function () {
        

    const formulario = document.querySelector('#Registrarr')
    formulario.addEventListener('submit',newCategoria)

    function newCategoria (e){
        e.preventDefault()
        
        const categoria = document.querySelector('#categoria').value

        
      
        

        const categorias = {
            categoria,
            

        }
        if(validation(categorias)){
            alert("todos los campos son Oblicagatorios")
            return
        }
        nuewCategoria(categorias)
        
        
        
    }


    function validation (Objecto){
        return !Object.values(Objecto).every(element=>element !=='')
    }

   const borar = document.querySelector('#categoriasTablas')
    borar.addEventListener('click',confirmarBorrar)



    function confirmarBorrar(e){
        console.log("nnnnnnnnn");
        if(e.target.classList.contains('delete')){
            
            const idPropietario = parseInt(e.target.dataset.prope)
            console.log(idPropietario);
            const confir = confirm("Desea Eliminar al cliente?")
            if(confir){
                deleteCategoria(idPropietario);
            }
            
        }

    }





})();



