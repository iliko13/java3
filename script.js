// //ნაშთიანი გაყოფა
// var x = 41
// var y = 7
// var z = x % y
// console.log(z)

// //++ და -- მნიშვნელობა
// var x = 5
// var z = x++ //6

// var x = 5
// var z = x-- //4

// // == და === შედარება
// var income = 100;
// var strIncome = "100";

// var result1 = income == strIncome; //true; რადგან ორი ტოლობა ადარებს ერთმანეთს
// var result2 = income === strIncome;//false; რადგან ეს არის იგივეობის ოპერატორი და ადარებს ერთდაიგივე მონაცემი არის თუ არა
// console.log(result1)
// console.log(result2)

//  var income = 100;
//  var percent = 10;
//  var result = income > 50 && percent < 12
//  console.log(result)  //true რადგან და კავშირშია და ორივე პირობა დააკმაყოფილა

//  var income = 100;
//  var isDeposit = true;
//  var result = income > 50 || isDeposit == false;
//  console.log(result) //true რადგან ან კავშირია და ერთი პირობა მაინც შესრულდა

//  var income = 100;
//  var result1 = !(income > 50);
//  console.log(result1) //იქნება false , რადგან ძახილის ნიშანი არის მისი შებრუნებული

//  var Firstname = "ტომი"
//  var Lastname = "ჯერი"
//  var fullname = Firstname + " " + Lastname;
//  console.log(fullname) // გამოიტანს ტომი ჯერი , რადგან გამოტოვებულია, მაგრამ ბრჭყალებშიც რომ ჩავწეროთ რამე იასაც გამოიტანს შუაში.


//  var strsum = prompt ("შეიყვანეთ ანაბარის თანხა",1000) //პრომტი არის იგივე ალერტი ოღონდ გვაძლევს ჩაწერის უფლებას.
//  var strpercent = prompt ("შეიყვანეთ საპროცენტო განაკვეთი",10)
//  var sum = parseInt(strsum) // perseint პარსავს სსტრინგებს, ანუ რაც წერია ბრჭყალებში იმას წაშლის.
//  var percent = parseInt(strpercent);
//  sum = sum + sum * percent / 100;
//  alert("პროცენტი დარიცხვის შემდეგ თანხა იქნება" + sum)

//  var people = ["Tom" , "Alice" , "Sam"] // 0-ტომი; 1-ალისა; 2-სემი
//  console.log(people[1]) //ამოიღებს ალისას

//  var people = ["Tom" , "Alice" , "Sam"] // 0-ტომი; 1-ალისა; 2-სემი
//  people[0] = "Bob";
//  console.log(people[1]) //ამოიღებს ბობს, რადგან ქვემოთ 0-ს მნიშვნელობა მივანიჭეთ

//  var numbers1 = [1,2,3,4,5]; // ერთგანზომილებიანი მასივი
//  var numbers2 = [[0,1,2], [3,4,5]]; // ორგანზომილებიანი მასივი

//  var people = [
//     ["Tom" , 25 , false],
//     ["Alice" , 26 , false],
//     ["Sam" , 27 , true]
//  ]
//  console.log(people[0][0]) // გამოიტანს ტომს , რადგან პირველი სტროფი არის 0, ხოლო პირველი სტროფის პირველი სახელი არის 0
//  console.log(people[2][2]) // ამ შემთხვევაში ამოაგდებს true-ს.

//  //if ოპერატორი
//  var income = 100;
//  if (income > 50) {
//     alert("კაი ხელფასი")
//  }
//  //მეორენაირად ამ კოდს უფრო "დანავაროტკებული" კოდი
//  var income = 100;
//  if (income > 50) {
//     var message = "კაი ხელფასი"
//     alert(messsage)
//  }

//  var income = 100;
//  if (income > 50) {
//     var message = "კაი ხელფასი"
//     alert(messsage)
//  }
//  else{
//     alert("ცუდი ხელფასი") //თუ პირველი პირობა არ შესრულდა მაშინ მივიღებთ ამას.
//  }

//  var income = 3000;
//  if (income < 2000) {
//     alert("დაბალი ხელფასი") //პირველი პირობა
//  }
//  else if (income >= 2000 && income <=4000) {
//     alert("საშუალო ხელფასი") //მეორე პირობა
//  }
//  else {
//     alert("კაი ხელფასი") // თუ წინა ორი პირობა არ შესრულდა სრულდება ეს პირობა
//  }

