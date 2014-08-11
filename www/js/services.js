angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Photo', 
	     function($firebase, FIREBASE_URL) {
		 var ref = new Firebase(FIREBASE_URL + 'photos');

		 var photos = $firebase(ref);

		 // Might use a resource here that returns a JSON array

		 // Some fake testing data

		 var Photo = {
		     all: photos,
		     create: function(photo) {
			 return photos.$add(photo);
		     },
		     find: function(photoId) {
			 // Simple index lookup
			 return photos.$child(photoId);
		     },
		     delete: function(photoId) {
			 return photos.$remove(postId);
		     }
		 };
		 
		 return Photo;
	     });
