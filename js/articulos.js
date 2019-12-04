// array de articulos
var arrayArticulos = [
    {
        "idArticulo": "3",
        "idArticuloCategoria": "3",
        "idArticuloSubcategoria": "1",
        "fechaArticulo": "04/12/209 17:01",
        "categoriaArticulo": "vida social",
        "subcategoriaArticulo": "noticias",
        "tituloArticulo": "Encuentran enfermos de tuberculosis en Bilbao",
        "cuerpoArticulo": "<article class=\"index-ultimas-noticias-articulo\"><hr><h3><span>04/12/2019 <small>17:01</small><br><span>Vida Social</span><br><span>Noticias</span></span>Encuentran enfermos de tuberculosis en Bilbao</h3><hr><img class=\"index-ultimas-noticias-articulo-img\" src=\"https://picsum.photos/id/10/900/300\" alt=\"perro\"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur, sint ex atque totamducimus voluptatibus, est eius tenetur voluptates ea nobis ad itaque non iusto aspernatur reiciendisexercitationem cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur tempora ratione,molestias dolores quos voluptatem sequi aliquid perspiciatis veritatis inventore quidem saepe dicta,magnam in. Reiciendis voluptates dolores autem?</p><span class=\"autor\">&copy; www.ricardofranco.eu</span></article>"
    },
    {
        "idArticulo": "2",
        "idArticuloCategoria": "2",
        "idArticuloSubcategoria": "1",
        "fechaArticulo": "04/12/2019 17:02",
        "categoriaArticulo": "vida social",
        "subcategoriaArticulo": "medicina",
        "tituloArticulo": "Ricardo Franco mejor doctor de la década",
        "cuerpoArticulo": "<article class=\"index-ultimas-noticias-articulo\"><hr><h3><span>04/12/2019 <small>17:02</small><br><span>Vida Social</span><br><span>Medicina</span></span>Ricardo Franco, mejor doctor de la década</h3><hr><img class=\"index-ultimas-noticias-articulo-img\" src=\"https://picsum.photos/id/237/900/300\" alt=\"perro\"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur, sint ex atque totamducimus voluptatibus, est eius tenetur voluptates ea nobis ad itaque non iusto aspernatur reiciendisexercitationem cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur tempora ratione,molestias dolores quos voluptatem sequi aliquid perspiciatis veritatis inventore quidem saepe dicta,magnam in. Reiciendis voluptates dolores autem?</p><span class=\"autor\">&copy; www.ricardofranco.eu</span></article>"
    },
    {
        "idArticulo": "1",
        "idArticuloCategoria": "1",
        "idArticuloSubcategoria": "1",
        "fechaArticulo": "04/12/2019 17:03",
        "categoriaArticulo": "vida social",
        "subcategoriaArticulo": "mis amigos artistas",
        "tituloArticulo": "Estrenan película en el Teatro Arriaga",
        "cuerpoArticulo": "<article class=\"index-ultimas-noticias-articulo\"><hr><h3><span>04/12/2019 <small>17:03</small><br><span>Vida Social</span><br><span>Mis a. artistas</span></span>Estrenan película en el Teatro Arriaga</h3><hr><img class=\"index-ultimas-noticias-articulo-img\" src=\"https://picsum.photos/id/1005/900/300\" alt=\"perro\"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur, sint ex atque totamducimus voluptatibus, est eius tenetur voluptates ea nobis ad itaque non iusto aspernatur reiciendisexercitationem cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur tempora ratione,molestias dolores quos voluptatem sequi aliquid perspiciatis veritatis inventore quidem saepe dicta,magnam in. Reiciendis voluptates dolores autem?</p><span class=\"autor\">&copy; www.ricardofranco.eu</span></article>"
    }
];

// pintar ultimas noticias
const indexUltimasNoticias = document.getElementById("ultimasNoticias");
arrayArticulos.forEach(articulo => {
    indexUltimasNoticias.innerHTML += articulo.cuerpoArticulo;
});