//  var income = 300;
//  switch(income) {
//     case 100:
//         console.log("dabali xelfasi")
//         break;
//     case 200:
//         console.log("sashualo xelfasi")
//         break;
//     case 300:
//         console.log("kai xelfasi")
//         break;
//  }

//  // for [მრიცხველის ინიციალიზაცია],[პირობა], [მრიცხველის შეცვლა]
//  var people = ["Tom", "Alice", "Bob", "Sam"]
//  for(var i = 0; i < people.length; i ++){
//     console.log(people[i]) //ჩამოგვიწერს მიყოლებით სახელებს
//  }
//    //იგივეს აკეთებს შემდეგი ინდექსი in მასივი
// var people = ["Tom", "Alice", "Bob", "Sam"]
// for(var index in people) {
//     document.write(people[index])
// }

// //მოცემული რიცხვების უკუღმა გამოსახვა
// var arr = [4,5,6,7,8,9,10];
// console.log(arr.reverse()) // გამოსახავს 10,9,8,7,6,5,4



// //ფუნქცია
// //function ფუნქციის სახელი ([პარამეტრი]) {
// //    ინსტრუქცია
// //}

// function display() {
//     document.write('es aris js pirveli funqcia')
// }
// display() // ეს გვჭირდება რო ეკრანზე გამოისახოს

// function display() {
//     document.write('es aris js pirveli funqcia') // button გამოვიძახეთ
// }

// var display = function () {
//     document.write('es aris js pirveli funqcia') // ცვლადი გავხადეთ ფუნქციად
// }

// function goodMorning() {
//     document.write("dila mshvidobis")
// }
// function goodEvening() {
//     document.write("sagamo mshvidobis")
// }

// var message = goodMorning();

// message();

// message = goodEvening();

// message();


// function display(x) {
//     var z = x * x;
//     document.write(x + 2);
// };
// display(5) //ამით შევიტანეთ ინფორმაცია რომ x = 5-ს

// function display (x,y) {
//     if ( y === undefined)
//     y=x;
//     var z = x*y;
//     document.write( x + "გამრავლებული" + y + "უდრის" + z); // ეს იქნება 6 გამრავლებული 6 ზე უდრის 36 -ს

// }

// function display() {
//     var z = 1;
//     for (var i = 0; i < arguments.length; i++)
//     z *= arguments[i];
//     document.write(z);
// }
// display(6)// უდრის 6 , რადგან z = 1 და 1 მრავლდება 6 სზე


// x = 5 // გლობალური ცვლადი
// function displaySquare () {
//     var z = x * x;
//     document.write(z)
// }
// displaysquare() //მივიღებთ 25-ს


// //რეკურსია

// function getFacatorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     else{
//         return n * getFactorial( n -1 );  
//     }
// }
// var result = getFactorial(4);
// console.log(result)   //24 რადგან ჯერ 4 ზე გაამრავლა მერე 3 ზე მერე 2 და მერე ბოლოს 1 ზე , რადგან 4 ამოღების მერე 4-1=3 და 3 აბრუნებს ზევიდან შესაბამისად 3 არ უდრის 1 და გრძლედება მოქმედება.


// function display() {
//     console.log("dila mshvidobis")
//     display = function(){
//         console.log("dge mshvidobisa")
//     }
// }
// var displayMessage = display;
// display() // dilamshvidobis
// display() // dgemshvidobisa
// displayMessage()
// displayMesaage()


// //hoisting ცვლადზე მიმართვის პროცესი მის განსაზღვრამდე


// //1 davaleba
// var numbers = ["1", "2", "3", "4"]
//  for(var i = 0; i < numbers.length; i ++){
//     console.log(numbers[i])
//  }
// //2 davaleba

// function Input () {
//     var income = prompt("tanxa")
// }

//  function display() {
//     Input();
//     if (income < 2000) {
//         alert("დაბალი ხელფასი")
//     }
//     else if (income >=2000 && income <=4000) {
//         alert("საშუალო ხელფასი")
//     }
//     else {
//         alert("კაი ხელფასი")
//     }
//  }
//  display()

 

//  //3 davaleba
//  const arr = [15,53,22,198,10,28,16,70,33,951];

