// -----product name-----

  function getAPIDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get('id');

    console.log(myParams);
    
    var promise = axios({
      url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParams}`,
      method:'GET',
      ResponseType:'JSON',
    });

    promise.then(function(result){
      console.log(result.data.content);

      renderDetail(result.data.content,"data_carousel_detail")
    });

    promise.catch(function(err){
      console.log(err);
    });
  }

  function renderDetail(product,id){

    var contentHTML =`
            <div class="imgProduct col-4">
                    <img src="${product.image}" alt="" class="img-fluid">
                </div>
                <div class="contentProduct col-8">
                    <h1>${product.name}</h1>
                    <p>${product.description}</p>
                    <h3>Available size </h3>
                    <ul class="size">
                        <li>${product.size[0]}</li>
                        <li>${product.size[1]}</li>
                        <li>${product.size[2]}</li>
                        <li>${product.size[3]}</li>
                        <li>${product.size[4]}</li>
                        <li>${product.size[5]}</li>
                        <li>${product.size[6]}</li>
                    </ul>
                    <h2>${product.price}$</h2>
                    <div class="addToCart">
                    <button><span>+</span></button>
                    <p>1</p>
                    <button><span>-</span></button>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
            `
    document.getElementById(id).innerHTML=contentHTML;
  }
  
  window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get('productid');
    console.log(myParams);
    getAPIDetail();
  }


// ---Realate Product--- 

 function getProduct() {
     let promise = axios({
       url: "https://shop.cyberlearn.vn/api/Product",
       method: "GET",
       responsetype: 'JSON',
  
     });
     promise.then(result => {
         detailProduct(result.data.content);
    })
  
       ;
    promise.catch(err => {
       console.log(err)
     });
  }
  
  
  function detailProduct(arrProduct) {
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
    document.querySelector("#detailProduct").innerHTML = content;
  
  }
  getProduct();

  