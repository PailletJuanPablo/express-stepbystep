
const allProducts = [

    {
        id: 1,
        name: 'Producto 1',
        category: 'mouses',
    },

    {
        id: 2,
        name: 'Producto 2',
        category: 'monitores',
    },

    {
        id: 3,
        name: 'Producto 3',
        category: 'mouses',
    },

    {
        id: 4,
        name: 'Producto 4',
        category: 'monitores',
    },
]

module.exports = {

    // Métodos encargados de centralizar la lógica
    // Renderizar una vista con los datos resultantes de este proceso
    mouses(req, res) {
        // Filter me permite filtrar un array
        const mouses = allProducts.filter(product => product.category == 'mouses');
        // objeto.productsToShow
        // objeto.titulo
        // armo la estructura de datos para enviar a la vista
        const dataToSendToView = {
            productsToShow: mouses,
            title: 'Listado de mouses'
        }
        return res.render('products/index', dataToSendToView);
    },

    monitores(req, res) {
        // Filter me permite filtrar un array
        const monitores = allProducts.filter(product => product.category == 'monitores');
        // objeto.productsToShow
        // objeto.titulo
        // armo la estructura de datos para enviar a la vista
        const dataToSendToView = {
            productsToShow: monitores,
            title: 'Listado de monitores'
        }
        return res.render('products/index', dataToSendToView);
    },


    teclados(req, res) {
        // Filter me permite filtrar un array
        const teclados = allProducts.filter(product => product.category == 'teclados');
        // objeto.productsToShow
        // objeto.titulo
        // armo la estructura de datos para enviar a la vista
        const dataToSendToView = {
            productsToShow: teclados,
            title: 'Listado de teclados'
        }
        return res.render('products/index', dataToSendToView);
    },



};