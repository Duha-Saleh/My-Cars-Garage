'use script';
var perentElement=document.getElementById('table');

var allCars=[];
function Car(name,year,manufacure){
    this.name= name;
    this.year=year;
    this.price=0;
    this.manufacturer=manufacure;
    allCars.push(this);

}
Car.prototype.getPrice=function(min,max){
    this.price=generateRandomNumber(min,max);

};


function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
Car.prototype.render=function(){
    var perentElement=document.getElementById('table');
    var tr=document.createElement('tr');
    perentElement.appendChild(tr);
    var th1= document.createElement('th');
    th1.textContent='Car Model';
    tr.appendChild(th1);
    var th2= document.createElement('th');
    th1.textContent='Model Year';
    tr.appendChild(th2);
    var th3= document.createElement('th');
    th1.textContent='Price';
    tr.appendChild(th3);
    var th4= document.createElement('th');
    th1.textContent='Manufacture';
    tr.appendChild(th4);
    var th5= document.createElement('th');
    th1.textContent='Remove';
    tr.appendChild(th5);
    var tr2=document.createElement('tr');
    perentElement.appendChild(tr2);
    var td1=document.createElement('td');
td1.textContent=this.name;
tr2.appendChild(td1);
var td2=document.createElement('td');
td2.textContent=this.year;
tr2.appendChild(td2);
var td3=document.createElement('td');
td3.textContent=this.price;
tr2.appendChild(td3);
var td4=document.createElement('td');
td4.textContent=this.manufacure;
tr2.appendChild(td4);
var td5=document.createElement('td');
td5.textContent='';
tr2.appendChild(td5);


};

for(var i=0;i<allCars;i++){
    allCars[i].getPrice(7000,100000);
    allCars[i].render();
}

var carform=document.getElementById('cars');

carform.addEventListener('submit',handel);

function handel (event){
    event.preventDefualt();
    var canName=event.target.model.value;
    var carYear=event.target.year.value;
    var carManufacurer=event.target.manufacturer.value;
var neWCar =new Car(canName,carYear,carManufacurer);
localStorage.setItem('allCars',JSON.stringify(allCars));

neWCar.render();

}

function loadFromLocalSrorage()  {
    var cars =JSON.parse(localStorage.getItem('allCars')) || [] ;
    allCars =[];
    for(var i=0;i<allCars.length;i++){
        new Car (cars[i].name,cars[i].year,cars[i].manufacure)
    }

}