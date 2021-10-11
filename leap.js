function leapyear (year)
{

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapyear(2012));
console.log(leapyear(2016));
console.log(leapyear(2021));

document.write(leapyear(2012) + "<br>")
document.write(leapyear(2016) + "<br>")
document.write(leapyear(2021)  + "<br>")