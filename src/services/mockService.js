const database = [
    {
        id: 1,
        img: "/imgs/hombre-1.jpg",
        title: "Lentes hombre",
        price: 4500,
        detail: "Lentes de sol para hombre",
    },
    {
        id: 2,
        img: "/imgs/hombre-1.jpg",
        title: "Lentes hombre",
        price: 4000,
        detail: "Lentes de sol para hombre",
    },
    {
        id: 3,
        img: "/imgs/mujer-1.jpg",
        title: "Lentes mujer",
        price: 5000,
        detail: "Lentes de sol para mujer",
    },
    {
        id: 4,
        img: "/imgs/mujer-1.jpg",
        title: "Lentes mujer",
        price: 5000,
        detail: "Lentes de sol para mujer",
    },
    {
        id: 5,
        img: "/imgs/niños-1.jpg",
        title: "lentes niños",
        price: 3000,
        detail: "Lentes para niños",
    },
    {
        id: 6,
        img: "/imgs/niños-1.jpg",
        title: "lentes niños",
        price: 2500,
        detail: "Lentes para niños",
    },
];

const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(database);
        }, 2000);
    });
};

const getListaProductos = (idURL) => {
    return new Promise((resolve, reject) => {
        const reqItem = database.find((item) => {
            return item.id === parseInt(idURL);
        });

        setTimeout(() => {
            if (reqItem) resolve(reqItem);
            else reject("No se encontró el producto");
        }, 2000);
    });
};

const getProductByDetail = (itemId) => {
    return new Promise((resolve, reject) => {

        let reqItems = database.filter((item) => { 
            return item.id === parseInt(itemId)
        });
        
        setTimeout(() => {
            resolve(reqItems[0]);
        }, 2000);
    });
};

export default obtenerProductos;

export { getListaProductos, getProductByDetail };