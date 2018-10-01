import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader{
    constructor(){
        this.siteHeader=$('.header');
        this.headerTrigger=$('#our-beginning');
        this.createHeaderWaypoint();
        
    }
    createHeaderWaypoint(){
        var self=this;
        new Waypoint({
            element:this.headerTrigger[0],
            handler:function(direction){
                if(direction=="down"){
                    self.siteHeader.addClass('header--dark');
                }
                else{
                    self.siteHeader.removeClass('header--dark');
                }
            }
        });
    }
}

export default StickyHeader;