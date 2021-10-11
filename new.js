function power(a,b)
{
         var ans = 1;
        
        for (var i =1; i <= b; i++)
        {
                ans = a * ans;        
        }
        return ans;
}
console.log(power(3, 5));
document.write(power(3,5))
