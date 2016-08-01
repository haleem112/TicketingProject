
app.controller("mainCtrl" , function($scope , fact ,$timeout)
{
	var events = $scope.events = {};
	var startDate = $scope.date1 ;
	var endDate = $scope.date2 ;

//-----------------------Object to be sent-----------------------// 
	var user = $scope.user = {
		firstName : "" ,
		lastName : "" ,
		mobileNumber : "" ,
		email : "" ,
		companyName : "" ,
		eventTitle : "" ,
		eventType : "" ,
		inventory : "",
		events : []
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

  customer.events = [];

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

//-----------------------clicked copies the values of customer object to user object-----------------------//

$scope.clicked = function()
{ 
	fact.create(customer,user) ;
}
//-----------------------Change submit button from disabled to enabled -----------------------//
$scope.formDone = function ()
{

	return fact.formBtn_disabled(customer) ;
}
$scope.eventDone = function ()
{

	return fact.eventBtn_disabled(customer.location) ;
}


//----------------------- Watchers -----------------------//
$scope.$watch ('customer.firstName' , function(val) 
{ 
	fact.validateInput (val, regex.name);

}, true);

$scope.$watch ('customer.lastName' , function(val) 
{ 
	fact.validateInput (val,regex.name);

}, true);

$scope.$watch ('customer.location' , function(val) 
{ 
	fact.validateInput (val,regex.location);

}, true);

$scope.$watch ('customer.email' , function(val) 
{ 
	fact.checkReg (val,regex.email);

}, true);

$scope.$watch ('customer.mobileNumber' , function(val) 
{ 
	fact.checkReg (val,regex.mobile);

}, true);

$scope.$watch ('customer.confirmEmail' , function(val)
{

	fact.confirm (val , customer.email) ;

},true) ;

$scope.$watch ('customer.companyName', function(val)
{

	fact.check_Length (val, regex.name)
},true);

$scope.$watch ('customer.eventTitle', function(val)
{

	fact.check_Length (val, regex.name)
},true);

 $scope.$watch("date1", function(date) 
 {
   // read date value
   startDate = date.setMilliseconds(1);
   console.log($scope.date1);
}, true);

 $scope.$watch("date2", function(date) 
 {
   // read date value
   endDate = date.setMilliseconds(1);
   console.log($scope.date2);
}, true);


 $scope.add = function()
 {
 	fact.addEvent(startDate, endDate, customer.events , customer.location.value);
 };

////////////////////////////////////////////////////////////////////////////


$scope.dateTimeNow = function() 
{
	$scope.date1 = new Date();
	$scope.date2 = new Date();

	console.log("$scope.date");
};
$scope.dateTimeNow();

$scope.toggleMinDate = function()
{
	var minDate = new Date();
   // set to yesterday
   minDate.setDate(minDate.getDate() - 1);
   $scope.dateOptions.minDate = $scope.dateOptions.minDate ? null : minDate;
};

$scope.dateOptions =
{
	showWeeks: false,
	startingDay: 0
};

$scope.toggleMinDate();

 // Disable weekend selection
 $scope.disabled = function(calendarDate, mode) 
 {
 	return mode === 'day' && ( calendarDate.getDay() === 0 || calendarDate.getDay() === 6 );
 };
 
 $scope.open = function($event,opened) 
 {
 	$event.preventDefault();
 	$event.stopPropagation();
 	$scope.dateOpened1 = true;
 };

 $scope.open = function($event,opened) 
 {
 	$event.preventDefault();
 	$event.stopPropagation();
 	$scope.dateOpened2 = true;
 };
 
 $scope.dateOpened1 = false;
 $scope.dateOpened2 = false;
 $scope.hourStep = 1;
 $scope.format = "dd-MMM-yyyy";
 $scope.minuteStep = 15;

 $scope.timeOptions = 
 {
 	hourStep: [1, 2, 3],
 	minuteStep: [1, 5, 10, 15, 25, 30]
 };

 $scope.showMeridian = true;
 $scope.timeToggleMode = function() 
 {
 	$scope.showMeridian = !$scope.showMeridian;
 };
 



});