var app = angular.module('eCommerceApp', []);

app.controller('CartController', function() {
    var cartCtrl = this;

    cartCtrl.products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 15 },
        { name: 'Product 3', price: 20 }
    ];

    cartCtrl.cartItems = [];

    cartCtrl.addToCart = function(product) {
        cartCtrl.cartItems.push(angular.copy(product));
    };

    cartCtrl.removeFromCart = function(item) {
        var index = cartCtrl.cartItems.indexOf(item);
        if (index !== -1) {
            cartCtrl.cartItems.splice(index, 1);
        }
    };

    cartCtrl.getTotal = function() {
        var total = 0;
        angular.forEach(cartCtrl.cartItems, function(item) {
            total += item.price;
        });
        return total;
    };
});
