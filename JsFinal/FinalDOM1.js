let product ={
    productID: 'M01',
    productName: 'Malibu night',
    productDesc:'Bottle of sea',
    price: 2400
};
const divProductsElement = document.querySelector('#products')

const divProductsElementCreate = document.createElement('div');
divProductsElementCreate.setAttribute('id',product.productID);

const pProductIdElement = document.createElement('p');
pProductIdElement.setAttribute('style','color:green');
pProductIdElement.textContent= 'Product Id:'+ product.productID;
// pProductIdElement.setAttribute('id',product.productID)
divProductsElementCreate.appendChild(pProductIdElement);

const pProductNameElement = document.createElement('p');
pProductNameElement.textContent = 'Product Name:'+ product.productName;
divProductsElementCreate.appendChild(pProductNameElement);

const pProductPriceElement = document.createElement('p');  
pProductPriceElement.textContent = 'Price:' + product.price;

divProductsElementCreate.appendChild(pProductPriceElement);
divProductsElement.appendChild(divProductsElementCreate);

