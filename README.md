###bootstrap-switch - Meteor Smart Package

This is a the [bootstrap switch jquery plugin](https://github.com/nostalgiaz/bootstrap-switch) as a meteor smart package.

###How to use?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt install bootstrap-switch`

Unlike the original documentation, you must invoke the switches in your appropriate `Template.name.rendered` callback:

    $('.switch')['switch']();
    
Make sure you call it like this because `switch` is a reserved word in IE.
