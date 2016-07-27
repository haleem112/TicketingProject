// var app = angular.module("app" , []) ;
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


});