$(".gallery-item")[0]&&$(".gallery-carousel")[0]&&($(".gallery-carousel").owlCarousel({nav:!0,navText:[],margin:10,loop:!0,autoplay:!0,responsive:{0:{items:1},480:{items:2},768:{items:3},992:{items:2}}}),$(".popup-gallery").magnificPopup({delegate:".owl-item:not(.cloned) a",type:"image",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")+"<small></small>"}}}));