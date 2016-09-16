console.log( 'js' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'LaunchpadControler', [ '$scope', function( $scope ){
  console.log( 'NG' );
}]);
