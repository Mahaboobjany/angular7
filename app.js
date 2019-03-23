var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {		
		$scope.totalemp = [
							/*{name : 'Mahaboob', id : 'Inn10049', phoneno:'9849667864', emailid:'mahaboob@gmail.com', zipcode:'522614'},
							{name : 'Jany', id : 'Inn10050', phoneno:'9849667861', emailid:'mahaboob2@gmail.com', zipcode:'522614'},
							{name : 'Mahaboob2', id : 'Inn10049', phoneno:'9849667862', emailid:'mahaboob3@gmail.com', zipcode:'522614'} */
			];		
		$scope.saveemp = function(){	
				//alert('HI');			
			$scope.totalemp.push($scope.emp);	
			$scope.emp	={name : 'Enter Name', id : 'Enter Id', phoneno:'Enter Phone Number', emailid:'Enter EmailID', zipcode:'Enter Pin code'}	;	
		}	
		
		$scope.addemppage = true;
		$scope.add = function(){
			$scope.addemppage = !$scope.addemppage;
		}
		
		$scope.editfun = function(editobj){	
		
			$scope.addemppage = true;
			$scope.emp = editobj;
		}
		
});