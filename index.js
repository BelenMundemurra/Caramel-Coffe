//Pedidos de cafe y guardar todos los pedidos en un array
const pedidos = []

function shop(coffe, price) {
    while (true) {
        var combo = confirm("Desea realizar un pedido de " + coffe + "?");
    
        if (combo) {
            let cantidad = parseFloat(prompt("Ingrese cantidad de " + coffe + " a llevar"));
            let nombre = prompt("Ingrese su nombre");
            let precio = 0;
            let valor = price;
            
            function calcularPrecio(valor , cantidad) {
                return (valor*cantidad);
            }
            
            precio = calcularPrecio(valor, cantidad);

            //Resumen de compra
            alert("Resumen de compra \nCliente: " + nombre + "\nProducto: " + coffe + "\nCantiad: " + cantidad + "\nPrecio Final: $" + precio);
    
            //Declarar objeto de pedidos
            class Pedidos {
                constructor(nombre, coffe, cantidad, precio) {
                    this.nombre = nombre
                    this.coffe = coffe
                    this.cantidad = cantidad
                    this.precio = precio
                }
            }

            //Agregar pedido a la lista de pedidos
            const agregarPedidos = new Pedidos (nombre, coffe, cantidad, precio)
            pedidos.push(agregarPedidos)

            //Realizar otro pedido
            var repuesta = confirm("Desea realizar otro pedido?");
    
            if (!repuesta) {
                break;
            } 
            
        } else {
            break;
        }
    }
    
    //Ver pedidos en la consola
    console.log(pedidos);
}

function cart(){
    const Coffe = (pedidos.map((element) => element.cantidad + " " + element.coffe + "\n" ));
    const Precio = (pedidos.map((element) => (element.precio)));
    let total = 0;

    for (let i = 0; i < Precio.length; i++) {
        total += Precio[i];
    }

    alert("Resumen de compra:\n" + Coffe +"\n Precio Total: \n" + total);
}