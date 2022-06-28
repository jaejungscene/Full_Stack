axios
  .get("https://ecfd1ca3-5759-43ab-802e-43e743c81c63.mock.pstmn.io/products")
  .then((result) => {
    console.log("정상 실행\n", result);
    const products = result.data.products;
    let productsHtml = "";
    for (var i = 0; i < products.length; i++) {
      productsHtml =
        productsHtml +
        '<div class="product-card">' +
        "<div>" +
        '<img class="product-img" src="' +
        products[i].imageUrl +
        '"/>' +
        "</div>" +
        '<div class="product-contents">' +
        '<span class="product-name">' +
        products[i].name +
        "</span>" +
        '<span class="product-price">' +
        products[i].price +
        "원</span>" +
        '<div class="product-seller">' +
        '<img class="product-avatar" src="images/icons/avatar.png"/>' +
        "<span>" +
        products[i].seller +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    document.querySelector("#product-list").innerHTML = productsHtml;
  })
  .catch((error) => {
    console.log("error 발생\n", error);
  });

// var products = [{
//   name:'농구공',
//   price: 100000,
//   seller: '조던',
//   imageUrl: './images/products/basketball1.jpeg'
// }, {
//   name:'축구공',
//   price: 50000,
//   seller: '메시',
//   imageUrl: './images/products/soccerball1.jpg'
// }, {
//   name:'키보드',
//   price: 10000,
//   seller: '그랩',
//   imageUrl: './images/products/keyboard1.jpg'
// }];

// let productsHtml = '';
// for(var i=0; i<products.length; i++){
//   productsHtml =
//     productsHtml +
//     '<div class="product-card">'+
//       '<div>'+
//         '<img class="product-img" src="'+ products[i].imageUrl + '"/>'+
//       '</div>'+
//       '<div class="product-contents">'+
//         '<span class="product-name">' + products[i].name + '</span>'+
//         '<span class="product-price">'+ products[i].price +'원</span>'+
//         '<div class="product-seller">'+
//           '<img class="product-avatar" src="images/icons/avatar.png"/>'+
//           '<span>'+ products[i].seller +'</span>'+
//         '</div>'+
//       '</div>'+
//     '</div>';
// }
// document.querySelector("#product-list").innerHTML = productsHtml;
