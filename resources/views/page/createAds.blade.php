@extends('layout.dashboard') 
@section('content')
<div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <a href="{{asset('/dashboard')}}" class="btn btn-info">Back</a>
                    <div class="card mt-3">
                        <div class="card-header text-center">Ads</div>
                        <div class="card-body">
                            <form action="">
                                <div class="form-group">
                                  <label for="">Select Type</label>
                                    <select id="selectType" class="form-control" required>
                                      <option selected>Type/Placement</option>
                                      <option>Splash Box</option>
                                      <option>Masthead Left</option>
                                      <option>Masthead Right</option>
                                      <option value="">Top Banner1</option>
                                      <option value="">Premire Banner1</option>
                                      <option value="">Premire Banner2</option>
                                      <option value="">Premire Banner3</option>
                                      <option value="">Premire Banner4</option>
                                      <option value="">Premire Banner5</option>
                                      <option value="">MREC1</option>
                                      <option value="">MREC2</option>
                                      <option value="">MREC3</option>
                                      <option value="">MREC4</option>
                                      <option value="">MREC5</option>
                                      <option value="">Mid Banner1</option>
                                      <option value="">Mid Banner2</option>
                                      <option value="">Story Mid Banner</option>
                                      <option value="">In-Read Story</option>
                                      <option value="">Deskto Parallax</option>
                                      <option value="">Bottom Popup Banner</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                  <label for="">Select Size </label>
                                    <select id="selectSize" class="form-control" required>
                                      <option selected>Size (WxH) </option>
                                      <option>700 x 450</option>
                                      <option>300 x 100</option>
                                      <option>300 x 100</option>
                                      <option value="">1100 x 70</option>
                                      <option value="">1100 x 90</option>
                                      <option value="">1100 x 90</option>
                                      <option value="">1100 x 90</option>
                                      <option value="">1100 x 90</option>
                                      <option value="">1100 x 90</option>
                                      <option value="">300 x 250</option>
                                      <option value="">300 x 250</option>
                                      <option value="">300 x 250</option>
                                      <option value="">300 x 250</option>
                                      <option value="">300 x 250</option>
                                      <option value="">728 x 90</option>
                                      <option value="">728 x 90</option>
                                      <option value="">728 x 90</option>
                                      <option value="">700 x 400</option>
                                      <option value="">700 x 400</option>
                                      <option value="">1100 x 70</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">Insert Code</label>
                                    <textarea name="code" id="code" cols="30" rows="10" class="form-control" placeholder="Write Code......." required></textarea>
                                </div>
                                <div class="form-group">
                                  <a href="#" class="btn btn-info text-whit" name="" type="submit">Submit</a>
                                  <a href="#" class="btn btn-danger float-right" name="" type="cancel">Cancel</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
@endsection