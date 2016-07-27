//var app = angular.module("app" , []) ;
app.controller("mainCtrl" , function($scope){


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

	var regex = $scope.regex = {} ;

	regex = 
	{
		name : /^[a-zA-Z\-\']+$/ ,
		email : /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/ ,
		location : /^[a-zA-Z0-9\-\. ]+$/ ,
		mobile : /^[1]+[0-2][-]*(\d{4})[-]*(\d{4})$/ //check length with dashes //number is sent to match with dashes 
	} ;

	$scope.$watch ('customer' , function() {
		if (customer.firstName.value) {
       
       var test = customer.firstName.value.match(regex.mobile) ;

       if(test)
       {
       	console.log("matched") ;
       }
       else
       {
       	console.log("non") ;
       }


		//	var length = customer.firstName.value.length;

/*			if (length >0 && length <3)
			{
				customer.firstName.error.bool = true;
				customer.firstName.error.msg = "First Name must be more than 3 characters";
			}

			else if (length > 15)
			{
				customer.firstName.error.bool = true;
				customer.firstName.error.msg = "First Name must be less than 15 characters";
			}

			else {
				customer.firstName.error.bool = false;
			}
		}
		else {
			customer.firstName.error.bool = false;
		}



		console.log(customer.firstName.value);*/
	}
	}, true);


});