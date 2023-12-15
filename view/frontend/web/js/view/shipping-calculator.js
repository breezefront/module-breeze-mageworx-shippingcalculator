/**
 * Copyright © MageWorx, Inc. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
    'jquery',
    'uiComponent',
    'ko',
    'mage/translate',
    'uiRegistry'
], function ($, Component, ko, $t, registry) {
    'use strict';

    return Component.extend({
        component: 'MageWorx_ShippingCalculatorBase/js/view/shipping-calculator', // Breeze fix: added component
        defaults: {
            title: $t("Calculate Shipping Cost"),
            errorMessage: ''
        },

        /**
         * Properties which will be set as an observable during initObservable method call
         */
        observableProperties: [
            'title',
            'errorMessage',
            'defaultTitle'
        ],

        initialize: function () {
            this._super();

            this.initObservable(); // Breeze fix: call initObservable

            var self = this;
            // registry.async('index = estimateForm')(function (form) {
            //     if (form) {
            //         form.visible.subscribe(function (value) {
            //             if (value) {
            //                 self.title(self.defaultTitle());
            //             } else {
            //                 self.title(form.addressFormatted());
            //             }
            //         });
            //     }

            // });
        },

        /**
         * Initialize observables properties
         *
         * @returns {exports}
         */
        initObservable: function () {
            this._super();
            this.observe(this.observableProperties);

            this.defaultTitle(this.title());

            return this;
        },

        addErrorMessage: function (message) {
            this.errorMessage(message);
        },

        clearErrors: function () {
            this.errorMessage('');
        }
    });
});
