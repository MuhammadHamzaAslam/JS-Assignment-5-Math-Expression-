var sum1 = 5
var ae = "and"
var sum2 = 3
var result = sum1 + sum2
var combine = "Sum of" + " "+ sum1 + " " + "and" + " " +sum2 + " " + "is" + " " + result
document.write(combine)
document.write(" <br> <h2>TASK 2</h2>")
var sum1 = 5
var ae = "and"
var sum2 = 3
var result = sum1 - sum2
var combine = " Subtraction of" + " "+ sum1 + " " + "and" + " " +sum2 + " " + "is" + " " + result
document.write(combine)

var sum1 = 5
var ae = "and"
var sum2 = 3
var result = sum1 * sum2
var combine = "<br> Multiplication of" + " "+ sum1 + " " + "and" + " " +sum2 + " " + "is" + " " + result
document.write(combine)

var sum1 = 5
var ae = "and"
var sum2 = 3
var result = sum1 / sum2
var combine = "<br> Division of" + " "+ sum1 + " " + "and" + " " +sum2 + " " + "is" + " " + result
document.write(combine)

var sum1 = 5
var ae = "and"
var sum2 = 3
var result = sum1 % sum2
var combine = "<br> Modulus of" + " "+ sum1 + " " + "and" + " " +sum2 + " " + "is" + " " + result 
document.write(combine)

document.write(" <br> <br><h2>TASK 3</h2>")

var value1 = "<br> Value after variable declaration is undefined "
document.write(value1)
var text = "<br>The Initial value is"
var ofValue = 5
document.write( text + " " + ofValue )
var text = "<br>Value after increment is "
var ofValue = 5
document.write( text + " " + ++ofValue )
var text = "<br>Value after addition is "
var ofValue1 = 6
var ans = ofValue1 + ++ofValue
document.write(text+ans);
var text = "<br>Value after decrement is "
var ofValue1 = 6
var ans = ofValue1 + --ofValue
document.write(text+ans);
var text = "<br>The Value is: "
var ofValue1 = 6
var ans = ofValue1 / 3
document.write(text+ans%2);

document.write(" <br> <h2>TASK 4</h2>")
var coast1 = 600
var coast2 = 5
var texxt = "The total coast to buy a 5 tickets is"
document.write(texxt+ " " + coast1 * coast2 )

document.write(" <br> <h2>TASK 5</h2>")
var spec = prompt("Enter Number", "2");
var spec1 = 1;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 2;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 3;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 4;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 5;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 6;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 7;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 8;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 9;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

var spec1 = 10;
var anss = spec * spec1;
document.write(spec + " x " + spec1 + " = " + anss + "<br>");

document.write(" <br> <h2>TASK 6</h2>")

var celsius = 25
var Fahrenheit = 75
document.write(celsius + " " + "C" + " " + "is " + ((celsius * 9 / 5) + 32) + " " + "F" + "<br>");
document.write(Fahrenheit + " " + "F" + " " + "is " + ((Fahrenheit - 32) * 5 / 9) + " " + "C" + "<br>");

document.write(" <br> <h2>TASK 6</h2>")
var item1 = 650
var item2 = 100
var quantity1 = 3
var quantity2 = 7
var shipping = 100
var anns = 650*3+800
// console.log(anns);
document.write("Price of item 1 is "+650 + "<br>")
document.write("Quantity of item 1 is "+3 + "<br>")
document.write("Price of item 2 is "+100 + "<br>")
document.write("Quantity of item 2 is "+7 + "<br>")
document.write("Shipping Charges "+shipping + "<br>"+ "<br>")
document.write("Total cost of your order is "+anns)

document.write(" <br> <h2>TASK 7</h2>")

var totalNum = prompt("Enter Total Number", "200");
var obtainedNum = prompt("Enter Obtained Number", "200");
document.write("Total Number are: "+ totalNum + "<br>")
document.write("Obtained Number are: "+ obtainedNum  + "<br>")
document.write("Percentage: "+ obtainedNum/totalNum*100 + "%")

document.write(" <br> <h2>TASK 8</h2>")

var dollar = prompt ("Enter How Many Dollar","10")
var dollar1 = 280
var riyal = prompt ("Enter Numbers of Riyal","10")
var riyal1 = 75
document.write( "Dollar Into PKR: " + dollar*dollar1 + "<br>");
document.write("Riyal into PKR: "+ riyal*riyal1)

document.write(" <br> <h2>TASK 9</h2>")

var sim = 7
document.write(sim+5*10/2)

document.write(" <br> <h2>TASK 10</h2>")


var currentYear =  2024
var birthYear = prompt ("Enter Your Birth Year","2010")
var ans1 = currentYear-birthYear
document.write("Current Year "+ currentYear + "<br>")
document.write("Your Birth Year "+birthYear + "<br>")
document.write("You are " +ans1+ " "+ "years old");

document.write(" <br> <h2>TASK 11</h2>")
document.write("<h3>Life Time  Supply Calculator</h3>")
var choco = "Chocolate Chips"
var agge = "15"
var eag = "65"
var amo = "3"
var snack = "Favourite Snack:Chocolate Chips"
var currentAge = "Current Age:15"
var estimated = "Estimated Maximum Age:15"
var amount = "Amount of snacks per day:3"
document.write(snack + "<br>")
document.write(currentAge + "<br>")
document.write(estimated + "<br>")
document.write(amount + "<br>")
document.write("You will need "+ eag*amo + " To last You until the ripe old age of "+ eag)