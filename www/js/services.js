angular.module('starter.services', ['firebase'])

/**
 * A simple example service that returns some data.
 */
    .factory('Photo', 
	     function($firebase, FIREBASE_URL) {
		 var photos = new Firebase(FIREBASE_URL + 'photos');

		 var syncedPhotos = $firebase(photos).$asObject();

		 syncedPhotos.$loaded().then(function() {

		 });

		 // Might use a resource here that returns a JSON array

		 // Some fake testing data

		 var Photo = {
		     all: syncedPhotos,
		     create: function(photo) {
			 return photos.push(photo);
		     },
		     find: function(photoId) {
			 // Simple index lookup
			 return photos.child(photoId);
		     },
		     delete: function(photoId) {
			 return photos.remove(postId);
		     }
		 };
		 
		 return Photo;
	     });
