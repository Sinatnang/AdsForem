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
        <img src="{{asset('images/lifestyle/life-creativity-innovation/creativity-innovation_1.png')}}" alt="" />
        <a href="{{asset('/read-lifestyle')}}">
            <img src="{{asset('images/lifestyle/life-creativity-innovation/creativity-innovation_2.png')}}" alt="" />
        </a>
        <div>
            <span type="button" class="button material-close" aria-label="Close">
                <i class="material-icons">clear</i>
            </span>
            <img class="mid-banner1" src="https://tpc.googlesyndication.com/simgad/8457811643808958112" alt="" style="margin-left: 25px;" />
        </div>
        <img src="{{asset('images/lifestyle/life-creativity-innovation/creativity-innovation_3.png')}}" alt="" />
        <div>
            <small type="button" class="button material-close" aria-label="Close">
                <i class="material-icons">clear</i>
            </small>
            <img class="mid-banner2" src="https://tpc.googlesyndication.com/simgad/8457811643808958112" alt="" style="margin-left: 25px;" />
        </div>
        <img src="{{asset('images/lifestyle/life-creativity-innovation/creativity-innovation_4.png')}}" alt="" />
        <img src="{{asset('images/lifestyle/life-creativity-innovation/creativity-innovation_5.png')}}" alt="" />
        <img src="{{asset('images/lifestyle/life-creativity-innovation/creativity-innovation_6.png')}}" alt="" />
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
        <div class="container" style="margin-left: 35px; border: 1px black; margin-bottom: 20px;">
            <span class="">
                <img src="https://i.ibb.co/6rCDQMj/300x250.jpg" alt="Masthead left" />
            </span>
        </div>
        <div class="container" style="margin-left: 25px; border: 1px black;">
            <div class="wb-finance-cube" style="margin-bottom: 20px;">
                <div class="swiper-wrapper">
                    <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6NQdsZF/Post-Focus-300x250-1.jpg" /></a>
                    <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/6rCDQMj/300x250.jpg" /></a>
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->

@endsection
