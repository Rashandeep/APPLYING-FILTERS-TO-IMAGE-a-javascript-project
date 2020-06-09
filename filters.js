var image=null;
var can=document.getElementById("can");
var gimage=null;
var rimage=null;
var iimage=null;
var rainimage=null;
var h=null;

var ctx=can.getContext("2d");
ctx.fillText("image will be uplaoded here",80,80);

function loadimage(){
  var file=document.getElementById("file");
  image=new SimpleImage(file);
  gimage=new SimpleImage(file);
  rimage=new SimpleImage(file);
  iimage=new SimpleImage(file);
  rainimage=new SimpleImage(file);
  image.drawTo(can);
}

function imageisloaded(img){
  if(img==null || !img.complete()){
    alert("image is not loaded");
    return false;
  }
  else{
    return true;
  }
}

function dogray(){
  if(imageisloaded(gimage)){
  for(var pixel of gimage.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/ 3 ;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  gimage.drawTo(can);
  }
}

function dored(){
  if(imageisloaded(rimage)){
    for (var pixel of rimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  }
  rimage.drawTo(can);
}

function doindia(){
  if(imageisloaded(iimage)){
    h=iimage.getHeight();
    for(var pixel of iimage.values()){
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if(pixel.getY()<=h/3){
        if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2*avg-255);
        }
      }
      if(pixel.getY()>h/3 && pixel.getY()<=2*h/3){
        
      }
      if(pixel.getY()>2*h/3 && pixel.getY()<=h){
        if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
        }
      }
    }
  }
  iimage.drawTo(can);
}

function dorainbow(){
  if(imageisloaded(rainimage)){
    h=rainimage.getHeight();
    for (var pixel of rainimage.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < h / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < h * 2 / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < h * 3 / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < h * 4 / 7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < h * 5 / 7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < h * 6 / 7) {
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  }
  rainimage.drawTo(can);
}

function reset(){
  if(imageisloaded(image)){
    image.drawTo(can);
    gimage=new SimpleImage(file);
    rimage=new SimpleImage(file);
    iimage=new SimpleImage(file);
    rainimage=new SimpleImage(file);
  }
}
