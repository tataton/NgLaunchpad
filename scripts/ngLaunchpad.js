console.log( 'js' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'LaunchpadControler', [ '$scope', function( $scope ){
  console.log( 'NG' );
  $scope.getMovieName = function(){
    console.log( 'in getMovieName()');
    console.log( 'movieMame:', $scope.movieName );
  }; // end getMovieName
}]);
