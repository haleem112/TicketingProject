
app.controller('DateTimePickerDemoCtrl',function ($scope, $timeout) {
  $scope.dateTimeNow = function() {
    $scope.date = new Date();
  };
  $scope.dateTimeNow();
  ////////////////////////////////////////////////////////////////////////////////////
  $scope.toggleMinDate = function() {
    var minDate = new Date();
    // set to yesterday
    minDate.setDate(minDate.getDate() - 1);
    $scope.dateOptions.minDate = $scope.dateOptions.minDate ? null : minDate;
  };
   
  $scope.dateOptions = {
    showWeeks: false,
    startingDay: 0
  };
  
  $scope.toggleMinDate();
  
  $scope.open = function($event,opened) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dateOpened = true;
  };
  
  $scope.dateOpened = false;
  $scope.hourStep = 1;
  $scope.format = "dd-MMM-yyyy";
  $scope.minuteStep = 15;

  $scope.timeOptions = {
    hourStep: [1, 2, 3],
    minuteStep: [1, 5, 10, 15, 25, 30]
  };

  $scope.showMeridian = true;
  $scope.timeToggleMode = function() {
    $scope.showMeridian = !$scope.showMeridian;
  };
  



  $scope.$watch("date", function(date) {
    if (date){
    var dateInMilliSecnds = date.setMilliseconds(1);
    console.log(dateInMilliSecnds);
  }
  else
  {
    console.log("ffff");
  }
  }, true);
  


 
});