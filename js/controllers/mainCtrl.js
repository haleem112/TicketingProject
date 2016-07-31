app.controller("mainCtrl" , function($scope , fact1)
{
	var user = $scope.user = {
        firstName : "" ,
        lastName : "" ,
        mobileNumber : "" ,
        email : "" ,
        companyName : "" ,
        evetTitle : "" ,
        location : "" ,
        eventType : "" ,
        inventory : ""
    };
//-----------------------Customer Object-----------------------//
	var customer = $scope.customer = {};

	customer.firstName = 
	{
		value : "" ,
		error : {bool : false , length_msg : "" , nameregex_msg : "" }
	} ;

	customer.lastName = 
	{
		value : "" ,
		error : {bool : false ,  length_msg : "" , nameregex_msg : ""}
	} ;
	customer.mobileNumber = 
	{
		value : "" ,
		error : {bool : false , emailmobilereg_msg : ""}
	} ;
	customer.email = 
	{
		value : "" ,
		error : {bool : false , emailmobilereg_msg : ""}
	} ;

	customer.confirmEmail = 
	{
		value : "" ,
		error : {bool : false , msg : ""}
	} ;

	customer.companyName = 
	{
		value : "" ,
		error : {bool : false , length_msg : ""}
	} ;

	customer.eventTitle = 
	{
		value : "" ,
		error : {bool : false , length_msg : ""}
	} ;

	customer.location = 
	{
		value : "" ,
		error : {bool : false , length_msg : "" , nameregex_msg : ""}
	} ;

	customer.eventType = 
	{
		value : "" ,
		error : {bool : false , msg : ""}
	} ;

	customer.inventory = 
	{
		value : "" ,
		error : {bool : false , msg : ""}
	} ;

	//-----------------------Regex Object-----------------------//
	
	var regex = $scope.regex = {} ;

	regex =
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
	};


$scope.clicked = function (){
	console.log(customer) ;
}

//----------------------- Watchers -----------------------//
	$scope.$watch ('customer.firstName' , function(val) 
	{ 
		fact1.validateInput (val, regex.name);
		
	}, true);

	$scope.$watch ('customer.lastName' , function(val) 
	{ 
		fact1.validateInput (val,regex.name);
		
	}, true);

	$scope.$watch ('customer.location' , function(val) 
	{ 
		fact1.validateInput (val,regex.location);
		
	}, true);

	$scope.$watch ('customer.email' , function(val) 
	{ 
		fact1.checkReg (val,regex.email);
		
	}, true);

	$scope.$watch ('customer.mobileNumber' , function(val) 
	{ 
		fact1.checkReg (val,regex.mobile);
		
	}, true);

	$scope.$watch ('customer.confirmEmail' , function(val)
	{

		 	fact1.confirm (val , customer.email) ;

	},true) ;

	$scope.$watch ('customer.companyName', function(val)
	{

			fact1.check_Length (val, regex.name)
	},true);

$scope.$watch ('customer.eventTitle', function(val)
	{

			fact1.check_Length (val, regex.name)
	},true);

$scope.clicked = function(){ 
fact1.create(customer,user) ;
}

$scope.done = fact1.btn_disabled(customer) ;

});