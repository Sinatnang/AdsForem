@extends('layout.app') 
@section('content')
<style>
    body, html {
        height: 100%;
    }

    .parallax {
    /* The image used */
    background-image: url('images/ads/parallax.jpg');

    /* Full height */
    width:700px;
    height:400px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>
<div class="row mt-2">
                <div class="pre-banner">
                    <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" />
                </div>
                <img src="{{asset('images/national/read-national/read-national_1.png')}}" alt="" />
                <div class="col-8">
                    <img src="{{asset('images/national/read-national/read-national_2.png')}}" alt="" />
                    <div >
                        <span type="button" class=" button midstory-close" aria-label="Close">
                            <i class="material-icons">clear</i>
                        </span>
                        <img class="mid-story" src="https://tpc.googlesyndication.com/simgad/8457811643808958112" alt="">
                    </div> 
                    <img src="{{asset('images/national/read-national/read-national_3.png')}}" alt="">
                    <div class="parallax"></div>
                    <img src="{{asset('images/national/read-national/read-national_4.png')}}" alt="">
                </div>
                <div class="col-4 mt-1 block-ads">
                    <div class="container" style="margin-left:35px; border:1px black;">
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
                    </div>
                    <div class="container" style="margin-left:25px; border:1px black; margin-top:78%;">
                        <div class="wb-finance-cube" style="margin-bottom: 20px;">
                            <div class="swiper-wrapper">
                                <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6NQdsZF/Post-Focus-300x250-1.jpg"></a>
                                <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6rCDQMj/300x250.jpg"></a>
                            </div>
                        </div>
                    </div>
                    <div class="container" style="margin-left:25px; border:1px black;">
                    <img src="{{asset('images/national/read-national/read-national_6.png')}}" alt="">
                    </div>
                </div>
@endsection
