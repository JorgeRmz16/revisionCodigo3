// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaProductos = document.getElementById("lista-de-productos");
const inputHTML = document.querySelector('input[type="text"]');
const botonDeFiltro = document.getElementById("filtrarbtn");

for (let i = 0; i < productos.length; i++) {
  const documentDiv = document.createElement("div");
  documentDiv.classList.add("producto");

  const titleDiv = document.createElement("p");
  titleDiv.classList.add("titulo");
  titleDiv.textContent = productos[i].nombre;

  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  documentDiv.appendChild(imagen);
  documentDiv.appendChild(titleDiv);

  listaProductos.appendChild(documentDiv);
}

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = inputHTML.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const documentDiv = document.createElement("div");
    documentDiv.classList.add("producto");

    const title = document.createElement("p");
    title.classList.add("titulo");
    title.textContent = productosFiltrados[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    documentDiv.appendChild(title);
    documentDiv.appendChild(imagen);

    listaProductos.appendChild(documentDiv);
  }
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};
