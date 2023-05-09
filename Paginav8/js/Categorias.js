

document.addEventListener("DOMContentLoaded", () => {
    ListaCampers(campers)
  });

function ListaCampers(campers){
    const contenedorImg = document.querySelector('#cards')
    
    campers.forEach((camper)=>{    
      const {nombre,imagen,especialidad,id} = camper
      const cards = document.createElement('tr')
      cards.classList.add('car');
      cards.innerHTML = `
      <th scope="row">${id}</th>
      <td><img src="img/${imagen}" alt="" srcset="" class="cuenta"></td>
      <td>${nombre}</td>
      <td>${especialidad}</td>
      <td><button type="button" class="btn btn-warning">ver</button></td>


      
    
      `;
      contenedorImg.appendChild(cards)
     
     
    
    })
    
    
    } 

