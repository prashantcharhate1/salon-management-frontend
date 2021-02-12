var app = angular.module('myApp',[]);

app.controller('myController',function($scope){
	
	$scope.user={'username':'','password':''};
	
	//----- Users json
	var validUsers= [ 
		{'username':'chandler@friends.com', 'password':'1234'},
		{'username':'ross@friends.com', 'password':'1234'},
		{'username':'joey@friends.com', 'password':'1234'},
		{'username':'rechal@friends.com', 'password':'1234'}
	];
	
	$scope.showError = false; // set Error flag
	$scope.showSuccess = false; // set Success Flag

	//------- Authenticate function
	$scope.authenticate = function (){
		var flag= false;
		
		for(var i in validUsers){ // loop on users array
			if($scope.user.username == validUsers[i].username && $scope.user.password == validUsers[i].password){
				flag = true;
				break;
			}
			else{
				flag = false;
			}				
		}

		//-------- set error or success flags
		if(flag){
			$scope.showError = false;
			$scope.showSuccess = true;
		}
		else{
			$scope.showError = true;
			$scope.showSuccess = false;
		}


	}

});