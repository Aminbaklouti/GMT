// Revolution Slider
var RevSlider = function() {
    "use strict";
    // Slider 1 ( Simple )
    var handleRevSliderLayout1 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider1");
            } else {
                revapi1 = tpj("#rev-slider1").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "on",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: false,
                            hide_onmobile: false,
                            hide_under: 992,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "right",
                                v_align: "bottom",
                                h_offset: 50,
                                v_offset: 368
                            },
                            right: {
                                h_align: "right",
                                v_align: "bottom",
                                h_offset: 50,
                                v_offset: 290
                            }
                        },
                        bullets: {
                            enable: true,
                            hide_onmobile: false,
                            style: "custom",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1200,992,800,500,400],
                    gridwidth:[1170,955,760,470,360,290],
                    gridheight: [898,898,750,650,660,660],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    return {
        init: function() {
            handleRevSliderLayout1();
        }
    }
}();

$(document).ready(function() {
    RevSlider.init();
});