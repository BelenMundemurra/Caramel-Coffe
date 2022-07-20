//Pedidos de cafe y guardar todos los pedidos en un array
const pedidos = []

function shop(coffe, price) {
    let cantidad = document.getElementById("cantidad_product").value;
    let precio = 0;
    let valor = price;
    let text = document.getElementById("confirm_text");

    function calcularPrecio(valor , cantidad) {
        return (valor*cantidad);
    }
    
    precio = calcularPrecio(valor, cantidad);

    //Declarar objeto de pedidos
    class Pedidos {
        constructor(coffe, cantidad, precio) {
            this.coffe = coffe
            this.cantidad = cantidad
            this.precio = precio
        }
    }

    //Agregar pedido a la lista de pedidos
    const agregarPedidos = new Pedidos (coffe, cantidad, precio)
    pedidos.push(agregarPedidos)

    console.log(agregarPedidos);
    
    //Alerta de pedido realizado
    text.innerText = "Producto " + coffe + " agregado al carrito con éxito";

    //Almacenar informacion pedido
    const pedidoAJson = JSON.stringify(pedidos);
    //console.log(pedidoAJson);
    localStorage.setItem('1',pedidoAJson);  

}

function cart(){
    let pedidosJson = localStorage.getItem('1');
    const pedidosCart = JSON.parse(pedidosJson);

    let conteiner = document.getElementById("detail_coffe");

    //Constantes para carrito con pedidos
    const Coffe = (pedidosCart.map((element) => element.cantidad + " " + element.coffe + "\n" ));
    const Precio = (pedidosCart.map((element) => (element.precio)));

    //Precio total
    const total = Precio.reduce((acc,el) => acc + el ,0)

    //Operador Ternario para el carrito
    pedidosCart?conteiner.innerHTML = "<h3>Producto: "+Coffe+"</h3><h3>Precio total: " + total + "</h3>":conteiner.innerHTML = "<h3>El carrito esta vacio</h3>";
}

cart();
