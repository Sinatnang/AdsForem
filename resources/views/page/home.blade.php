@extends('layout.app') 
@section('content')
<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css" />
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js"></script>
<link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> -->
<style>
    .buddy {
        display: none;
        /* background: #fff; */
        /* border-radius: 10px; */
        /* box-shadow: 0 0 10px rgba(0,0,0,0.2); */
        color: #fff;
        /* padding: 20px; */
        width: 300px;
        height: 250px;
        /* top: 50px;
  left: 50px; */
        position: absolute;
        /* cursor: hand; */
        cursor: grabbing;
    }
    .rotate-right {
        transform: rotate(-30deg) scale(0.8);
        transition: 1s;
        opacity: 0;
        margin-left: -400px;
        cursor: w-resize;
        z-index: 10;
    }
    .rotate-left {
        transform: rotate(30deg) scale(0.8);
        transition: 1s;
        margin-left: 400px;
        cursor: e-resize;
        opacity: 0;
        z-index: 10;
    }
    .avatar {
        background: #222;
        width: 300px;
        height: 250px;
        display: block;
        margin-top: 10px;
        margin-left: 10px;
        /* background-size: auto 160% !important; */
        background-position: center;
        background-repeat: no-repeat;
    }
    .ui-overlay-a,
    .ui-page-theme-a,
    .ui-page-theme-a .ui-panel-wrapper {
        background-color: #ffffff !important;
        border-color: #bbb !important;
        color: #333 !important;
        text-shadow: 0 1px 0 #f3f3f3 !important;
    }
    /* test code */
    .container-slide {
        width: 300px;
        height: 250px;
        position: relative;
        margin: 100px auto;
        perspective: 1000px;
        }

        .carusel-img {
        width: 300px;
        height: 250px;
        position: absolute;
        transform-style: preserve-3d;
        transition: all 1s;
        transform: rotateX(0);
        margin: 100px auto;
        }

        .btn_links {
        position: relative;
        top: 280px;
        }

        .button-click {
        width: 15px;
        height: 15px;
        background-color: #000;
        border-radius: 20px;
        display: inline-block;
        margin: 0 10px;
        z-index: 1;
        }
        
