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


//1 davaleba
var numbers = ["1", "2", "3", "4"]
 for(var i = 0; i < numbers.length; i ++){
    console.log(numbers[i])
 }
//2 davaleba

 function display(x) {
    if (income < 2000) {
        alert("დაბალი ხელფასი")
    }
    else if (income >=2000 && income <=4000) {
        alert("საშუალო ხელფასი")
    }
    else {
        alert("კაი ხელფასი")
    }
 }
 display(750)

 

 //3 davaleba
 const arr = [15,53,22,198,10,28,16,70,33,951];

 const odds = arr.filter(number => {
    return number % 2  !==0;
 });

 console.log(odds); //15,53,33,951