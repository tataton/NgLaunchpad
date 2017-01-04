var myApp = angular.module('myApp', []);

myApp.controller('LaunchpadController', ['$scope', function($scope){
  $scope.archivedReview = [];
  $scope.submitReview = function(){
    var reviewToPost = {
      name: $scope.newReview.name,
      rating: $scope.newReview.rating,
      text: $scope.newReview.text
    };
    console.log('Review to POST: ', reviewToPost);
//    $scope.archivedReview.push(reviewToPost);
    $.post('/reviews', reviewToPost, function(response){
      console.log(response);
      var newArrayElement = response;
      $scope.tarkinReviews = newArrayElement;
    });
  }; // end getMovieName
}]);
