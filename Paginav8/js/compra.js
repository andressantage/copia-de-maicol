import { getCompra,nuewCompra,deleCompra} from "../API/API.js";


const tabalCategorias = document.querySelector('#categoriasTablas')
document.addEventListener('DOMContentLoaded',cargarTablas)

async function cargarTablas (){
    console.log("holaaaaaaaaaaaaa");
    const infocateorias = await getCompra()
    infocateorias.forEach(element => {
        const {id,fecha,producto,cantidad,proveedor} = element
        tabalCategorias.innerHTML+=`      
                <tr>
                    <th scope="row">${id}</th>
                        <td>${fecha}</td>
                        <td>${producto}</td>
                        <td>${cantidad}</td>
                        <td>${proveedor}</td>
                        <td><button type="button" data-prope="${id}" class="btn btn-danger delete" >Borrar</button></td>
                     
                </tr>
        `

        
    });
}

(function () {


    const selct = document.querySelector('#categoria')
    
    document.addEventListener('DOMContentLoaded',cargarOpciones)
    async function cargarOpciones (){
        const nombreCategorias = await getCategoria ()
        nombreCategorias.forEach(element => {
            const {categoria,id}= element
            /* const opciones = document.createElement('option')
            opciones.value=categoria
            opciones.textContent=categoria */
            
            selct.innerHTML+=`<option class="categoriaId" id="categoria" value="${categoria}">${categoria}</option>` 
            
        });
        document.querySelector('#categoria').appendChild(opciones)

    }
    
    

    const formulario = document.querySelector('#Registrarr')
    const categoria= document.querySelector('#categoria')
    formulario.addEventListener('submit',newCategoria)

    function newCategoria (e){
        e.preventDefault()
        console.log(e.target);
        
        const nombre = document.querySelector('#nombre').value
        const precio = document.querySelector('#precio').value
        const categoria= document.querySelector('#categoria').value
    

        
        let compra = {
            
            nombre,
            precio,
            stock: 5,
            categoria
            
            
        }
        
        if(validation(compra)){
            alert("todos los campos son Oblicagatorios")
            return
        }
        nuewCompra(compra)
        
        
        
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
                deleCompra(idPropietario);
            }
            
        }

    }





})();



