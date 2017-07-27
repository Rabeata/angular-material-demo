
(function(app) {

	app.controller('HomeController', ['$scope','$http','$mdDialog' ,function($scope,$http,$mdDialog) {
		$scope.EditID = 0;
	/*	$scope.data = {
			cb1: false
		};

		$scope.message = 'false';
		*/

		$http.get("http://jsonplaceholder.typicode.com/comments").then(function (respons) {
				$scope.comments = respons.data;
	 });



		$scope.remove = function(comment) {
			$scope.comments.splice(comment.id-1, 1);
		};

		$scope.showAdd = function(event) {
			$mdDialog.show ({
				clickOutsideToClose: true,
				scope: $scope,
				preserveScope: true,
				templateUrl: 'partials/add.html',
				controller: function DialogController($scope, $mdDialog) {
					$scope.closeDialog = function() {
						$mdDialog.hide();
					}
				}
			});
		};

		$scope.showEdit = function(commentEdit,event) {
			$scope.EditID = commentEdit.id;

			$mdDialog.show ({
				clickOutsideToClose: true,
				scope: $scope,
				preserveScope: true,
				templateUrl: 'partials/Edit.html',
				controller: function DialogController($scope, $mdDialog) {
					$scope.closeDialog = function() {
						$mdDialog.hide();
					}
				}
			});
		};
		
		$scope.AddComment =function(data) {
			$scope.comments.push({
				postId : 1,
				"id": $scope.comments.length,
				"name": data.commentName,
				"email": data.commentEmail,
				"body": data.commentBody
			});

			$mdDialog.hide();

		};

		$scope.closeDialog =function() {

			$mdDialog.hide();

		};

		$scope.EditComment =function(dataEdit) {

			$scope.comments[$scope.EditID-1] = {
				"postId":1,
				"id": $scope.EditID,
				"name": dataEdit.editName,
				"email": dataEdit.editEmail,
				"body": dataEdit.editBody
			};

			$scope.EditID = -1;

			$mdDialog.hide();



		};


		//----------------------------------------------------------------------

	}]);

})(agularTest);