// Question 1


class Movie{
    constructor(title,studio,rating='PG'){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getData(){
        return [this.title,this.studio,this.rating]
    }
}
function getPG(movieDetails){
    let temp = new Array()
    for(let i=0;i<movieDetails.length;i++){
        if(movieDetails[i][2]==='PG'){
            temp.push(movieDetails[i])
        }
    }
    return temp
}
let film1 = new Movie('Casino Royale','Eon Productions','PG13')
let film2 = new Movie('Silsila','Yash Raj Films')
let film3 = new Movie('Sholay','United Producers')
let film4 = new Movie('Jayamma Panchayathi','Vennela Creations')
let film5 = new Movie('Major','Sony Pictures International Productions','R')
let film6 = new Movie('RRR','DVV Entertainment','R')
let movieDetails = [film1.getData(),film2.getData(),film3.getData(),film4.getData(),film5.getData(),film6.getData()]
console.log(getPG(movieDetails));







// Question 2

class Circle{
    static pi = Math.PI
    constructor(radius,color){
        this.radius = radius
        this.color = color
    }
    getRadius(){
        return this.radius
    }
    setRadius(radius){
        this.radius = radius
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
    ToString(){
        let str = ''
        str = 'radius of a circle = ' + this.radius + " color of a circle = " + this.color
        return str
    }
    getArea(){
        let res = Circle.pi*(Math.pow(this.radius,2))
        return res
    }
    getCircumference(){
        let res = 2*Circle.pi*this.radius
        return res
    }
}
let circle1 = new Circle(4,'red')
console.log(circle1.getRadius())
console.log(circle1.getColor())
console.log(circle1.ToString())
console.log(circle1.getArea())
console.log(circle1.getCircumference())
circle1.setRadius(5.5)
circle1.setColor('blue')
console.log(circle1.ToString())
console.log(circle1.getArea())
console.log(circle1.getCircumference())








// Question 3

class Person{
    constructor(obj){
        this.name = obj.Name
        this.age = obj.Age
        this.Email = obj.Email
        this.PhoneNumber = obj.PhoneNumber
        this.Address = obj.Address
        this.Sex = obj.Sex
        this.MaritalStatus = obj.MaritalStatus
        this.UniversityAttended = obj.UniversityAttended
        this.CGPA = obj.CGPA
        this.Hobbies = obj.Hobbies
    }
    getData(){
        let persondata = `name : ${this.name}, 
        age : ${this.age}, 
        Email : ${this.Email}
        PhoneNumber : ${this.PhoneNumber}
        Sex : ${this.Sex}
        MaritalStatus : ${this.MaritalStatus}
        Universityattended : ${this.UniversityAttended}
        CGPA : ${this.CGPA}
        Hobbies : ${this.Hobbies.join(' , ')}`
        return persondata
    }
}
let obj = {
    Name : 'rohith',
    Age : 23,
    Email : 'rohith@gmail.com',
    PhoneNumber : '123456789',
    Address : 'hyderabad, Telanaga',
    Sex : 'Male',
    MaritalStatus : 'single',
    UniversityAttended : 'Anurag Group of Institutions',
    CGPA : 8.3,
    Hobbies : ['watching movies/web-series','cooking-serving food to my family','playing batminton','playing games in mobile','walking'],
}
let person1 = new Person(obj)
console.log(person1.getData())
let obj2 = {
    Name : 'karthik',
    Age : 24,
    Email : 'karthik@gmail.com',
    PhoneNumber : '867354946',
    Address : 'hyderabad, Telanaga',
    Sex : 'Male',
    MaritalStatus : 'single',
    UniversityAttended : 'NIT Patna',
    CGPA : 8.3,
    Hobbies : ['watching movies/web-series','cooking-serving food to my family','playing batminton','playing games in mobile','walking'],
}
let person2 = new Person(obj2)
console.log(person2.getData())










// Question 4

class Car{
    static tax = 5
    constructor(distancecovered,vehicletype,Basefare,platformcharge,minimumfare, perkilometerfare,surcharges,waitingcharges,minuteswaited){
        this.distancecovered = distancecovered
        this.vehicletype = vehicletype
        this.Basefare = Basefare
        this.platformcharge = platformcharge
        this.minimumfare = minimumfare
        this.perkilometerfare = perkilometerfare
        this.surcharges = surcharges
        this.waitingcharges = waitingcharges
        this.minuteswaited = minuteswaited
    }
    getTaxiPrice(){
        let price
        if(this.vehicletype === 'car'){
            if(this.distancecovered>=0 && this.distancecovered <= 1.6){
                price  = this.Basefare + this.platformcharge + this.minimumfare + this.distancecovered*this.perkilometerfare + this.surcharges + 20
            }
            if(this.distancecovered>1.6){
                price  = this.Basefare + this.platformcharge + this.minimumfare + this.distancecovered*this.perkilometerfare + this.surcharges + 15
            }
            if(this.minuteswaited >= 3){
                price = price + this.waitingcharges*this.minuteswaited                
            }
        }
        if(this.vehicletype === 'bike'){
            if(this.distancecovered>=0 && this.distancecovered <= 1.6){
                price  = this.Basefare + this.platformcharge + this.minimumfare + this.distancecovered*this.perkilometerfare + this.surcharges + 15
            }
            if(this.distancecovered>1.6){
                price  = this.Basefare + this.platformcharge + this.minimumfare + this.distancecovered*this.perkilometerfare + this.surcharges + 10
            }
            if(this.minuteswaited >= 3){
                price = price + this.waitingcharges*this.minuteswaited                
            }
        }
        return price
    }
}

let uberCar = new Car(4.5,'car',20,13,50,11.7,50,1.5,5)
console.log("UberCar price  =  ",uberCar.getTaxiPrice())

let uberbike = new Car(4.5,'bike',11,1.5,20,7.1,40,1.5,3)
console.log("Uberbike price = ",uberbike.getTaxiPrice())




