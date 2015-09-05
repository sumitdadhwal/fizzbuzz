function fizzbuzz()
{
	
	var x = document.getElementById('input1').value;
	if(isNumber(x))
	{
		
		
		var result = '';
		for(var i = 1; i<=x; i++)
		{
			if((i%3 == 0) && (i%5 != 0)) 
			{
				result += "Fizz,"; 	
			}
			else if((i%5 == 0) && (i%3 != 0))
			{
				result += "Buzz,";
			}
			else if((i%3 == 0) && (i%5 == 0))
			{
				result += "FizzBuzz,";
			}
			else
			{
				result += i + ',';
			}	
			 
		}
		alert(result);
		document.getElementById("div1").innerHTML = result;		

	}
	else
	{
		alert('Please enter a number.');
		document.getElementById('input1').value ='';
		document.getElementById('input1').focus();
	}
}
function isNumber(n)
{
	return !isNaN(parseInt(n)) && isFinite(n);
}