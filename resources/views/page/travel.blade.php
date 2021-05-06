@extends('layout.app') 
@section('content')
<div class="row mt-2">
                <div class="pre-banner">
                    <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" />
                </div>
                <div class="wb-finance-cube-pre-banner pre-banner">
                <div class="swiper-wrapper">
                    <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg"></a>
                    <a class="swiper-slide" href="#" target="_blank"><img src="https://tpc.googlesyndication.com/simgad/4409260301985242625"></a>
                </div>      
                </div>
                <div class="col-8">
                    <img src="{{asset('images/travel/travel_1.png')}}" alt="" />
                    <a href="{{asset('/read-travel')}}">
                    <img src="{{asset('images/travel/travel_2.png')}}" alt="" />
                    </a>
                    <div >
                        <span type="button" class=" button material-close" aria-label="Close">
                            <i class="material-icons">clear</i>
                        </span>
                            <img class="mid-banner1" src="https://tpc.googlesyndication.com/simgad/8457811643808958112" alt="" style="margin-left: 25px;">
                    </div>
                    <img src="{{asset('images/travel/travel_3.png')}}" alt="">
                    <div >
                        <small type="button" class=" button material-close" aria-label="Close">
                            <i class="material-icons">clear</i>
                        </small>
                        <img class="mid-banner2" src="https://tpc.googlesyndication.com/simgad/8457811643808958112" alt="" style="margin-left: 25px;">
                    </div>
                    <img src="{{asset('images/travel/travel_4.png')}}" alt="">
                    <img src="{{asset('images/travel/travel_5.png')}}" alt="">
                    <img src="{{asset('images/travel/travel_6.png')}}" alt="">
                </div>
                <div class="col-4 mt-1 block-ads">
                <div class="container" style="margin-left:25px; border:1px black;">
                    <div class="wb-finance-cube" style="margin-bottom: 20px;">
                        <div class="swiper-wrapper">
                            <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/qRQhcVs/online-pe300x250-02.jpg"></a>
                            <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/qRQhcVs/online-pe300x250-02.jpg"></a>
                        </div>
                    </div>
                </div>
                    <div class="container" style="margin-left:35px; border:1px black; margin-bottom:20px;">
                        <span class="">
                        <img src="https://i.ibb.co/6rCDQMj/300x250.jpg" alt="Masthead left">
                        </span>
                    </div>
                    <div class="container" style="margin-left:35px; border:1px black; margin-bottom:20px;">
                        <span class="">
                        <img src="https://i.ibb.co/6rCDQMj/300x250.jpg" alt="Masthead left">
                        </span>
                    </div>
                    <div class="container" style="margin-left:25px; border:1px black;">
                        <div class="wb-finance-cube" style="margin-bottom: 20px;">
                            <div class="swiper-wrapper">
                                <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6NQdsZF/Post-Focus-300x250-1.jpg"></a>
                                <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6rCDQMj/300x250.jpg"></a>
                            </div>
                        </div>
                    </div>
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
                </div>
@endsection
