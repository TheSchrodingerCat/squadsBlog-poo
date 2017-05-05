//constructor del squad

function MiembroSquad(nombre,apellido,edad,id,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.id = id;
	this.hobbie1 = hobbie1;
	this.hobbie2 = hobbie2;
	this.hobbie3 = hobbie3;
	//this.foto = foto;
	this.caja = "<input type='text' id='boton" + this.id + "'>"; //aca se ingresa el comentario
	this.boton = "<button id='" + this.id + "' onclick='" + /*nuevoComentario.likes() +*/ "'>Dejar Comentario</button>"; //boton dejar comentario
}

//aca no he hecho nada
function Comentario(id_miembro,comentario,likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.likes = function(){
		var contador = 0;
		return (contador + 1);
	};
	this.botonLike = "<button onclick='" + this.likes() + "'></button>";
}


var lista = new Array(8);
lista[0] = new MiembroSquad("Camila","Saez",24,1,"ver pinterest","viajar","ser darks");
lista[1] = new MiembroSquad("Antonia","Cerda",23,2,"diseñar","ver series","dfkjhg");
lista[2] = new MiembroSquad("Carolina","Tapia",27,3,"trekking","djgf","fkldg");
lista[3] = new MiembroSquad("María José","Rodriguez",32,4,"ver series","ldfkhg","sdfg");
lista[4] = new MiembroSquad("María José","Pozo",5,31,"bailar","comer","dormir");
lista[5] = new MiembroSquad("Francisca","Ojeda",28,6,"rollerderby","dskgjh","sdlkgh");
lista[6] = new MiembroSquad("Valentina","Saavedra",26,7,"medicina autogestiva","dlskfgh","dlfkg");
lista[7] = new MiembroSquad("Marion","Castillo",29,8,"caminar","fdlsgj","dflkg");

//esto no me funciona
var miembro = document.getElementById("miembro0");
var member = document.getElementById("m0");
var coment = lista[0].caja.value;
var nuevoComentario = new Comentario(miembro,coment);
miembro.innerHTML = nuevoComentario.coment;


lista.forEach(function(element){
	var miembros = document.getElementById("miembro" + lista.indexOf(element).toString());
	miembros.innerHTML = ("<b>Nombre: </b>" + element.nombre + "<br><b>Apellido: </b>" + element.apellido + 
	"<br><b>Edad: </b>" + element.edad + "<br><b>Hobbies: </b>" + "<ul>" + "<li>" + element.hobbie1 + "</li>" + 
	"<li>" + element.hobbie2 + "</li>" + "<li>" + element.hobbie3 + "</li>" + "</ul>" + element.caja +
	 "<br>" + element.boton);
});

