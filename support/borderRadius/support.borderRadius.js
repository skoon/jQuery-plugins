(function($) {
    $.fn.borderRadiusSupport = function() {
        var testDiv = document.createElement("div");
        var supported = {
            moz:false,
            webkit: false,
            css3: false
        };
        var primeEl = this[0]; //just need to test a single element.
        if(primeEl === undefined) return supported;
        if(primeEl["style"] === undefined) return supported;
        supported.moz = (primeEl.style["MozBorderRadius"] !== undefined);
        supported.webkit = (primeEl.style["webkitBorderRadius"] !== undefined);
        supported.css3 = (primeEl.style["borderRadius"] !== undefined);
        return supported;
    }

 })(jQuery);
