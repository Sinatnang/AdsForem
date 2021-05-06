@extends('layout.dashboard') 
@section('content')
<a href="{{asset('/create')}}" class="btn btn-info float-right text-white">Create Ads</a>
          <table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>sdrtjmr
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
            </tr>
      </table>
@endsection
