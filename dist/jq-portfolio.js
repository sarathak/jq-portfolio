/**
 * jq-portfolio v1.0.0 (https://github.com/sarathak/jq-portfolio)
 * Licensed under: MIT
 */
(function ($, window, document, undefined) {

	/**
	 * Creates a portfolio.
	 * @class The Portfolio.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the portfolio for.
	 * @param {Object} [options] - The options
	 */
    function Portfolio(element, options) {
        console.info(element, options);
        this.element = element;
        this.initialize();
    }
    Portfolio.prototype.initialize = function() {
        this.element.addClass('jq-protfolio-list');
        var container =$('<div class="jq-protfolio"></div>');
        this.element.before(container);
        this.element.detach();
        container.append(this.element);


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