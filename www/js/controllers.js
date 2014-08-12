angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('PhotoCtrl', function($scope, Photo) {
    $scope.photos = Photo.all;
    $scope.photo = {link:'', description:'', location:''};
    $scope.submitPhoto = function() {
	console.log('clicked submitPhoto');
	$scope.photo.location = 'currentCoordinates';
	Photo.create($scope.photo);
	$scope.photo = {};
    };
})

.controller('PhotoDetailCtrl', function($scope, $stateParams, Photo) {
  $scope.photo = Photo.find($stateParams.photoId);
    
})

.controller('AccountCtrl', function($scope) {
})

.controller("loginCtrl", function($scope, $rootScope, $firebase, $firebaseSimpleLogin, FIREBASE_URL) {
  // Get a reference to the Firebase
  // TODO: Replace "ionic-demo" below with the name of your own Firebase
  var firebaseRef = new Firebase(FIREBASE_URL);
  // Create a Firebase Simple Login object
  $scope.auth = $firebaseSimpleLogin(firebaseRef);
  // Initially set no user to be logged in
  $scope.user = null;
  // Logs a user in with inputted provider
  $scope.login = function(provider) {
    $scope.auth.$login(provider);
  };
  // Logs a user out
  $scope.logout = function() {
    $scope.auth.$logout();
  };
  // Upon successful login, set the user object
  $rootScope.$on("$firebaseSimpleLogin:login", function(event, user) {
    $scope.user = user;
  });
  // Upon successful logout, reset the user object
  $rootScope.$on("$firebaseSimpleLogin:logout", function(event) {
    $scope.user = null;
  });
  // Log any login-related errors to the console
  $rootScope.$on("$firebaseSimpleLogin:error", function(event, error) {
    console.log("Error logging user in: ", error);
  });
});
