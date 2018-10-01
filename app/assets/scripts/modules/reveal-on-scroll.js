import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $('.feature__item');
        this.hideInitialy();
        this.createWayPoints();
    }
    hideInitialy() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        this.itemsToReveal.each(function () {
            var self = this;
            new Waypoint({
                element: self,
                handler: function () {
                    setTimeout(function(){
                        $(self).addClass("reveal-item--is-visible");
                    },1000);
                },
                offset:'bottom-in-view'
            });
            /* console.log('whole earth'); */
        });
    }
}

export default RevealOnScroll;