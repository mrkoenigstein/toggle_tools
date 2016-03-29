/**
 * Copyright (c) 2016 Christian Schulze
 * Licensed under the MIT license
 *
 */
(function () {
    "use strict";
    
    /**
     * function to toggle all checkbox with an all-checkbox
     * 
     * @param state - The state of the all-checkbox (checked or undefined)
     * @param selector - The selector of the child checkboxe which you all want to check or uncheck
     */
    function toggleAll(state, selector){
        if (state === 'checked') {
            jQuery(selector).attr('checked', 'checked');
        }
        else {
            jQuery(selector).removeAttr('checked');
        }
    }
    
    /**
     * function to reverse the all-checkbox state. You uncheck a child and the all-checkbox is also unchecked
     * 
     * @param allSelector - The state of the all-checkbox
     * @param childSelector - The selector of the child checkboxe which you all want to check or uncheck
     */
    function reverseToggle(allSelector, childSelector){
        jQuery(childSelector).each(function () {
            var state = jQuery(this).attr('checked');
            if(state !== 'checked'){
                jQuery(allSelector).removeAttr('checked');
                return;
            }
        });
    }
    
    window.toggleAll = toggleAll;
    window.reverseToggle = reverseToggle;
});