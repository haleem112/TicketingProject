var App = angular.module("myApp" , []) ;

App.controller("mainCtrl" , function($scope){

$scope.user = {
	firstName : "" ,
	lastNAme  : "" ,
	email     : "" ,
	confirm   : "" ,
	company   : "" , 
	title     : "" ,
	type      : "" ,
	inventory : "" 
} ;

});