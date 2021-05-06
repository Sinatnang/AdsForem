<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@4.4.6/dist/css/swiper.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <link rel="stylesheet" href="{{asset('css/styles.css')}}" />
  <link rel="stylesheet" href="{{asset('css/animation.css')}}" />
  <script src="{{asset('js/animation.js')}}"></script>
  <script data-source="https://s0.2mdn.net/ads/studio/Enabler.js" data-exports-type="gwd-google-ad" src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<style>
    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
    
  a {
    text-decoration: none!important;
  }
  ul {
    margin-left: 120px !important;
  }
  ul.dropdown {
    margin-left:0px !important;
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  li {
    display: block;
    float: left;
    padding: 10px;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
    margin-top: 2px;
  }
  li:hover {
    cursor: pointer;
  }

  ul li ul {
    background-color: #f7f7f7;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    margin-top: 10px;
    left: 0;
    display: none;
    /* width: 170px; */
  }
  ul.nice-menu-down li li {
    border-top: 0;
      background-color: #f7f7f7;
      border-top: 1px solid #ccc;
      }

  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  ul li ul li {
    clear: both;
    width: 170px;
  }
  .main-nav {
        border-top: 1px solid #9c9fa0 !important;
        border-bottom: 1px solid #9c9fa0 !important;
        font-size: 14px;
        margin-bottom: 10px;
        text-align: center;
        height: 46px;
      }
      ul.nice-menu > li.active-trail > a:before, ul.nice-menu > li > a:hover:before, ul.nice-menu > li > a.active:before {
      position: absolute;
      content: " ";
      width: 100%;
      height: 10px;
      background: #030000;
      top: -17px;
      left: 0;
  }
  .main-nav li a {
      text-transform: uppercase;
      color: #000 !important;
      display: block;
      font-family: "din-2014",sans-serif;
      font-weight: 400;
      position: relative;
      }
      ul.nice-menu, ul.nice-menu ul {
        z-index: 15;
        position: absolute;
      }
    /* .sr-only {
      text
    } */
</style>
  <title>Phnom Penh Post</title>
</head>
<body>
<div class="container mt-3">
  <div class="row mt-2">
        <div class="col-3">
          <div class="masthead-left-right">
            <div class="swiper-wrapper">
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/xstvg2Q/image.png" /></a>
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/YQ6gK0m/Ministry-Of-Information.jpg" /></a>
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/ryY2jGF/Post-Education.jpg" /></a>
            </div>
          </div>
        </div>
        <div class="col-6">
            <img class="ml-4" src="https://www.phnompenhpost.com/sites/default/files/logo_ppp_2.png" alt="phnom post" />
        </div>
        <div class="col-3">
          <div class="masthead-left-right" style="margin-left: -50px;">
            <div class="swiper-wrapper">
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/h85jkqt/Post-Focus.jpg" /></a>
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/hYJZt7D/Post-Finance-and-Insurance-1.jpg" /></a>
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/zZRZRVS/E-papper.jpg" /></a>
              <a class="swiper-slide" href="https://www.facebook.com/wbfinance/" target="_blank"><img src="https://i.ibb.co/ryY2jGF/Post-Education.jpg" /></a>
            </div>
          </div>
        </div>      
  </div>
  <div class="container mt-3">
    <div class="main-nav">
        <nav role="navigation">
        <ul class="nice-menu nice-menu-down nice-menu-main-menu" id="nice-menu-1">
                  <li class=" nav-link menu-218 menu-path-front first odd">
                      <a href="{{asset('/')}}"><span>Home</span></a>
                  </li>
                  <li class="nav-link menu-505 menuparent menu-path-taxonomy-term-1 even page-taxonomy-term-1">
                      <a href="{{asset('/national')}}" id="national" title=""><span>National</span> <i class="fa fa-caret-down icon" aria-hidden="true"></i>
                      </a>
                      <ul class="dropdown">
                          <li class="menu-3192 menu-path-taxonomy-term-13394 first odd page-taxonomy-term-13394">
                              <a href="{{asset('/nat-post-depth')}}" title=""><span>Post in-depth</span></a>
                          </li>
                          <li class="menu-3193 menu-path-taxonomy-term-13395 even page-taxonomy-term-13395">
                              <a href="{{asset('/nat-politics')}}" title=""><span>Politics</span></a>
                          </li>
                          <li class="menu-3005 menu-path-taxonomy-term-13537 odd last page-taxonomy-term-13537">
                              <a href="{{asset('/nat-kr-tribunal')}}"><span>K.R. Tribunal</span></a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-link menu-629 menuparent menu-path-taxonomy-term-2 odd page-taxonomy-term-2">
                      <a href="{{asset('/business')}}" title=""><span>Business</span> <i class="fa fa-caret-down icon" aria-hidden="true"></i></a>
                      <ul class="dropdown">
                          <li class="menu-7275 menu-path-taxonomy-term-6540 first odd page-taxonomy-term-6540">
                              <a href="{{asset('/bus-education')}}" title=""><span>Post Education</span></a>
                          </li>
                          <li class="menu-7276 menu-path-taxonomy-term-15132 even page-taxonomy-term-15132">
                              <a href="{{asset('/bus-financial')}}"><span>Post Finance</span></a>
                          </li>
                          <li class="menu-635 menuparent menu-path-taxonomy-term-26 odd page-taxonomy-term-26">
                              <a href="{{asset('/bus-post-property')}}" title=""><span>Post Property</span>  <i class="fa fa-caret-right" aria-hidden="true"></i></a>
                              <ul class="dropdown" style="margin:-10px 0px 0px 170px !important;">
                                  <li class="menu-1740 menu-path-phnompenhpostcom-post-property-supp-post-property first odd last">
                                      <a href="#" title=""><span>Listing</span></a>
                                  </li>
                              </ul>
                          </li>
                          <li class="menu-3414 menu-path-sphnompenhpostcom-post-focus even">
                              <a href="{{asset('/bus-post-focus')}}" title=""><span>Post Focus</span></a>
                          </li>
                          <li class="menu-3635 menu-path-taxonomy-term-14546 odd last page-taxonomy-term-14546">
                              <a href="{{asset('/bus-post-auto')}}" title=""><span>Post Auto</span></a>
                          </li>
                      </ul>
                  </li>
                  <li class="menu-3160 menuparent menu-path-taxonomy-term-3 even page-taxonomy-term-3">
                      <a href="{{asset('/lifestyle')}}" title=""><span>Lifestyle</span> <i class="fa fa-caret-down icon" aria-hidden="true"></i></a>
                      <ul class="dropdown">
                          <li class="menu-4359 menu-path-taxonomy-term-14651 first odd page-taxonomy-term-14651">
                              <a id="socialite" href="#" title=""><span>Socialite</span></a>
                          </li>
                          <li class="menu-3194 menu-path-taxonomy-term-13393 even page-taxonomy-term-13393">
                              <a href="{{asset('/life-arts-culture')}}" title=""><span>Arts & Culture</span></a>
                          </li>
                          <li class="menu-3162 menu-path-taxonomy-term-13479 odd page-taxonomy-term-13479">
                              <a href="{{asset('/life-food-drink')}}" title=""><span>Food & Drink</span></a>
                          </li>
                          <li class="menu-3161 menu-path-taxonomy-term-14496 even page-taxonomy-term-14496">
                              <a href="{{asset('/life-around-ngos')}}" title=""><span>Around NGOs</span></a>
                          </li>
                          <li class="menu-3626 menu-path-taxonomy-term-14497 odd last page-taxonomy-term-14497">
                              <a href="{{asset('/life-creativity-innovation')}}" title=""><span>Creativity & Innovation</span></a>
                          </li>
                      </ul>
                  </li>
                  <!-- <li class="menu-2828 menuparent menu-path-taxonomy-term-5216 odd page-taxonomy-term-5216">
                      <a href="#" title=""><span>Special Report</span> <i class="fa fa-caret-down icon" aria-hidden="true"></i></a>
                      <ul class="dropdown">
                          <li class="menu-633 menu-path-taxonomy-term-20 first odd page-taxonomy-term-20">
                              <a href="#"><span>Supplements</span></a>
                          </li>
                          <li class="menu-6103 menu-path-pdf-supplement even last">
                              <a href="#"><span>PDF Supplement</span></a>
                          </li>
                      </ul>
                  </li> -->
                  <li class="menu-3392 menuparent menu-path-sphnompenhpostcom-travel even">
                      <a href="{{asset('/travel')}}"  title=""><span>Travel</span> <i class="fa fa-caret-down icon" aria-hidden="true"></i></a>
                      <ul class="dropdown">
                          <li class="menu-5743 menu-path-taxonomy-term-14754 first odd last page-taxonomy-term-14754">
                              <a href="{{asset('/travel-post-siem-reap')}}" title=""><span>Post Siem Reap</span></a>
                          </li>
                      </ul>
                  </li>
                  <li class="menu-3164 menu-path-taxonomy-term-4 odd page-taxonomy-term-4">
                      <a href="{{asset('/sport')}}" title=""><span>Sport</span></a>
                  </li>
                  <li class="menu-3132 menu-path-taxonomy-term-31 even page-taxonomy-term-31">
                      <a href="{{asset('/opinion')}}" title=""><span>Opinion</span></a>
                  </li>
                  <li class="menu-3195 menu-path-taxonomy-term-13377 odd page-taxonomy-term-13377">
                      <a href="{{asset('/international')}}"><span>International</span></a>
                  </li>
                  <li class="menu-13016 menuparent menu-path-notice odd last">
                      <a class="notices" href=""><span>Notices</span> <i class="fa fa-caret-down icon" aria-hidden="true"></i></a>
                      <ul class="dropdown">
                          <li class="menu-13017 menu-path-notice first odd">
                              <a class="notices" href="#"><span>Notice</span></a>
                          </li>
                          <li class="menu-3367 menu-path-taxonomy-term-14234 even page-taxonomy-term-14234">
                              <a href="{{asset('/jobs')}}"><span>Jobs</span></a>
                          </li>
                          <li class="menu-13160 menu-path-announcements odd last">
                              <a id="announcement" href="#"><span>Announcement</span></a>
                          </li>
                      </ul>
                  </li>
              </ul>
        </nav>
    </div>
    </div>
        @yield('content')
</div>
  <div class="container">
  
          <img src="{{asset('images/img8.png')}}" alt="" style="margin-left:-415px;">
          </div>
         <!-- <div class="foot">
           <a class="footclose" href="#" >
           <i class="fa fa-chevron-down" aria-hidden="true" style="margin-left: 100%;"></i>
            <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" >
        <div class="wb-finance-cube-pre-banner pre-banner" style="margin-right:785px;margin-top:-25px;">
            <div class="swiper-wrapper">
                <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" ></a>
                <a class="swiper-slide" href="#" target="_blank"><img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" ></a>
            </div>      
        </div>
          </a>
        </div> -->
        <div id="popup_footer">
            <small class="f-close">
                <img class="icon-popup" src="{{asset('images/down.png')}}" alt="">
            </small>
              <img id="popup-footer" src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" style="margin-top: -30px;margin-left:-29px;">
        </div>
            <!-- <small class="f-close">
                <img class="icon-popup" src="{{asset('images/down.png')}}" alt="">
            </small> -->
            
        <!-- <div class="container" id="popup_footer" >
             <div class="panel-title">
                <div data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                </div>
              </div>
              <div id="collapseOne" class="panel-collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <img src="https://i.ibb.co/XsbkrZt/E-paper-PE.jpg" alt="" style="margin-top: -73px;margin-left:-29px;">
              </div>
          </div> -->
        <div id="popup_this">
            <p class=" b-close">
                <img src="{{asset('images/clos-btn.png')}}" alt="">
            </p>
            <img src="https://i.ibb.co/FKbyX2q/700-x-450-englishjpg.jpg" alt="">
        </div>
  <script src="https://cdn.jsdelivr.net/gh/vast-engineering/jquery-popup-overlay@2/jquery.popupoverlay.min.js"></script>
    <script>
            $(document).ready(function (){
              
              $('ul li a').click(function(){
                // alert('hello');
                if('ul li a ' == 'active-trail'){
                    // $(this).addClass("active-trail").append("<div class='spinner-grow text-secondary' role='status'><span class='sr-only'>Loading...</span></div>");
                    // $(this).removeClass("active");
                }
              });
              //active menu
              // $('ul li a').click(function(){
              //   alert('click me');
              //       $('li a').removeClass("active");
              //       $('.icon').hide();

              //       $(this).addClass("active");
              //   });
              //bottom popup banner loading
              // debugger;
                $(window).on('load', function() {
                  $(this).show();
                  $('#popup_footer').addClass('popup');
                  // $("#travel").append("<div class='spinner-grow text-secondary text-center' role='status'><span class='sr-only'>Loading...</span></div>");
                });

              $('.f-close').click(function(){
                $('.popup').hide().addClass('gone').show('.f-close');
              });
              
              // $('ul li a').click(function(){
                // alert('click me');
                    // $('li a').removeClass("active");
                    // $('.icon').hide();

                    // $(this).addClass("active");
                // });

                // $('a[href="#"]' ).click( function(e) {
                //     e.preventDefault();
                // });
                // //close bottom popup banner loading
                // $('.f-close').click(function() {
                //     $('#popup_footer').removeClass('popup').addClass('gone');
                // });
                $('p').click(function() {
                  $('.b-close,p').hide();
                });
                // popup splash
                $('#popup_this').bPopup({
                    autoClose: 5000
                });
                //mid-banner one
                $('span').click(function() {
                  $('.mid-banner1,span').hide();
                });
                  //mid-banner two
                $('small').click(function() {
                  $('.mid-banner2,small').hide();
                });
                //mid-story
                $('span').click(function() {
                  $('.mid-story,span').hide();
                });
                $('.notices').click(function() {
                window.open('https://www.phnompenhpost.com/notice');   
              });
              $('#announcement').click(function() {
                window.open('https://www.phnompenhpost.com/announcements');   
              });
              $('#socialite').click(function() {
                window.open('https://www.phnompenhpost.com/socialite');   
              });
              // $('#travel').click(function() {
              //   $(this).append("<div class='spinner-grow text-secondary text-center' role='status'><span class='sr-only'>Loading...</span></div>");

              // });
                //active
                // $(".nice-menu li .nav-link").click(function ( e ) {
                //   alert();
                //   e.preventDefault();
                //   $("nice-menu li a.active").removeClass("active"); 
                //   $(this).addClass("active"); 
                //   });

          });          
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bPopup/0.11.0/jquery.bpopup.min.js"></script>
    <script type="text/javascript" id="gwd-init-code">
        (function() {
        var gwdAd = document.getElementById('gwd-ad');

        /**
         * Handles the DOMContentLoaded event. The DOMContentLoaded event is
         * fired when the document has been completely loaded and parsed.
         */
        function handleDomContentLoaded(event) {

        }

        /**
         * Handles the WebComponentsReady event. This event is fired when all
         * custom elements have been registered and upgraded.
         */
        function handleWebComponentsReady(event) {
            // Start the Ad lifecycle.
            setTimeout(function() {
            gwdAd.initAd();
            }, 0);
        }

        /**
         * Handles the event that is dispatched after the Ad has been
         * initialized and before the default page of the Ad is shown.
         */
        function handleAdInitialized(event) {}

        window.addEventListener('DOMContentLoaded',
            handleDomContentLoaded, false);
        window.addEventListener('WebComponentsReady',
            handleWebComponentsReady, false);
        window.addEventListener('adinitialized',
            handleAdInitialized, false);
        })();
    </script>
    <script data-exports-type="gwd-studio-registration">function StudioExports() {
    }</script><script type="text/gwd-admetadata">{"version":1,"type":"GoogleAd","format":"","template":"Banner 3.0.0","politeload":true,"fullscreen":false,"counters":[],"timers":[],"exits":[],"creativeProperties":{"minWidth":300,"minHeight":250,"maxWidth":300,"maxHeight":250},"components":["gwd-google-ad","gwd-image","gwd-page","gwd-pagedeck"],"responsive":false}</script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@4.4.6/dist/js/swiper.min.js"></script>
    <script src="{{asset('js/swiper.js')}}"></script>
</body>
</html>
<script>