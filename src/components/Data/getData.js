
const productos = [
    {
        name: 'Bicicleta 1',
        categories: 'bicicletas',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '1',    
    },
    {
        name: 'Bicicleta 2',
        categories: 'bicicletas',
        price: 2000,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 13,
        id: '2',    
    },
    {
        name: 'Bicicleta 3',
        categories: 'bicicletas',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '3',    
    },
    {
        name: 'Bicicleta 4',
        categories: 'bicicletas',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '4',    
    },
    {
        name: 'Bicicleta 5',
        categories: 'bicicletas',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '5',    
    },
    {
        name: 'Indumentaria 1',
        categories: 'indumentaria',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '6',    
    },
    {
        name: 'Indumentaria 2',
        categories: 'indumentaria',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 3,
        id: '7',    
    },
    {
        name: 'Indumentaria 3',
        categories: 'indumentaria',
        price: 200,
        img: '',
        description:'La Procaliber 9.5 es una bicicleta rígida de carbono ligera con la ventaja exclusiva de nuestra rótula IsoSpeed que absorbe los baches de los senderos. Se trata del modelo de carbono más económico de toda la gama de montaña Procaliber, y está diseñado para ofrecer velocidad y eficiencia en los singletracks gracias a su transmisión Shimano Deore 1x12 con una amplia relación de desarrollos, a la horquilla RockShox Judy SL y a las rápidas ruedas 29er.',    
        stock: 10,
        id: '8',    
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