//  const odds = arr.filter(number => {
//     return number % 2  !==0;
//  });

//  console.log(odds); //15,53,33,951



// //OOP
// var user = new object()

// //1
// var user = {}
// user.name = "Tom"
// user.age = 25;
// console.log(user.name)
// console.log(user.age)

// //ფუნქციით გამოძახება მეორენაირად
// //1
// //თუ ბაზიდან მოცემული ინფორმაცია არის პირდაპირ ობიექტი
// var user = {}
// user.name = "Tom"
// user.age = 25;
//    user.display = function() {
//     console.log(user.name);
//     console.log(user.age)
//    }

// user.display();

// //იგივე მასივებით 
// //1
// //თუ ბაზიდან მოცემული ინფორმაცია არის მასივი
// var user = {}
// user["name"] = "Tom"
// user["age"] = 25;
//    user["display"] = function() {
//     console.log(user.name)
//     console.log(user.age)
//    }
//    user["display"]()

// //მესამე ვარიანტი
// //1
// var user = {
//     name : "Tom",
//     age : 25,
//     display : function() {
//         console.log(this.name)
//         console.log(this.age)
//     }
// }
// user.display();
// //

// var user = {
//     name : "Tom",
//     age : 25,
//     display : function() {
//         console.log(this.name)
//         console.log(this.age)
//     }
// }
// console.log(user.name) //Tom
// delete user.name; //წაშალა
// console.log(user.name) // undefined

// //ობიექტში მასივები
// var country = {
//     name : "Georgia",
//     language : "Georgian",
//     capital : {
//         name : "Tbilisi",
//         population : 1500000,
//         year : 1784
//     }
// }
// console.log(country.capital.name) //Tbilisi , ამას ქვია წერტილის ნოტაცია
// console.log(country["capital"]["population"]) // 150000 , მასივებით ინფორმაციის ამოღება, მივმართავთ სინტაქსით


// var country = {
//     name : "შვეიცარია",
//     languages : ["გერმანული", "ფრანგული", "იტალიური"],
//     capital : {
//         name : "ბერნი",
//         population : 150000
//     },
//     cities : [
//         {name: "ციურიხი", population: 5444444543},
//         {name: "ჟენევა", population: 443331123 },
//         {name: "ბაზელი", population: 4343113412 }
//     ]
// }
// //country languaes ყველა ელემენტი
// document.write("<h3>შვეიცარიის ოფიციალური ენებია</h3>")
// for (var i = 0; i < country.languages.length; i++){
//     document.write(country.languages[i] + "</br>") 
// }
    

// //შვეიცარიის ქალაქები
// document.write("<h3>შვეიცარიის ქალაქები</h3>")
// for (var i = 0; i < country.cities.length; i++){
//     document.write(country.cities[i].name + "</br>")
// }
    

// //არის თუ არა ესა თუ ის მონაცემი ობიექტში
// var user ={}
// user.name ="Tom",
// user.age = 26,
// user.display = function () {
//     console.log(user.name);
//     console.log(user.age);
// }

// var hasNamesProp = "name" in user;
// console.log(hasNamesProp) //true  ამოწმებს არის თუ არა name ობიექტში

// var hasWeightProp = "weight" in user;
// console.log(hasWeightProp) //false , რადგან weight არ არის ობიექტში


// //ფუნქციაში ობიექტი
// function createUser (pName, pAge) {
//     return{
//         name : pName,
//         age : pAge,
//         displayInfo : function () {
//             document.write("name" + " " + this.name + " " + "age" + " " + this.age + "</br>");
//         }
//     }
// }
// var Tom = createUser("Tom", 26);
// Tom.displayinfo();
// var Alice = createUser ("Alice", 25)
// Alice.displayinfo();



// //დავალება წინა
// var movie = {
//     name : "The Dark Knight",
//     Director : "Christoper Nolan",
//     Writers : ["Jonathan Nolan", "Christoper Nolan", "David Goyer"],
//     Stars : ["Christian Bale,", "Heath Ledger", "Aaron Eckhart"],
//     IMDB : "9.0",
//     Budget : "185 000 000",
//     Gross : "1 006 234 167"
// }
// console.log(movie.name) // წერტილის ნოტაციის გამოვიტანე
// console.log(movie["writers"]) //მასივით ინფორმაციის ამოღება
// document.write("<h3>ფილმის ტოპ მსახიობები</h3>")
// for (var i = 0; i < movie.Stars.length; i++) {
//     document.write(movie.stars[i] + "</br>")
// }
    










