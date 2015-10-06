	
//ADD AN ITEM TO THE CART

// set an event listener to the create button
$(document).on('click', '#new-item-create', function addItemsToCart(){

//retrieve the inner HTML of #new-item-name and #new-item-unit-price
	var item = $('input#new-item-name').text();
	var price = $('input#new-item-unit-price').text();

// store this key(item) value(price) pair to an object 

 	function shoppingCart(item, price) {
      this.item = item;
      this.price = price;
    }

    var purchase1 = new shoppingCart(item, price);

//append the new object to 'div.item row'
	$('item').appendTo('item-name col-xs-4');
	$('price').appendTo('item-price col-xs-3');

})

//CALCULATE COST BASED ON QUANTITY

//change the number in the value attribute
$(document).on('click', 'input.quantity', function itemCost(){
	var &qty = $('input.quantity').attr("value");
	qty = $('input.quantity').text();

//function to calculate cost * quantity
//show answer in 'div.item-subtotal col-xs-2' text()
	var cost = price * qty
	$('div.item-subtotal col-xs-2').text('cost');
})


//CALCULATE TOTAL SHOPPING CART COST

//retieve cost for each item and sum
//make a click function for calculate button

$(document).on('click', '#calculate', function totalCost() {
	total = 0
	for (var i = 0; i < price.length; i++) {
		total += i;	
	}
	$('h1#totalprice').text('total');
})



