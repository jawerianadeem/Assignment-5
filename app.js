// Chapter 21 (Changing Case)
// Q1
// var allLower = userInput.slice().toLowerCase();
// Q2
var input="x";
var firstChar=input.slice(0).toLowerCase();
console.log( firstChar );
// Q3
var input="y";
var firstChar=input.slice(0).toUpperCase();
console.log( firstChar );
// Q4
var upperString="lahore"
var lowerString = upperString.slice(0,6). toLowerCase();
console.log( lowerString );
// Q5
var arr="peshawar";
var arr2 = arr.slice(0,8). toLowerCase();
console.log( arr2 );
// Q6
var num="hello sir!";
alert(num.slice(0,10).toUpperCase());
// Q7
var cityName = "kaRacHi";
var firstChar=cityName.slice(0,1).toUpperCase();
var remainChar=cityName.slice(1).toLowerCase();
var completeWord=firstChar+remainChar;
console.log(completeWord);



// Chapter 22 - 25 (Strings)
// Q1
var sameWord="captain";
var num=sameWord.indexOf("ap");
var firstText = sameWord.slice(0,1,num);
var replaceWord=" ";
var remainText=sameWord.slice(num+2);
console.log(firstText+replaceWord+remainText);
// Q2

// Q3
var animal="elephant";
for (var i=0;i<animal.length;i++){
    if(animal.slice(i,i+4)==="epha");{
        animal=animal.slice(0,i)+"seg"+animal.slice(i+4);
    }
}
console.log(animal);
// Q4
var str = "hello world"
var lng= str.length
console.log(lng)
// Q5
// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx)
// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx)
// Q8
var text = "Let's go on a journey. It's time to go forward and not look back. Let's go.";
var indx = text.lastIndexOf("go");
console.log("Index of the first character of the last 'go':", indx);

// Q9
// Q10
var stg = "abcde"
var newstg=stg.charAt(2)
console.log(newstg)

// Q11
var sentense = "Hello this is JS Practice"
var cha = sentense.charAt(10)
console.log(cha)
// Q12
var str = "Hello, World!";
var x = str.charAt(str.length - 1);
console.log("Last character:", x);
// Q13
var userInput = prompt("enter")
var cha = userInput.charAt(5)
console.log(cha)
// Q14
// Q15
// Q16
// Q17

// Chapter 26 (Rounding Numbers)
// Q1
var num =2.5;
console.log(Math.round(num));
// Q2
var origNum=2.1;
console.log(Math.round(origNum));
// Q3
// same Q2 and Q3
// Q4
var lastNum=2.7;
console.log(Math.round(lastNum));
// Q5
var num =.5
console.log(Math.round(num));

// Chapter 27 (Random Numbers)
// Q1
var random=Math.random()*50;
console.log(random.toFixed(0));
// Q2
var random=Math.random();
console.log(random);
// Q3
// Q4


// Chapter 28, 29 (Converting Strings)
// Q1
presenInt();
// Q2
var num= "123";
var num2=presenInt(num);
// Q3
var num= "123";
var num2= parseFloat(num); 
// Q4
// Q5
toString()
// Q6
var num = 123
var str= num.toString()
// Q7
var str = "3.14";
var intValue = parseInt(str, 10)

// Chapter 30 (Controlling the length of decimals)
// Q1
var num = Math.random() * 10;
var newNum=num.toFixed(4);
// Q2
var num = Math.random().toFixed().toString;
// Q3

// Q4
var num = 4.6578291893
alert(num.toFixed(2))
// Q5
