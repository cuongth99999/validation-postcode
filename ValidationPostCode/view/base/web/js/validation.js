define([
    'jquery',
    'jquery/validate',
    'mage/translate'
], function($) {
    'use strict';

    return function() {
        // Add a validation method that checks if the name is less than 5 characters.
        $.validator.addMethod(
            'custom-validate-length',
            function(name) {
                return name.length <= 5;
            },
            $.mage.__('Length must not be greater than 5 character length!')
        );
        // Add a validation method that checks if the zip code is five-digit or
        // nine-digit(ZIP+4format).
        $.validator.addMethod(
            'custom-validate-zip',
            function(zip) {
                return /^[0-9]{5}(?:-[0-9]{4})?$/g.test(zip);
            },
            $.mage.__('Mày nhập mã zip sai!')
        );
    }
});
