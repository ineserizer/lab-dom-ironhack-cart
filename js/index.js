// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price*quantity
  let subtotalLocation = product.querySelector('.subtotal span');
  subtotalLocation.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const newProduct = document.getElementsByClassName('product');
  const total = document.querySelector('#total-value span');
  let totalAcc = 0; 
  for (let i=0; i<newProduct.length; i++){
    totalAcc += updateSubtotal(newProduct[i]);
  }
  total.innerHTML = totalAcc;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  targetParent = target.parentNode.parentNode.parentNode;
  row = target.parentNode.parentNode;
  targetParent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input').value;
  const productPrice = document.querySelectorAll('.create-product input')[1].value;
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  document.querySelector('tbody').appendChild(newRow);
  const newProductRow = `<tr class="product"></tr><td class="name"><span>${productName}</span></td><td class="price">$<span>${productPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>`;
  newRow.innerHTML = newProductRow;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName("btn-remove");
  for (let btn of removeBtn) {
    btn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});