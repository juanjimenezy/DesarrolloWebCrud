let list = [
            {cedula : "1140502018", nombre : "Juan", apellido: "Jimenez", pais : "Colombia",
             departamento: "Atlantico", ciudad: "Barranquilla", codigoPostal : "080005",
              email : "juan@cuc.edu.co", direccion: "calle 1 cr 2"},

            {cedula : "1120903089", nombre : "Jose", apellido: "Jimenez", pais : "Colombia",
            departamento: "Atlantico", ciudad: "Santa Marta", codigoPostal : "090006",
             email : "jose@cuc.edu.co", direccion: "calle 9 cr 10c"},

             {cedula : "920903089", nombre : "Raul", apellido: "Rogrigues", pais : "Colombia",
            departamento: "Atlantico", ciudad: "Cartagena", codigoPostal : "070006",
             email : "raul@cuc.edu.co", direccion: "calle 95 cr 106 45"}
            ];


this.mostrar();

function mostrar(){
    let tbody=document.getElementById("detalle");
    let reg="";

    for(let i=0;i<list.length;i++){
        reg+="<tr>";
        reg+="<td class='text-center'>"+(parseFloat(i)+parseFloat(1))+"</td>";
        reg+="<td class='text-center'><b>"+list[i].cedula+"</b></td>";
        reg+="<td>"+list[i].nombre+"</td>";
        reg+="<td>"+list[i].apellido+"</td>";
        reg+="<td>"+list[i].pais+"</td>";
        reg+="<td>"+list[i].departamento+"</td>";
        reg+="<td>"+list[i].ciudad+"</td>";
        reg+="<td>"+list[i].codigoPostal+"</td>";
        reg+="<td>"+list[i].email+"</td>";
        reg+="<td>"+list[i].direccion+"</td>";
        reg+="</tr>";
    }
    tbody.innerHTML=reg;
}


              
const Guardar=()=>{
    const cedula=document.getElementById("cedula").value;
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const pais=document.getElementById("pais").value;
    const departamento=document.getElementById("departamento").value;
    const ciudad=document.getElementById("ciudad").value;
    const codigoPostal=document.getElementById("codigoPostal").value;
    const email=document.getElementById("email").value
    const direccion=document.getElementById("direccion").value;
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!cedula.trim()) {
        console.log("Por favor, ingrese su cedula");
        alert("Por favor, ingrese su cedula");
        cedula.focus();
        return;
    }
    if(!nombre.trim()) {
        alert("Por favor, ingrese su nombre");
        nombre.focus();
        return;
    }

    if(!apellido.trim()) {
        alert("Por favor, ingrese su apellido");
        apellido.focus();
        return;
    }

    if(!pais.trim()) {
        alert("Por favor, ingrese un pais");
        pais.focus();
        return;
    }

    if(!departamento.trim()) {
        alert("Por favor, ingrese su departamento");
        departamento.focus();
        return;
    }

    if(!ciudad.trim()) {
        alert("Por favor, ingrese su ciudad");
        ciudad.focus();
        return;
    }

    if(!codigoPostal.trim()) {
        alert("Por favor, ingrese su codigo postal");
        codigoPostal.focus();
        return;
    }

    if(!emailRegex.test(email)){
		alert('Por favor, escriba un email valido.');
        email.focus();
		return;
	}

    if(!direccion.trim()) {
        alert("Por favor, ingrese su direccion");
        cedula.focus();
        return;
    }

    for(let i=0;i<list.length;i++){
        if(cedula == list[i].cedula){
            alert("La cedula: "+ cedula +" ya se encuentra registrada.");
            cedula.focus();
            return;
        }
        if(email == list[i].email){
            alert("El correo electrónico: "+ email +" ya se encuentra registrado.")
            email.focus();
            return;
        }
    }

    const nuevo = {cedula : cedula, nombre : nombre, apellido: apellido, pais : pais,
    departamento: departamento, ciudad: ciudad, codigoPostal : codigoPostal,
     email : email, direccion: direccion};

     list.push(nuevo);
     this.mostrar();
     document.getElementById("form").reset();

}