let people = [
  {
    name: 'Jake Overall',
    firstName: 'Jake', // lowerCamelCasing
    // UpperCamelCasing AKA PascalCasing
    // snake_case for PHP and Python
    age: 37,
    isAlive: true
  },
  {
    name: 'Jake',
    firstName: 'Jake', // lowerCamelCasing
    // UpperCamelCasing AKA PascalCasing
    // snake_case for PHP and Python
    age: 23,
    isAlive: true
  }
]

let message = `you'll love ${people[0].name} as an instructor ` // string interpolation
// console.log(message)

let products = [{
  id: '11g2233',
  name: 'Boots of Skywalking',
  description: 'These boots were made for walking, and thats what youll do',
  imgUrl: 'assets/img/boots.png',
  quantity: 2
}, {
  id: '112244',
  name: 'Bone Bow',
  description: 'Ranged attacks, Stay safe use a pointed stick from afar',
  imgUrl: 'assets/img/bow.png',
  quantity: 1
}, {
  id: '112255',
  name: 'Eagles Talon',
  description: 'Fly through your enemies with this feathered edge.',
  imgUrl: 'assets/img/dagger.png',
  quantity: 1
}, {
  id: '112266',
  name: 'Horned Helm',
  description: 'A nice horned helm be careful with the color red when wearing',
  imgUrl: 'assets/img/helm.png',
  quantity: 4
}, {
  id: '112277',
  name: 'Rations',
  description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
  imgUrl: 'assets/img/ration.png',
  quantity: 10
}, {
  id: '112288',
  name: 'Mysterious Ring',
  description: 'There is probably some left over magic in this ring purchase it to identify',
  imgUrl: 'assets/img/ring.png',
  quantity: 1
}, {
  id: '112299',
  name: 'Rope',
  description: 'No adventurer is complete without a bundle of sturdy rope',
  imgUrl: 'assets/img/rope.png',
  quantity: 4
}, {
  id: '1',
  name: 'Bag of Holding',
  description: 'Where are you going to keep all of your things without a bag such as this',
  imgUrl: 'assets/img/bag.png',
  quantity: 0
}]

let cart = [] // Array aka List

// define the function
function drawProducts() {
  let template = '' // put all of the product cards

  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    // console.log(i, product)
    // Time to Fly
    template += /*html*/`
    <div class="product-card p-3">
      <img src="${product.imgUrl}" height="100" alt="">
      <h3 class="border-bottom pb-3">${product.name}</h3>
      <p>${product.description}</p>
      <button 
        class="btn btn-outline-secondary"
        onclick="test('${product.id}')"
      >Add to Cart</button>
    </div>
    `
  }

  // @ts-ignore
  document.getElementById('products').innerHTML = template

}

// invokes the function
drawProducts()



function test(productId) {
  console.log('you clicked on product', productId)

  let product = products.find(p => p.id == productId)

  console.log(product)

  cart.push(product)
  drawCartProducts()

}

function drawCartProducts() {

  let template = ''

  for (let i = 0; i < cart.length; i++) {
    let product = cart[i]
    template += /*html*/ `
    <div class="product-cart-card bg-parchment rounded mb-3 p-3 text-dark d-flex align-items-center justify-content-between">
      <img src="${product.imgUrl}" alt="" height="60">
      <h4>${product.name}</h4>
    </div>
    `
  }

  // go to the document or index.html
  // @ts-ignore
  document.getElementById('cart').innerHTML = template
}


function checkout(){
  console.log('thank you for your purchase mi lord or lady or watever')
  cart = []
  drawCartProducts()
}


