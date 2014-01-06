'use strict';

angular.module('dashboardApp').controller('week', function ($scope, analytics) {
	var start = moment().startOf('week').format('DD/MM/YYYY');
	var end = moment().endOf('week').format('DD/MM/YYYY');

	$scope.datePeriod = start + ' - ' + end;

	analytics.registeredWeek(function (data) {
		$scope.registered = data;
	});

	analytics.loggedOnWeek(function (data) {
		$scope.loggedOn = data;
	});
	analytics.networksCreatedWeek(function (data) {
		$scope.networksCreated = data;
	});

	analytics.searchesWeek(function (data) {
		$scope.searches = data;
	});

	analytics.sendToFriendWeek(function (data) {
		$scope.sends = data;
	});

	analytics.sharesWeek(function (data) {
		$scope.shares = data;
	});

});