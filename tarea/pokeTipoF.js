let pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]
   var str= new String ( pokemones);
   if(tipo=="Fuego"){
    console.log("fuego")
   }

   //document.write(str);
   //console.log(str)
  
   //var cadena = new String(); 
   //cadena = cadena; 
   //document.write(cadena); 
   var array=["1 de espadas","2 de espadas", "3 de espadas"];

function paloDeTruco(carta){
  return pokemones.filter(element => {
     return element.includes(carta);
  });
}

console.log(paloDeTruco("Fuego"));