// //ფუნქციაში ობიექტი
// function createUser (pName, pAge) {
//     return{
//         name : pName,
//         age : pAge,
//         displayInfo : function () {
//             document.write("name" + " " + this.name + " " + "age" + " " + this.age + "</br>");
//         }
//     }
// }
// var Tom = createUser("Tom", 26);
// Tom.displayinfo();
// var Alice = createUser ("Alice", 25)
// Alice.displayinfo();

// ობიექტის კონსტრუქტორები
// ერთიდაიგივე ეს და ზემოთა უბრალოდ მეორეში რეთურნის მაგივრად this აღვწერეთ იფნრომაცია
//1 დავალება ამის მსგავსად
// var tom = new object();

// function User (pName, pAge) {
//     this.name = pName; //თვისება
//     this.age = pAge;  // თვისება
//     this.displayInfo = function() { //მეთოდი
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var tom = new User("Tom" , 26)

// document.write(tom.name)





// //ertadaa
// // car type constructor
// //2 დავალება
// function car(mName, mAge) {
//     this.name = mName;
//     this.age = mYear;
//     this.getCarInfo = function() { //ეს ფუნქცია შაბოლონივითაა, რომც მოვაშოროთ არაფერი არ შეიცვლება
//         document.write("model" + this.name + "gamoshvebis weli" + this.age)
//     }
// }
// //User type
// function User (pName, pAge) {
//     this.name = pName; //თვისება
//     this.age = pAge;
//     this.drivecar = function(car) {
//         document.write(this.name + "atarebs" + car.name + car.Year)
//     };
//     this.displayInfo = function(car) {
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var tom = new User("Tom" , 26);
// tom.displayinfo();

// var lada = new Car ("lada" , 1800);
// tom.drivecar(lada)




// //prototype
// function User (pName, pAge) {
//     this.name = pName; //ესენი რომლებიც იცვლება
//     this.age = pAge; // არა გლობალური
//     this.displayInfo = function() {
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// //hello არის მეთოდი
// User.prototype.hello = function(){
//     document.write(this.name + "says hello world") //გლობალური
// }
// //maxAge არის თვისება
// User.prototype.maxAge = 110; //გლობალური

// var tom = new User("tom" , 26);
// tom.hello()
// document.write(tom.maxAge)
// var giorgi = new User("Giorgi", 24)
// giorgi.hello()

// document.write(tom.maxAge)



// //ინკაფსულაცია
// function User (pName, pAge) {
//     this.name = pName; 
//     this.age = pAge; 
//     this.displayInfo = function() {
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }
// var tom = new User("Tom" , 26)
// tom.name = 34; //საბოლოო ჯამში ამას წაიკითხავს
// document.write(tom.name) //34





// function User (name ,age) {
//     this.name = name;
//     var _age = age; //getter
//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + _age)
//     }
// }
// this.getAge = function () {
//     return _age;
// }   //setter
// this.setAge = function (age) {
//     if (typeof age === "number" && age > 0 && age < 110) {
//         return _age = age;
//     }
//     else {
//         alert("invalid parametrs")
//     }
// }
// var tom = new User("Tom" , 26);
// document.write(tom.age) //undefined

// document.write(tom.getAge()) //26

// tom.setAge(32); 

// document.write(tom.getAge()); //32

// tom.setAge("53") //invalid parametrs





// //მემკვიდრეობა
// //მომხარებლის კონსტრუქტორი
// function User(name , age) {
//     this.name = name;
//     this.age = age;
//     this.go = function () {
//         document.write(this.name + "goes")
//     };
//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + this.age);
//     }
// }
// User.prototype.maxage = 110;

// function Employee(name,age,company) {
//     User.call(this,name,age);
//     this.company = company;
//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + this.age + "company" + this.company)
//     }
// }
// Employee.prototype = object.create(User.prototype);

// var tom = new User("Tom" , 26)
// var bill = new Employee("bill" , 25 , "Google")


// tom.displayInfo()
// bill.displayInfo()

