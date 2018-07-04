const productos = [];

class Producto { 
    mostrar(){
        this.resultado ="";
	  	productos.forEach((value)=> {	  			
  			this.resultado += `<li>${value}</li>`;
			});
		console.log(productos)
	    return this.resultado;
  }
    //querySelector es similar a getElementById
    agregar(){
        this.producto = document.querySelector("#producto").value;
		if(this.producto.length >= 4 ){
			this.encontrado = productos.find((element)=> element === this.producto);
			//Si lo encuentra, this.encontrado tiene lo mismo que this.producto
			if(this.encontrado !== this.producto){	
				productos.push(this.producto);			
				document.querySelector("#mensaje").innerHTML= `<p class="green">Agegado el elemento ${this.producto}<p>`;				
				document.querySelector("#producto").value = "";
			}
			else{
				document.querySelector("#mensaje").innerHTML= `<p class="red">El elemento ${this.producto} ya existia<p>`;					
			}
		}
		else{
			document.querySelector("#mensaje").innerHTML= `<p class="red">El elemento ${this.producto} debe tener al menos 4 caracteres<p>`;	
		}

		return this.mostrar();

  }

    deshacer(){
        if(productos.length == 0){
            document.querySelector("#mensaje").innerHTML= `<p class="red">El array esta vacio<p>`;
            return null;
        }else{
            this.quitado = productos.pop();
		    document.querySelector("#mensaje").innerHTML= `<p class="red">Quitado el elemento ${this.quitado}<p>`;
            return this.mostrar();
        }

       
        
    
  }
    modificar(){
    //Al hacer click en el elemento e la lista se abre un nuevo input text y button. Coloca el valor del elemento en el input text y genera un input type hidden con la posición del array para sobre escribirlo. Se podría ocultar el alta para que no se de de alta algo mientras se hace esto y tendría que tener un botón de volver al alta.
    }
}

document.querySelector("#agregar").addEventListener('click', () => {		
    let prod = new Producto;  
    document.querySelector("#resultado").innerHTML= prod.agregar();		
});

document.querySelector("#deshacer").addEventListener('click', () => {		
    let prod = new Producto;  
    document.querySelector("#resultado").innerHTML= prod.deshacer();		
});