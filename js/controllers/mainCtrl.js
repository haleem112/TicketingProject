	//var app = angular.module("app" , []) ;
	app.controller("mainCtrl" , function($scope)
	{


		var customer = $scope.customer = {};

		customer.firstName = 
		{
			value : "" ,
			error : {bool : false , msg : ""}
		} ;

		customer.lastName = 
		{
			value : "" ,
			error : {bool : false , msg : ""}
		} ;
		customer.mobileNumber = 
		{
			value : "" ,
			error : {bool : false , msg : ""}
		} ;
		customer.email = 
		{
			value : "" ,
			error : {bool : false , msg : ""}
		} ;

		customer.confirm = 
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
			error : {bool : false , msg : ""}
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

	regex.name = 
	{
		name : /^[a-zA-Z\-\']+$/ ,
		error : {bool : false , msg : ""}
	}
	regex.email= 
	{
		email : /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/ ,
		error : {bool : false , msg : ""}
	}
	regex.location= 
	{
		location : /^[a-zA-Z0-9\-\. ]+$/ , 
		error : {bool : false , msg : ""}
	}
	regex.mobile= 
	{ 
	mobile : /^[1]+[0-2][-]*(\d{4})[-]*(\d{4})$/, //check length with dashes //number is sent to match with dashes 
		    error : {bool : false , msg : ""}
	}

	

		//---------------Validation Functions---------------//

	$scope.regex = function(name2)
	{
		if (name2.value) {

			var test = name2.value.match(regex.name.name) ;

			if(test)
			{
				console.log("matched") ;
			}
			else
			{
				console.log("non") ;
			}
		}
	};

	$scope.checkInputValues = function(name)
	{

		if (name.value) 
		{
			var length = name.value.length;

			if (length >0 && length <3)
			{
				name.error.bool = true;
				name.error.msg = "First Name must be more than 3 characters";
			}

			else if (length > 15)
			{
				name.error.bool = true;
				name.error.msg = "First Name must be less than 15 characters";
			}

			else 
			{
				name.error.bool = false;
			}
		}
		else 
		{
			name.error.bool = false;
		}

		console.log(name.value);
	};

	//---------------Watcher---------------//
	$scope.$watch ('customer' , function() 
	{ 
		$scope.checkInputValues (customer.firstName);
		$scope.regex (customer.firstName);
		$scope.checkInputValues (customer.lastName);

	}, true);


	});