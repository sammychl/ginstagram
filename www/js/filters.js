angular.module('starter.filters', [])
.filter('reverse', function() {
      function toArray(list) {
         var k, out = [];
         if( list ) {
            if( angular.isArray(list) ) {
               out = list;
            }
            else if( typeof(list) === 'object' ) {
               for (k in list) {
                  if (list.hasOwnProperty(k) && k.charAt(0)=='-' ) { 

		      out.push(list[k]); }
               }
            }
         }
         return out;
      }
      return function(items) {

          return toArray(items).slice().reverse();
      };
   });
