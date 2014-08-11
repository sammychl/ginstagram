angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('PhotoCtrl', function($scope, Photo) {
    $scope.photos = Photo.all;
    console.log($scope.photos);
    $scope.submitPhoto = function() {
	console.log('clicked submitPhoto');
	Photo.create($scope.photo).then(function() {
	    $scope.photo = {desc:'', fileSize:''};
	    console.log($scope.photos);
	});
    };
})

.controller('PhotoDetailCtrl', function($scope, $stateParams, Photo) {
  $scope.photo = Photo.find($stateParams.photoId);
    
})

.controller('AccountCtrl', function($scope) {
});
