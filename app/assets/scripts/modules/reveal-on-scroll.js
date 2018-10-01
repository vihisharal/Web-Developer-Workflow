import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(item,myoffset) {
        this.item=item;
        this.myoffset=myoffset;
        this.itemsToReveal = $(this.item);
        this.hideInitialy();
        this.createWayPoints(this.myoffset);
    }
    hideInitialy() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        var parentFirst=this;
        this.itemsToReveal.each(function () {
            var self = this;
            new Waypoint({
                element: self,
                handler: function () {
                    setTimeout(function(){
                        $(self).addClass("reveal-item--is-visible");
                    },1000);
                },
                offset:parentFirst.myoffset
            });
            /* console.log('whole earth'); */
        });
    }
}

export default RevealOnScroll;