var app = angular.module( 'app' , [] );

app.controller( 'jumpersTableController' , [ '$scope', '$http', '$filter' , function($scope, $http, $filter){
  $scope.jumpers = [];
  $http.get('js/jumpers.js').success(function(data){
  	$scope.jumpers = data;
  });
}]); 