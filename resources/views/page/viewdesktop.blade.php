@extends('page.app') @section('content')
<title>Desktop</title>
<!-- <div class="container"> -->
<h5 class="text-center text-primary">Desktop Ads</h5>
<hr style="margin-left: 88px;" />
<div class="row">
    <div class="col-md-3 col-sm-6">
        <div class="card ml-5 mt-3" style="width: 16rem;">
            <!-- <img class="card-img-top" src="{{asset('images/imag.jpg')}}" alt="Card image cap" style="height: 240px;" /> -->
            <img src="https://i.ibb.co/JQDLFV1/Special-Acc-Number-for-Mobile-KH.jpg" alt="ABA Bank" style="height: 240px;" >
            <div class="card-body">
                <h5 class="card-title">ABA Ads</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="{{ url('/viewadsdesktop') }}" class="btn btn-primary ml-5">View Ads</a>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="card ml-5 mt-3" style="width: 16rem;">
            <img class="card-img-top" src="{{asset('images/imag1.jpg')}}" alt="Card image cap" style="height: 240px;" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary ml-5">View Ads</a>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="card ml-5 mt-3" style="width: 16rem;">
            <img class="card-img-top" src="{{asset('images/image2.jpg')}}" alt="Card image cap" style="height: 240px;" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary ml-5">View Ads</a>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="card ml-5 mt-3" style="width: 16rem;">
            <img class="card-img-top" src="{{asset('images/r1.jpg')}}" alt="Card image cap" style="height: 240px;" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary ml-5">View Ads</a>
            </div>
        </div>
    </div>
</div>
<!-- </div> -->
@endsection
