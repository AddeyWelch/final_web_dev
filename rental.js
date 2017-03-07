// $(document).ready(function() {
//   function addToCart(name) {
//     alert(name)
//   }
// }

var Prices = {
    Castle: 100,
    Sports: 100
};

function addToCart(bouncer_name) {
    var price = Number(Prices[bouncer_name]);
    var total = Number($("#total").text());
    total += price;
    $("#total").text(total);
    var quan_id = "#" + bouncer_name;
    var quantity = Number($(quan_id).text());
    quantity++;
    $(quan_id).text(quantity);
    alert(bouncer_name + ' Bouncer was added to the cart for $' + price);
}
