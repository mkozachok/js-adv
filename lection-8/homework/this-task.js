/*
    Написати ланцюжок викликів.
    Завдання на використання this.
    Дописати реалызацыю методів, щоб можна було працювати з обєктом, як наведено нижче.
*/
var yaponohata = {
    sushi: 0,
    wasabi: 0,
    addOneSushi: function() {},
    removeOneSushi: function() {},
    addOneWasabi: function() {},
    removeOneWasabi: function() {},
    cancelOrder: function() {},
    showOrder: function() {}
}

yaponohata.addOneSushi().addOneWasabi().addOneSushi().showOrder(); // Your order is - sushi: 2, waasabi: 1
yaponohata.addOneSushi().showOrder(); // Your order is - sushi: 1
yaponohata.addOneSushi().addOneWasabi().cancelOrder(); // Nothing to show