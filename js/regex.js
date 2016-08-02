
app.constant("regex",
{ 
	name :
	{
		exp    : /^[a-zA-Z\-\']+$/ ,
		error : "Input must contain only [letters] [,] [-] [']" ,
		min : 3 ,
		max : 15 
	},
	email :
	{
		exp : /^[A-Z0-9._%+-]+@[a-z0-9]+[.]+[A-Z]{1,4}[.]*[A-Z.]*[a-z]{2,4}$/i, 
		error: "Invalid Email" 
	},
	location :
	{
		exp :/^[a-zA-Z0-9\-\.\, ]+$/ , 
		error : "Input must contain only [Numbers] [letters] [,] [-] [.]" ,
		min : 15 , 
		max : 50
	},
	mobile :
	{
		exp :  /^[1]+[0-2][-]*(\d{4})[-]*(\d{4})$/ ,
		error : "Invalid mobile number"
	}
});