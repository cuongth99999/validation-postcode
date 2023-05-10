define([
    'jquery',
    'Magento_Ui/js/lib/validation/validator'
], function ($, validator) {
    'use strict';

    return function () {
        $.validator.addMethod(
            'postcode-validation',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || /[0-9]/.test(v);
            },
            $.mage.__('Magenest Message - Please enter numbers for the postcode field.')
        );


        /** validator addRule method allow to use our custom validation with ui component field (checkout) */

        validator.addRule(
            'postcode-validation',
            function (v) {
                return $.mage.isEmptyNoTrim(v) || /[0-9]/.test(v);
            },
            $.mage.__('Magenest Message - Please enter numbers for the postcode field.')
        );
    };
});
