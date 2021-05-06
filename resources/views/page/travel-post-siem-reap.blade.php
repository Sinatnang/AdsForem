@extends('layout.app') 
@section('content')

<div class="row mt-2">
    <div class="pre-banner">
        <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" />
    </div>
    <div class="wb-finance-cube-pre-banner pre-banner">
        <div class="swiper-wrapper">
            <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" /></a>
            <a class="swiper-slide" href="#" target="_blank"><img src="https://tpc.googlesyndication.com/simgad/4409260301985242625" /></a>
        </div>
    </div>
    <div class="col-8">
        <img src="{{asset('images/travel/travel-post-siem-reap/post-siem-reap_1.png')}}" alt="" />
        <a href="{{asset('/read-travel')}}">
            <img src="{{asset('images/travel/travel-post-siem-reap/post-siem-reap_2.png')}}" alt="" />
        </a>
    </div>
    <div class="col-4 mt-1 block-ads">
        <div class="container" style="margin-left: 25px; border: 1px black;">
            <div class="wb-finance-cube" style="margin-bottom: 20px;">
                <div class="swiper-wrapper">
                    <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/qRQhcVs/online-pe300x250-02.jpg" /></a>
                    <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/qRQhcVs/online-pe300x250-02.jpg" /></a>
                </div>
            </div>
        </div>
        <div class="container" style="margin-left: 35px; border: 1px black; margin-bottom: 20px;">
            <span class="">
                <img src="https://i.ibb.co/6rCDQMj/300x250.jpg" alt="Masthead left" />
            </span>
        </div>
    </div>
<!-- </div> -->

@endsection
