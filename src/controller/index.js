function getProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responsetype: 'JSON'

  });
  promise.then(result => {
    renderProduct(result.data.content);
  })

    ;
  promise.catch(err => {
    console.log(err)
  });
}


function renderProduct(arrProduct) {
  let content = '';
  for (let i = 0; i < arrProduct.length; i++) {
    let product = arrProduct[i]
    content += `
        <div class="col- 12 col-md-4 mb-4" >
          <div class="card"  ">
            <img src="${product.image}" class="m-auto" />
            <div class="card-body ">
              <h6 >${product.name}</h6>
              <p >${product.shortDescription}</p>
              <div class="row card__compon">
                <div class="card__item">
                  <a href="./detail.html?id=${product.id}" class="card__btn">Buy now</a>
                </div>
                <div class="card__item card__item-text">
                  <span>${product.price}$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        `
  }
  document.querySelector("#renderproduct").innerHTML = content;

}
getProduct();