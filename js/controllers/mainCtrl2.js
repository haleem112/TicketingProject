//var app = angular.module("app" , []) ;
app.controller("mainCtrl" , function($scope)
{


	var customer = $scope.customer = {};

	customer.firstName = 
	{
		value : "" ,
		error : {bool : false , msg_length : "" , msg_nreg : "" }
	} ;

	customer.lastName = 
	{
		value : "" ,
		error : {bool : false ,  msg_length : "" , msg_nreg : ""}
	} ;
	customer.mobileNumber = 
	{
		value : "" ,
		error : {bool : false , msg_emreg : ""}
	} ;
	customer.email = 
	{
		value : "" ,
		error : {bool : false , msg_emreg : ""}
	} ;

	customer.email2 = 
	{
		value : "" ,
		error : {bool : false , msg : ""}
	} ;

	customer.companyName = 
	{
		value : "" ,
		error : {bool : false , msg : ""}
	} ;

	customer.evetTitle = 
	{
		value : "" ,
		error : {bool : false , msg : ""}
	} ;

	customer.location = 
	{
		value : "" ,
		error : {bool : false , msg_length : "" , msg_nreg : ""}
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

	//---------------Regex Object---------------//
	
	var regex = $scope.regex = {} ;

	regex =
	{ 
		name :
		{
			exp    : /^[a-zA-Z\-\']+$/ ,
			error : "Names must contain only characters , - or '" ,
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
			error : "Names must contain only Numbers , letters , - , . or  ," ,
			min : 15 , 
			max : 50
		},
		mobile :
		{
			exp :  /^[1]+[0-2][-]*(\d{4})[-]*(\d{4})$/ ,
			error : "Invalid number"
		}
	};




	$scope.validateInput = function(name , reg)
	{

		if (name.value) 
		{
			var test = reg.exp.test(name.value) ;
			var length = name.value.length;

			if(test)
			{
				name.error.bool= false ;
				name.error.msg_nreg = "";
			}
			else
			{
				name.error.bool = true ;
				name.error.msg_nreg =reg.error;
			}

			
			if (length >0 && length < reg.min)
			{
				name.error.bool = true;
				name.error.msg_length= "must be more than "+reg.min+" characters";
			}

			else if (length > reg.max)
			{
				name.error.bool = true;
				name.error.msg_length = "must be more than "+reg.max+" characters";
			}

			else 
			{
				name.error.msg_length = "" ;
			}
			

		}
		else
		{
			name.error.bool = false ;
		}
	};

	$scope.checkReg = function(name , reg) {

		if (name.value) 
		{
			var test = reg.exp.test(name.value) ;


			if(test)
			{
				name.error.bool= false ;
				name.error.msg_emreg = "";
			}
			else
			{
				name.error.bool = true ;
				name.error.msg_emreg =reg.error;
			}
		}
		else 
		{
			name.error.bool = false ;
			name.error.msg_emreg = "";
		}


	} ;

	$scope.confirmEmail = function(mail , mconfirm)
	{
		//if (name.value)
		//{
			console.log(mail);
			if(mail.value)
			{
			if (mail.value == mconfirm.value )
			{
				mail.error.bool = false ;
				mail.error.msg = "" ;
			}
			else
			{
				mail.error.bool = true ;
				mail.error.msg = "they are not matched" ;
			}
		} else {
			mail.error.bool = false ;
				mail.error.msg = "" ;
		}
		/*}
		else 
	{
			name.error.bool = false ;
			name.error.msg = "" ;
			console.log(name.value);
		}*/
	};



	//---------------Watchers---------------//
	$scope.$watch ('customer.firstName' , function(val) 
	{ 
		$scope.validateInput (val, regex.name);
		
	}, true);

	$scope.$watch ('customer.lastName' , function(val) 
	{ 
		$scope.validateInput (val,regex.name);
		
	}, true);

	$scope.$watch ('customer.location' , function(val) 
	{ 
		$scope.validateInput (val,regex.location);
		
	}, true);

	$scope.$watch ('customer.email' , function(val) 
	{ 
		$scope.checkReg (val,regex.email);
		
	}, true);

	$scope.$watch ('customer.mobileNumber' , function(val) 
	{ 
		$scope.checkReg (val,regex.mobile);
		
	}, true);

	$scope.$watch ('customer.email2' , function(val)
	{
		// if(customer.confirm) {
		// 	$scope.confirm (customer.confirm , customer.email) ;
		// }
		console.log(customer.email2);
		
	},true) ;



});