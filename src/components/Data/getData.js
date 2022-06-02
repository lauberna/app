
const productos = [
    {
        name: 'Bicicleta 1',
        categories: 'bicicletas',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '1',
        initial: '1',
        cant:''

    },
    {
        name: 'Bicicleta 2',
        categories: 'bicicletas',
        price: 2000,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 13,
        id: '2',
        initial: '1', 
        cant:''   
    },
    {
        name: 'Indumentaria 1',
        categories: 'indumentaria',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '3',   
        initial: '1', 
        cant:''
    },
    {
        name: 'Indumentaria 2',
        categories: 'indumentaria',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 3,
        id: '4',   
        initial: '1', 
        cant:''
    },

]

export const getData = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const query = id ? productos.find(producto => producto.id === id) : productos
            resolve(query)
        })
    })
}