'use strict';

angular.module('dashboardApp').controller('auth', function ($scope, $location, $cookieStore, authorization, api) {
	$scope.title = 'Likeastore. Analytics';

	$scope.login = function () {
		var credentials = {
			username: this.username,
			password: this.password
		};

		var success = function (data) {
			var token = data.token;

			api.init(token);

			$cookieStore.put('token', token);
			$location.path('/');
		};

		var error = function () {
			// TODO: apply user notification here..
		};

		authorization.login(credentials).success(success).error(error);
	};
});