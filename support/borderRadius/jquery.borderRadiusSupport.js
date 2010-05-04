/* jQuery borderRadius support
 * http://lazycoder.com/jqueryplugins/?p=4
 *
 * Copyright (c)  2010 Scott Koon, scott@lazycoder.com
 * Source code Copyright (c) 2010
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Determines which style properties the element, and therefore the browser, 
 * supports for rounding the border of elements.
 * Returns an object containing three boolean properties: moz, webkit, and css3. 
 *
 * Example:
 * var supportNoDiv = $().borderRadiusSupport();
 * // support.any will equal true in all browsers except IE
 */

(function($) {
    $.fn.borderRadiusSupport = function() {
        var supported = {
            moz:false,
            webkit: false,
            css3: false,
            any: false
        };
        var primeEl = this[0] || document.createElement("div");  
        if(primeEl === undefined) return supported;
        if(primeEl["style"] === undefined) return supported;
        supported.moz = (primeEl.style["MozBorderRadius"] !== undefined);
        supported.webkit = (primeEl.style["webkitBorderRadius"] !== undefined);
        supported.css3 = (primeEl.style["borderRadius"] !== undefined);
        if(supported.css3 || supported.webkit || supported.moz) supported.any=true;
        return supported;
    }

 })(jQuery);