</style>
<div class="row mt-2">
    <div class="wb-finance-cube-pre-banner pre-banner">
        <div class="swiper-wrapper">
            <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" /></a>
            <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" /></a>
        </div>
    </div>
    <div class="pre-banner">
        <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" />
    </div>
    <div class="pre-banner">
        <img src="https://tpc.googlesyndication.com/simgad/4409260301985242625" alt="" />
    </div>
    <div class="wb-finance-cube-pre-banner pre-banner">
        <div class="swiper-wrapper">
            <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" /></a>
            <a class="swiper-slide" href="#" target="_blank"><img src="https://tpc.googlesyndication.com/simgad/4409260301985242625" /></a>
        </div>
    </div>
    <div class="pre-banner">
        <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" />
    </div>
    <div class="col-8">
        <img src="{{asset('images/img1.png')}}" alt="" />
        <img src="{{asset('images/img2.png')}}" alt="" />
    </div>
    <div class="col-4 mt-1 block-ads">
        <!-- <div class="container-slide" style="margin-left:25px; border:1px black;">
            <div class="carusel-img">
                <img class="figure-img" style="width:200px;height:150px;" src="https://unsplash.it/700/700/?random">
                <img class="figure-img" style="width:200px;height:150px;" src="https://unsplash.it/600/600/?random">
                <img class="figure-img" style="width:200px;height:150px;" src="https://unsplash.it/1200/800/?random">
                <img class="figure-img" style="width:200px;height:150px;" src="https://unsplash.it/1000/800/?random">
                <img class="figure-img" style="width:200px;height:150px;" src="https://unsplash.it/1000/900/?random">
                <img class="figure-img" style="width:200px;height:150px;" src="https://unsplash.it/1200/900/?random">
            </div>
            <div class="btn_links">
                <a href="#" class="button-click"></a>
                <a href="#" class="button-click"></a>
                <a href="#" class="button-click"></a>
                <a href="#" class="button-click"></a>
                <a href="#" class="button-click"></a>
                <a href="#" class="button-click"></a>
            </div>
        </div> -->
        <!-- <div class="container" style="margin-left:25px; border:1px black;">
                    <div class="wb-finance-cube" style="margin-bottom: 20px;">
                        <div class="swiper-wrapper">
                            <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/qRQhcVs/online-pe300x250-02.jpg"></a>
                            <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/qRQhcVs/online-pe300x250-02.jpg"></a>
                        </div>
                    </div>
                </div> -->
        <!-- <div class="container" style="margin-left:35px; border:1px black; margin-bottom:20px;">
                    <span class="">
                      <img src="https://i.ibb.co/6rCDQMj/300x250.jpg" alt="Masthead left">
                    </span>
                </div> -->
        <!-- <div class="container" style="margin-left:25px; border:1px black;">
                    <div class="wb-finance-cube" style="margin-bottom: 20px;">
                        <div class="swiper-wrapper">
                            <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6NQdsZF/Post-Focus-300x250-1.jpg"></a>
                            <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6rCDQMj/300x250.jpg"></a>
                        </div>
                    </div>
                </div> -->
        <!-- <div class="container" style="margin-left:35px; border:1px black;">
                    <gwd-google-ad id="gwd-ad" polite-load="">
                        <gwd-metric-configuration></gwd-metric-configuration>
                        <gwd-pagedeck class="gwd-page-container" id="pagedeck">
                        <gwd-page id="page1" class="gwd-page-wrapper gwd-page-size gwd-lightbox" data-gwd-width="300px" data-gwd-height="250px">
                            <div class="gwd-page-content gwd-page-size">
                            <gwd-image id="BG" source="{{asset('images/ads/BG.jpg')}}" scaling="stretch" class="gwd-image-9wis"></gwd-image>
                            <gwd-image id="phnone" source="{{asset('images/ads/phnone.png')}}" scaling="stretch" class="gwd-image-1x2z"></gwd-image>
                            <gwd-image id="text" source="{{asset('images/ads/text.png')}}" scaling="stretch" class="gwd-image-gefc gwd-gen-cftzgwdanimation"></gwd-image>
                            <gwd-image id="card" source="{{asset('images/ads/card.png')}}" scaling="stretch" class="gwd-image-1373 gwd-gen-1lmcgwdanimation"></gwd-image>
                            <gwd-image id="hand" source="{{asset('images/ads/hand.png')}}" scaling="stretch" class="gwd-image-1qep gwd-gen-2b0sgwdanimation"></gwd-image>
                            <svg data-gwd-shape="rectangle" class="gwd-svg-1pnp"></svg>
                            <gwd-image source="{{asset('images/ads/Logo.png')}}" scaling="stretch" class="gwd-image-1t21" id="Logo_2"></gwd-image>
                            </div>
                        </gwd-page>
                        </gwd-pagedeck>
                    </gwd-google-ad>
                </div> -->
        <div class="container" style="margin-left: 25px; border: 1px black;">
            <div class="buddy" style="display: block;"><div class="avatar" style="display: block; background-image: url(https://i.ibb.co/6rCDQMj/300x250.jpg);"></div></div>
            <div class="buddy">
                <div class="avatar" style="display: block; background-image: url(https://i.ibb.co/6NQdsZF/Post-Focus-300x250-1.jpg);"></div>
            </div>
            <div class="buddy"><div class="avatar" style="display: block; background-image: url(https://i.ibb.co/61rqrdL/online-pe300x250-01.jpg);"></div></div>
            <div class="buddy"><div class="avatar" style="display: block; background-image: url(https://i.ibb.co/vwB6sGZ/3-Adapt-To-Your-Needs-EN-300x250.jpg);"></div></div>
            <div class="buddy"><div class="avatar" style="display: block; background-image: url(https://i.ibb.co/Dfvr1P9/rs-PP-Post-02.jpg);"></div></div>
        </div>
    </div>
    <div class="imag-content">
        <img class="mt-5" src="{{asset('images/img3.png')}}" alt="menu" />
        <img src="{{asset('images/img4.png')}}" alt="menu" />
        <img src="{{asset('images/img6.png')}}" alt="menu" />
        <img src="{{asset('images/img7.png')}}" alt="" />
    </div>
    
    <script>
        $(document).ready(function () {
            // swipe right
            $(".buddy").on("swiperight", function () {
                $(this).addClass("rotate-left").delay(700).fadeOut(1);
                $(".buddy").find(".status").remove();
                // like & dislike
                $(this).append('<div class="status like">Like!</div>');
                if ($(this).is(":last-child")) {
                    $(".buddy:nth-child(1)").removeClass("rotate-left rotate-right").fadeIn(300);
                } else {
                    $(this).next().removeClass("rotate-left rotate-right").fadeIn(400);
                }
            });
            // swipe left
            $(".buddy").on("swipeleft", function () {
                $(this).addClass("rotate-right").delay(700).fadeOut(1);
                $(".buddy").find(".status").remove();
                $(this).append('<div class="status dislike">Dislike!</div>');

                if ($(this).is(":last-child")) {
                    $(".buddy:nth-child(1)").removeClass("rotate-left rotate-right").fadeIn(300);
                    alert("OUPS");
                } else {
                    $(this).next().removeClass("rotate-left rotate-right").fadeIn(400);
                }
            });
        });

    </script>
<!-- </div> -->

@endsection