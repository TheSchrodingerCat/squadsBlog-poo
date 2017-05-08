//constructor del squad

function MiembroSquad(nombre,apellido,edad,id,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.id = id;
	this.hobbie1 = hobbie1;
	this.hobbie2 = hobbie2;
	this.hobbie3 = hobbie3;
	this.foto = "<img src='assets/imgs/avataressquad-0" + this.id + "_360.png'>";
	this.caja = "<input type='text' id='coment" + this.id + "'>"; //aca se ingresa el comentario
	/*this.boton = function(){
		miembros = document.getElementById(this.id.toString());
		var botoncito = document.createElement("button");
		var lectura = document.createTextNode("Dejar Comentario");
		botoncito.appendChild(lectura);
		miembros.appendChild(botoncito);
	}*/
	this.boton = "<button id='id" + this.id + /*"' onclick='" + test(this.id) +*/ "'>Dejar Comentario</button>"; //boton dejar comentario
}

var lista = new Array(9);
lista[0] = new MiembroSquad("Camila","Saez",24,"0","Ver pinterest","Viajar","Ser darks");
lista[1] = new MiembroSquad("Antonia","Cerda",23,"1","Diseñar","Ver series","Lettering");
lista[2] = new MiembroSquad("Carolina","Tapia",27,"2","Trekking","Leer","Tejer");
lista[3] = new MiembroSquad("María José","Rodriguez",32,"3","Ver series","Bailar","Leer");
lista[4] = new MiembroSquad("María José","Pozo",31,"4","Bailar","Comer","Dormir");
lista[5] = new MiembroSquad("Francisca","Ojeda",28,"5","Roller derby", "Lettering", "Juegos de mesa");
lista[6] = new MiembroSquad("Valentina","Saavedra",26,"6","Medicina autogestiva","Hacer magias","Hacerse tatuajes");
lista[7] = new MiembroSquad("Marion","Castillo",29,"7","Caminar","Hacer series","Pintar");
lista[8] = new MiembroSquad("Belén","Recabal",27,"8","Andar en bici","Ver series","Bullying");

lista.forEach(function(element){
	var miembros = document.getElementById(lista.indexOf(element).toString());
	//var coment = element.caja;
	//var nuevoComentario = new Comentario(miembros,coment.value);
	miembros.innerHTML = (element.foto +"<br><b>Nombre: </b>" + element.nombre + "<br><b>Apellido: </b>" + element.apellido + 
	"<br><b>Edad: </b>" + element.edad + "<br><b>Hobbies: </b>" + "<ul>" + "<li>" + element.hobbie1 + "</li>" + 
	"<li>" + element.hobbie2 + "</li>" + "<li>" + element.hobbie3 + "</li>" + "</ul>" + element.caja +
	 "<br>" + element.boton /*"<button id='id" + element.id + "' onclick='" + test(element.id) + "'>Dejar Comentario</button>" element.boton()+ "<br>" + nuevoComentario.comentario + 
	 "<div id='btn'><a href='#' onclick='sumar()'><i class='fa fa-heart' aria-hidden='true'></i></a></div>"*/);
});

//aca no he hecho nada
function Comentario(id_miembro,comentario){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	var contador=0;
	this.likes = function sumar(){ 
		contador++;
		return contador;
	};
	this.botonLike = "<div id='btn'><a href='#' onclick='sumar()'><i class='fa fa-heart' aria-hidden='true'></i></a></div>";
}


function test(valor){
	var miembro = document.getElementById(valor.toString());
	var valorInput = lista[miembro.id].caja.value;
	var nuevoComentario = new Comentario(miembro.id,"holi"); //miembro.id me devuelve el valor del id
	console.log(nuevoComentario.id_miembro)
	console.log(nuevoComentario.comentario)
	var space = document.createElement("div");
	space.setAttribute("id","div"+valor.toString());
	var coment = document.createTextNode(nuevoComentario.comentario);
	
	space.appendChild(coment);
	miembro.appendChild(space);

	console.log(miembro)

}
//test(0)

var botoncito = document.getElementById("id0");
botoncito.addEventListener("click", function(){
    var divNueva = document.getElementById("div0");
    divNueva.innerHTML = test(0);
});

//enlace.setAttribute("onclick", "editTask(this, " + task.id + ")");


