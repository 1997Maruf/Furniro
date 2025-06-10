const products = document.getElementsByClassName('product');

for (let product of products) {
  const buttonDiv = product.getElementsByTagName('div')[0];

  product.addEventListener('mouseenter', () => {
    buttonDiv.className = 'block';
  });

  product.addEventListener('mouseleave', () => {
    buttonDiv.className = 'hidden';
  });
}