function Flower(x, y){
this.x= x;
this.y= y;
this.r= 30;
 this.grow=function(){
 this.r=this.r+2;
 }
  
  this.show = function(){
    noStroke();
  fill(255, 0, 200, 180);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.xdir=1;
  this.shiftDown= function(){
  this.xdir=this.xdir-1;
    this.y=this.y+this.r;
  }
  this.move= function(){
  this.x=this.x+this.xdir;
  }
}