import { getuFactura,nuewFactura,deletFactura,getclientes,getuSET,getProducto} from "../API/API.js";


const tabalCategorias = document.querySelector('#categoriasTablas')
document.addEventListener('DOMContentLoaded',cargarTablas)

async function cargarTablas (){
    console.log("holaaaaaaaaaaaaa");
    const infocateorias = await getuFactura()
    infocateorias.forEach(element => {
        const {id,cliente,empleado,fecha,Producto,cantidad} = element
        tabalCategorias.innerHTML+=`      
                <tr>
                    <th scope="row">${id}</th>
                        <td>${cliente}</td>
                        <td>${empleado}</td>
                        <td>${fecha}</td>
                        <td>${Producto}</td>
                        <td>${cantidad}</td>
                        <td><button type="button" data-prope="${id}" class="btn btn-danger delete" >Borrar</button></td>
                     
                </tr>
        `

        
    });
}

(function () {


    const selct = document.querySelector('#cliente')
    const selct2 = document.querySelector('#empleado')
    const selct3 = document.querySelector('#Producto')
    
    document.addEventListener('DOMContentLoaded',cargarOpciones)
    async function cargarOpciones (){
        const nombreCliente = await getclientes ()
        const nobreEmpleado = await getuSET ()
        const nobreProducto = await getProducto ()


        nombreCliente.forEach(element => {
            const {nombre,id}= element
            selct.innerHTML+=`<option class="categoriaId" id="categoria" value="${nombre}">${nombre}</option>` 
            
        });
        

        nobreEmpleado.forEach(element => {
            const {nombre,id}= element
            selct2.innerHTML+=`<option class="categoriaId" id="categoria" value="${nombre}">${nombre}</option>` 
            
        });

        nobreProducto.forEach(element => {
            const {nombre,id}= element
            selct3.innerHTML+=`<option class="categoriaId" id="categoria" value="${nombre}">${nombre}</option>` 
            
        });
        


    }
    
    

    const formulario = document.querySelector('#Registrarr')
    const categoria= document.querySelector('#categoria')
    formulario.addEventListener('submit',newCategoria)

    function newCategoria (e){
        e.preventDefault()
        console.log(e.target);
        
        const cliente = document.querySelector('#cliente').value
        const empleado = document.querySelector('#empleado').value
        const fecha= document.querySelector('#fecha').value
        const Producto= document.querySelector('#Producto').value
        const cantidad= document.querySelector('#cantidad').value
    

        
        let factura = {
      
            cliente,
            empleado,
            fecha,
            Producto,
            cantidad
        }
        
        if(validation(factura)){
            alert("todos los campos son Oblicagatorios")
            return
        }
        nuewFactura(factura)
        
        
        
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
                deletFactura(idPropietario);
            }
            
        }

    }





})();