// //arguments : პარამეტრების მასივი
// //length : განსაზღვრავს ფუნქციას რასაც ელოდება ფუნქცია
// //caller : განსაზღვრავს ფუნქციას რომელმაც წამოიწყო ფუნქციის შესრულება
// //name : ფუნქციის სახელი
// //prototype : ფუნქციის პროტოტიპი

// function add (x ,y) {
//     return x + y;
// }
// var result = add.call(this,3,8)
// document.write(result) //11


// function add (x ,y) {
//     return x + y;
// }
// var result = add.apply(null, [3,8])
// document.write(result) //11t



//axali gakvetili

// // ობიექტი Date და მისი მეთოდები
// const currentDate = new Date();
// document.write(currentDate)//ყველაზე კომფორტულია


// const myDate = new Date(0)
// document.write(myDate) //გვიჩვენებს 1970 წლიდან რამდენი წლითაა მოცემული თარიღი

// var myDate = new Date("8 november 2022")
// document.write(myDate)


// getDate() //აბრუნებს თვის რიცხვს
// getDay() //აბრუნებს კვირის დღეს(ათვლა 0 დან, 0-კვირა,6-შაბათი)
// getMonth() // აბრუნებს თვის ნომერს (ათვლა იწყება 0 დან)
// toDateString() //აბრუნებს სრულ თარიღს სტრინგის სახით
// toTimeString() //აბრუნებს სრულ დროს
// getHours() // აბრუნებს საათს (0 დან 23 ჩათვლით)
// getMinutes() //აბრუნებს წუთებს (0 დან 59 ჩათვლით)
// getSeconds() // აბრუნებს წამებს (0 დან 59)
// getMilliseconds() // აბრუნებს მილიწამებს ( 0-999)

// const d = new Date();
// const day = d.getDate();
// document.write(day) // 8 

// //გართულებული ვერსია
// const days = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"];
// const months = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკმებერი"];

// const myDate = new Date()
// const fullDate = "დღეს" + myDate.getFullYear() + "წლის" + myDate.getDate 
// + " " + months[myDate.getMonth()] + " , " + days[myDate.getDay()];
// document.write(fullDate)


// let welcome;
// const myHour = new Date();
// const hour = myHour.getHours();
// const minutes = myHour.getMinutes()
// const seconds = myHour.getSeconds()

// if (minutes < 10) {
//     minutes = "0" + minutes;
// }
// if (seconds < 10) {
//     seconds = "0" + seconds;
// }
// if (hour < 12) {
//     welcome = "დილა მშვიდობის"
// }
// else if (hour < 17) {
//     welcome = "დღე მშვიდობის"
// }
// else {
//     welcome = "საღამო მშვიდობის"
// }
// document.write(welcome + "მიმდინარე დროა" + hour + ":" + minutes + ":" + seconds)


// const x = -25
// document.write(Math.abs(x)) //25

// const y = 37
// document.write(Math.abs(y)) // 37  , ყოველთვის გვინდა აბოლუტის დაბრუნება

// const max = Math.max(19,45) //45
// const min = Math.min(33,24,28) //24

// const celi = Math.ceil(19.4) //20  19.6 ზეც 20 ს გამოიტანს
// const negativeceli = Math.ceil(-5.9) //-5

// const floor = Math.floor(9.2) //9 , 9,6 ზეც 9 გამოიტანს
// console.log(floor)

// const z = Math.round(5.4) //5 , მაგრამ რომ ეწეროს 5.5 დააბრუნებს 6-ს
// console.log(z)

// const rnd = Math.random() //დააბრუნოს ნებისმიერი რიცხვი 1 მდე
// console.log(rnd)

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// console.log(getRandomInt(100)); //ამ დროს ნებმისერ რიცხვს მოგცემს 100 მდე და თან დამრგვალებულს

// const names = [
//     "apxo",
//     "giorgi",
//     "ana",
//     "tiko",
//     "tornike"
// ]
// const mynames = names[Math.floor(Math.random() * names.lenth)] //რანდომულად ამოყრის სახელებს
// document.write(mynames)

// const kvadrati = Math.pow(2,3) //8 , ახარისხებს 2 იმდენჯერ რამდენიც წერია მის გვერდით

// const square = Math.sqrt(9) //3 , კვადრატული ფესვი

