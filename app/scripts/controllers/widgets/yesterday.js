'use strict';

angular.module('dashboardApp').controller('yesterday', function ($scope, analytics) {
	$scope.datePeriod = moment().subtract('days', 1).format('DD/MM/YYYY');

	analytics.registeredYesterday(function (data) {
		$scope.registered = data;
	});

	analytics.loggedOnYesterday(function (data) {
		$scope.loggedOn = data;
	});
	analytics.networksCreatedYesterday(function (data) {
		$scope.networksCreated = data;
	});

	analytics.searchesYesterday(function (data) {
		$scope.searches = data;
	});

	analytics.sendToFriendYesterday(function (data) {
		$scope.sends = data;
	});

	analytics.sharesYesterday(function (data) {
		$scope.shares = data;
	});

});