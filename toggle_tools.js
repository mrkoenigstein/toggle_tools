/**
 * Copyright (c) 2016 Christian Schulze
 * Licensed under the MIT license
 *
 */
(function ($) {
    "use strict";

    $.fn.toggleCheckbox = function(childclass){
        var that = $(this);
        var childSelector = 'input' + childclass;
        
        if(that.is('input') === false){
            console.log('toggle: element is not a imput element');
            return;
        }else{
            var type = that.attr('type');
            if(type !== 'checkbox'){
                console.log('toggle: element is not a imput element with type checkbox');
            }
        }
        $(that).on('click', function(){
            var state = $(that).prop( "checked" );
            toggleAll(state, childSelector);
        });
      
        $(document).on('click', childSelector, function(){
            reverseToggle(that, childSelector);
        });
    }
    
    /**
     * function to toggle all checkbox with an all-checkbox
     * 
     * @param checked - If the all-checkbox is checked (true or false)
     * @param selector - The selector of the child checkboxe which you all want to check or uncheck
     */
    function toggleAll(checked, selector){
        if (checked === true) {
            $(selector).prop('checked', true)
        }
        else {
            $(selector).prop('checked', false);
        }
    }
    
    /**
     * function to reverse the all-checkbox state. You uncheck a child and the all-checkbox is also unchecked
     * 
     * @param allSelector - The state of the all-checkbox
     * @param childSelector - The selector of the child checkboxe which you all want to check or uncheck
     */
    function reverseToggle(allSelector, childSelector){
        var allchecked = true;
        jQuery(childSelector).each(function () {
            var checked = $(this).prop( "checked" );
            if(checked !== true){
                $(allSelector).prop('checked', false);
                allchecked = false;
                return;
            }
        });
        if(allchecked === true){
            $(allSelector).prop('checked', true);
        }
    }
}( jQuery ));