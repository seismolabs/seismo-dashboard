'use strict';

angular.module('dashboardApp').controller('today', function ($scope, analytics) {
	$scope.datePeriod = moment().format('DD/MM/YYYY');

	analytics.registeredToday(function (data) {
		$scope.registered = data;
	});

	analytics.loggedOnToday(function (data) {
		$scope.loggedOn = data;
	});
	analytics.networksCreatedToday(function (data) {
		$scope.networksCreated = data;
	});

	analytics.searchesToday(function (data) {
		$scope.searches = data;
	});

	analytics.sendToFriendToday(function (data) {
		$scope.sends = data;
	});

	analytics.sharesToday(function (data) {
		$scope.shares = data;
	});
});