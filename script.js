function Vehichulo(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.mostrarPrecio = function() {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(this.precio);
    }
}

function Auto(marca, modelo, puertas, precio) {
    Vehichulo.call(this, marca, modelo, precio);
    this.puertas = puertas;
    this.mostrar = function() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.marca} // Puertas: ${this.puertas} // Precio: ${this.mostrarPrecio()}`);
    }
}
function Moto(marca, modelo, cilindrada, precio) {
    Vehichulo.call(this, marca, modelo, precio);
    this.cilindrada = cilindrada;
    this.mostrar = function() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.marca} // Cilindrada: ${this.cilindrada} // Precio: ${this.mostrarPrecio()}`);
    }
}

function Maximo(array) {
    let maximo = 0;
    let indice;
    array.forEach(function(element, index) {
        if(maximo < element.precio) {
            maximo = element.precio;
            indice = index;
        }
    })
    console.log(`Vehículo mas caro: ${array[indice].marca} ${array[indice].modelo}`)
}

function Minimo(array) {
    let minimo = array[0].precio;
    let indice = 0;
    array.forEach(function(element, index) {
        if(minimo > element.precio) {
            minimo = element.precio;
            indice = index
        }
    })
    console.log(`Vehículo mas barato: ${array[indice].marca} ${array[indice].modelo}`)
}

function BuscarLetraEnModelo(array, letra) {
    
    array.forEach(function(element){
        if(element.marca.indexOf(letra) > -1){
            console.log(`Vehículo que contiene en el modelo la letra '${letra}': ${element.marca} ${element.modelo} $${element.mostrarPrecio()}`);
        }
    }) 
}

function OrdenMayorMenorPrecio(array) {
    let arrayOrdenado = array.slice()
    arrayOrdenado.sort((a, b) => {
        if(a.precio > b.precio){
            return -1;
        } else {
            return 1;
        }
    })
    console.log('Vehículos ordenados por precio de mayor a menor:');
    arrayOrdenado.forEach(element => {
        console.log(`${element.marca} ${element.modelo}`);
    })
}

function separador() {
    console.log('=============================');
}

var vehiculos = [
    new Auto('Peugeot', '206', 4, 200000),
    new Moto('Honda', 'Titan', 125, 60000),
    new Auto('Peugeot', '208', 5, 250000),
    new Moto('Yamaha', 'YBR', 160, 80500.5)
];

vehiculos.forEach(element => element.mostrar());

separador();

Maximo(vehiculos);
Minimo(vehiculos);
BuscarLetraEnModelo(vehiculos, 'Y')

separador();

OrdenMayorMenorPrecio(vehiculos);