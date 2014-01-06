'use strict';

angular.module('dashboardApp').controller('month', function ($scope, analytics) {
	var start = moment().startOf('month').format('DD/MM/YYYY');
	var end = moment().endOf('month').format('DD/MM/YYYY');

	$scope.datePeriod = start + ' - ' + end;

	analytics.registeredMonth(function (data) {
		$scope.registered = data;
	});

	analytics.loggedOnMonth(function (data) {
		$scope.loggedOn = data;
	});
	analytics.networksCreatedMonth(function (data) {
		$scope.networksCreated = data;
	});

	analytics.searchesMonth(function (data) {
		$scope.searches = data;
	});

	analytics.sendToFriendMonth(function (data) {
		$scope.sends = data;
	});

	analytics.sharesMonth(function (data) {
		$scope.shares = data;
	});

});