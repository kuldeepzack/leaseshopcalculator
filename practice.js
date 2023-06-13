
<!DOCTYPE html>
<html ng-app="dateApp">

<head>
<style>
    input.ng-valid {
        background-color:lightgreen;
    } 
    
    </style>
        
        
  <title>KULDEEP</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body ng-controller="DateController">

  <h1>Shop Duration Calculator</h1>

  

  <label for="startDate">Start Date:</label>
  <input type="date" id="startDate"  ng-model="startDate">
  <br><br>

  <label for="addMonths">tenure period (mm-dd-yyyy)</label>
  <input type="number" id="addMonths"  ng-model="addMonths">
  
  <label for="addDays"></label>
  <input type="number" id="addDays"  ng-model="addDays">

  <label for="addYears">:</label>
  <input type="number" id="addYears" ng-model="addYears">
  <br><br>

  <button ng-click="calculateNewDate()">Calculate</button>

  <h3>End date</h3>
  <input type="date" ng-model="newDate" readonly>
  
  <script>
    angular.module('dateApp', [])
      .controller('DateController', ['$scope', function($scope) {
        $scope.calculateNewDate = function() {
          var start = new Date($scope.startDate);
          var years = parseInt($scope.addYears || 0);
          var months = parseInt($scope.addMonths || 0);
          var days = parseInt($scope.addDays ||0);

          var newDate = new Date(start.getFullYear() + years, start.getMonth() + months, start.getDate() + days);

          $scope.newDate = newDate;
        };
      }]);
  </script>
<body style="background-image: url('kddd.webp');"></p>
</body>

</html>
