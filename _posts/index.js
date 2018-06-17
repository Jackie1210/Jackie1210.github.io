function person(name){
  this.name=name;
  this.favColor=[];
}
person.prototype.getname=function(){
  return this.name;
}
person.prototype.getFavColor=function(){
  return this.favColor;
}

person.prototype.setName=function(name){
  this.name=name;
}

function man(name,age){
  person.call(this,name);
  this.sex="male";
  this.age=age;
}



man.prototype=new person();
let clong=new man('clong',22);
let jackie=new man('jackie',21);
let lily=new man('lily',29);
console.log(clong.getname());
console.log(jackie.getname());
console.log(lily.name);
console.log(clong.getFavColor());
console.log(jackie.getFavColor());
clong.name="clong"
clong.favColor.push('red');
console.log(clong.getname());
console.log(jackie.getname());
console.log(clong.getFavColor());
console.log(jackie.getFavColor());
