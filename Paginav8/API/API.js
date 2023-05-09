const ulrUsuarios = "http://localhost:4000/USUARIOS"
const ulrCategorias = "http://localhost:4000/CATEGORIAS"
const ulrProductos = "http://localhost:4000/Productos"
const ulrClientes = "http://localhost:4000/Clientes"
const ulrUset = "http://localhost:4000/USUARIOS"
const ulrFactura = "http://localhost:4000/Facturas"
const ulrCompra = "http://localhost:4000/Compras"




/* LLlma a la api para la vlaidaciond de Usuarios */
export const getUsuarios = async () =>{
    try{
        const result = await fetch (ulrUsuarios);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewUsuario = async (registro) =>{
    console.log(registro);
    try {
        await fetch(ulrUsuarios,{
            method: 'POST',
            body: JSON.stringify(registro),
            headers:{
                'Content-Type': 'application/json'
            }

        });
        // window.location.href='index.html'

    } catch (error) {
        console.log(error);
    }
}



/* //////////////////////////////////////AÑADIR CATEFOIRAS */

export const getCategoria = async () =>{
    try{
        const result = await fetch (ulrCategorias);
        const datosCategoria = await result.json();
        return datosCategoria;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewCategoria = async (categoria) =>{
    console.log(categoria);
    try {
        await fetch(ulrCategorias,{
            method: 'POST',
            body: JSON.stringify(categoria),
            headers:{
                'Content-Type': 'application/json'
            }

        });
         //window.location.href='ventas.html'

    } catch (error) {
        console.log(error);
    }
}

export const deleteCategoria = async id => {
    try {
       await fetch (`${ulrCategorias}/${id}`,{
            method: 'DELETE'
       })
        
    } catch (error) {
        console.log(error);
        
    }


}


/*  //////////////////////////PRODUCTOS*/
export const getProducto = async () =>{
    try{
        const result = await fetch (ulrProductos);
        const datosProducto= await result.json();
        return datosProducto;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewProducto = async (categorias) =>{
    console.log(categorias);
    try {
        await fetch(ulrProductos,{
            method: 'POST',
            body: JSON.stringify(categorias),
            headers:{
                'Content-Type': 'application/json'
            }

        });
         //window.location.href='ventas.html'

    } catch (error) {
        console.log(error);
    }
}

export const deleteProducto= async id => {
    try {
       await fetch (`${ulrProductos}/${id}`,{
            method: 'DELETE'
       })
        
    } catch (error) {
        console.log(error);
        
    }
}



/*  //////////////////////////Clientes*/
export const getclientes = async () =>{
    try{
        const result = await fetch (ulrClientes);
        const datosClientes= await result.json();
        return datosClientes;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewClientes = async (cliente) =>{
    console.log(cliente);
    try {
        await fetch(ulrClientes,{
            method: 'POST',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }

        });
         //window.location.href='ventas.html'

    } catch (error) {
        console.log(error);
    }
}

export const deleteClientes= async id => {
    try {
       await fetch (`${ulrClientes}/${id}`,{
            method: 'DELETE'
       })
        
    } catch (error) {
        console.log(error);
        
    }
}



/*  //////////////////////////USUARIOS*/
export const getuFactura= async () =>{
    try{
        const result = await fetch (ulrFactura);
        const datosClientes= await result.json();
        return datosClientes;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewFactura= async (factura) =>{
    console.log(factura);
    try {
        await fetch(ulrFactura,{
            method: 'POST',
            body: JSON.stringify(factura),
            headers:{
                'Content-Type': 'application/json'
            }

        });
         //window.location.href='ventas.html'

    } catch (error) {
        console.log(error);
    }
}

export const deletFactura= async id => {
    try {
       await fetch (`${ulrFactura}/${id}`,{
            method: 'DELETE'
       })
        
    } catch (error) {
        console.log(error);
        
    }
}



/*  //////////////////////////Factura*/
export const getuSET= async () =>{
    try{
        const result = await fetch (ulrUset);
        const datosClientes= await result.json();
        return datosClientes;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewUSET = async (factura) =>{
    console.log(factura);
    try {
        await fetch(ulrUset,{
            method: 'POST',
            body: JSON.stringify(factura),
            headers:{
                'Content-Type': 'application/json'
            }

        });
         //window.location.href='ventas.html'

    } catch (error) {
        console.log(error);
    }
}

export const deleteUset= async id => {
    try {
       await fetch (`${ulrUset}/${id}`,{
            method: 'DELETE'
       })
        
    } catch (error) {
        console.log(error);
        
    }
}


/*  //////////////////////////COMPRA*/
export const getCompra= async () =>{
    try{
        const result = await fetch (ulrCompra);
        const datosCompra= await result.json();
        return datosCompra;
        
    }
    catch(error){
        console.log(error);
    }
}


export const nuewCompra = async (compra) =>{
    console.log(compra);
    try {
        await fetch(ulrCompra,{
            method: 'POST',
            body: JSON.stringify(compra),
            headers:{
                'Content-Type': 'application/json'
            }

        });
         //window.location.href='ventas.html'

    } catch (error) {
        console.log(error);
    }
}

export const deleCompra= async id => {
    try {
       await fetch (`${ulrCompra}/${id}`,{
            method: 'DELETE'
       })
        
    } catch (error) {
        console.log(error);
        
    }
}