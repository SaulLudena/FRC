/* 

Dato: todos los terminos están en ingles

Terminos que uso...

s-container = contenedor de servicios
st-container = contenedor de tratamientos especializados
c-container = contenedor de comentarios
*/


//contenedor donde se mostrarán las tarjetas de los servicios
const s_container = document.getElementById("s-container");
//contenedor donde se mostrarán las tarjetas de los tratamientos especializados
const st_container = document.getElementById("st-container");
//contenedor donde se mostrarán las tarjetas de los comentarios
const c_container = document.getElementById("c-container");


/*-----Estructura de fetch API----- */
fetch("assets/json/services.json")
//promesa 1: transformar la respuesta a Json
.then((response)=>{
    return response.json();
})
//promesa 2: Aqui manipulamos la informacion como archivo json :)
.then((data)=>{
    //mostramos datos por consola
    //console.log("data = ",data)
    //console.log(data.services)
    //console.log(data.comments)
    //console.log(data.specialized_treatments)

    //variables para almacenar los objetos
    let s = data.services;
    let st = data.specialized_treatments;
    let c = data.comments;

    //limpianos los divs
    s_container.innerHTML = '';
    st_container.innerHTML = '';
    c_container.innerHTML = '';

    //recorremos el arreglo de servicios
    for (let s_item of s) {
        //variable que reemplaza los espacios en blanco por "%20" para usarlos en el href hacia WhatsApp
       const s_messageToWSP = s_item.Message.replace(/%20/g, " "); 
       s_container.innerHTML += `
        <div class="s_card">
            <div class="s_card-body">
                <span class="s_body-text">${s_item.Name}</span>
            </div>
            <div class="s_card-footer">
                <span class="s_footer-text"><a href="https://wa.me/51912045006?text=${s_messageToWSP}" target="_autoblank"><i class="fab fa-whatsapp"></i>&nbsp;&nbsp;Consultar en WhatsApp</a></span>
            </div>
        </div>
       ` 
    }
    //recorremos el arreglo de tratamientos especializados
    for (let st_item of st) {
        //variable que reemplaza los espacios en blanco por "%20" para usarlos en el href hacia WhatsApp
       const st_messageToWSP = st_item.Message.replace(/%20/g, " "); 
       st_container.innerHTML += `
       <div class="st_card">
            <div class="st_card-body">
                <span class="st_body-text">${st_item.Name}</span>
            </div>
            <div class="st_card-footer">
                <span class="st_footer-text"><a href="https://wa.me/51912045006?text=${st_messageToWSP}" target="_autoblank"><i class="fab fa-whatsapp"></i>&nbsp;&nbsp;Consultar en WhatsApp</a></span>
            </div>
       </div>
       ` 
    }
    //recorremos el arreglo de comentarios
    for (let c_item of c) {
       c_container.innerHTML += `
        <div class="c_card">
                <div class="c_card-body">
                    <span class="c_body-text">“${c_item.Description}”</span>
                </div>
                <div class="c_card-footer">
                    <span class="c_user">
                        <img src="${c_item.imgURL}" alt="${c_item.imgURL}">
                        <p>${c_item.Author}</p>
                    </span>
                    <span class="c_stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>                        
                        <i class="fas fa-star"></i>
                    </span>
                </div>
        </div>
       ` 
    }

})
