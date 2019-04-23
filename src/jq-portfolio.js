/**
 * jq-portfolio v1.0.0 (https://github.com/sarathak/jq-portfolio)
 * Licensed under: MIT
 */
(function ($, window, document, undefined) {
    var defaultOptions={
        items:3,
    };
	/**
	 * Creates a portfolio.
	 * @class The Portfolio.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the portfolio for.
	 * @param {Object} [options] - The options
	 */
    function Portfolio(element, options) {
        this.options = $.extend({},defaultOptions,options)
        this.element = element;
        this.initialize();
    }
    Portfolio.prototype.itemsCount= function(){
        return 3;
    }
    Portfolio.prototype.initialize = function() {
        this.element.addClass('jq-protfolio-list');
        if(!this.options.width)
        this.options.width=this.element.outerWidth();
        var item_count = this.itemsCount();
        var item_width = this.options.width/item_count;
        var item_height = 500;

        var container =$('<div class="jq-protfolio"></div>');
        var tabs = $('<div class="jq-protfolio-tabs"></div>');
        container.append(tabs);
        var warper = $('<div class="jq-protfolio-warper"></div>');
        container.append(warper);
        this.element.before(container);
        this.element.detach();
        var self = this;
        var i =0;
        this.element.find('>div').each(function(){
            var $this = $(this);
            $this.css({'left':(i%item_count*item_width)+'px',
            width:item_width+'px',
            height:item_height+'px',
            top:item_height*~~(i/item_count)
        });
            i++;
        })
        warper.append(this.element);
        this.container=container;

    }
    /**
 * The constructor for the jQuery Plugin
 * @public
 */
    $.fn.portfolio = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);
        console.info('args', args);
        console.info('option', option);
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('portfolio');
            if (!data) {
                data = new Portfolio($this, typeof option == 'object' && option);
                $this.data('portfolio', data);

            }
        });
    }
    $.fn.portfolio.Constructor = Portfolio;
})(window.Zepto || window.jQuery, window, document);;