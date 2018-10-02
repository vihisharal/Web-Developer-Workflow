import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from "jquery-smooth-scroll";
class StickyHeader{
    constructor(){
        this.lazyImages=$(".lazyload");
        this.siteHeader=$('.header');
        this.headerTrigger=$('#our-beginning');
        this.pageSections=$('.page-section');
        this.headerLinks=$('.primary-nav a');        
        this.createHeaderWaypoint();
        this.createPageSectionWaypoint();
        this.addSmoothScroll();
        this.refreshWaypoints();// to fixed waypoints timing bug because of lazyload
    }

    refreshWaypoints(){
        this.lazyImages.on('load',function(){
            Waypoint.refreshAll();
        });
    }
    
    addSmoothScroll(){
        this.headerLinks.smoothScroll();
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
    createPageSectionWaypoint(){
        var parent=this;
        this.pageSections.each(function(){
            var current=this;
            new Waypoint({
                element:current,
                handler:function(direction){
                    if(direction=="down"){
                        var machingHeaderLink=current.getAttribute('data-matching-link');
                        parent.headerLinks.removeClass('is-current-link');
                        $('#'+machingHeaderLink).addClass('is-current-link');    
                    }
                },
                offset : "18%"  /* 0 default */   
            });
            new Waypoint({
                element:current,
                handler:function(direction){
                    if(direction=="up"){
                        var machingHeaderLink=current.getAttribute('data-matching-link');
                        parent.headerLinks.removeClass('is-current-link');
                        $('#'+machingHeaderLink).addClass('is-current-link');    
                    }
                },
                offset : "-40%"  /* 0 default */   
            });            
        });
    }
}

export default StickyHeader;