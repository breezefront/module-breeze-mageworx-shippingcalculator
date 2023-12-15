(function () {
    'use strict';

    var anonymousCmps = [
        'MageWorx_ShippingCalculatorBase/js/view/description'
    ];
    anonymousCmps.forEach((key, i) => {
        var cmp = $.breezemap[`__component${$.breezemap.__counter - anonymousCmps.length + i}`];

        $.breezemap[key] = cmp;
    });
})();
