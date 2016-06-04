var pawpaw=require('./cat.js')

function customerrequest(ordernumber){
 console.log('the order number is '+ordernumber)
  
  lazy(function(){
     	console.log('the order served with number of '+ordernumber)
  })
 
  
   

}

function lazy(callback)
{
	setTimeout(callback, 5000) 
}
/*
customerrequest(1)
customerrequest(2)
*/

var pekhson = {
	favfood:'khaddo'
}

pekhson.favfood = 'mod'

//console.log(pekhson.favfood)

function mew()
{
	this.animal="cat"
	this.eye="blue"
	this.tail="straight"
	this.age=129
	this.call=function(entity)
	{
		console.log(entity.animal+" calls mew")
	}
}

var mycat = new mew()
mycat.call(new mew())

mew.prototype.newmew = function()
{
	console.log("si me moero cattu")
}

mycat.newmew()
pawpaw.paw()