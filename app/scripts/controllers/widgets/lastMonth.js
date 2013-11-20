'use strict';

angular.module('dashboardApp').controller('lastMonth', function ($scope, analytics) {
	var start = moment().subtract('month', 1).startOf('month').format('DD/MM/YYYY');
	var end = moment().subtract('month', 1).endOf('month').format('DD/MM/YYYY');

	$scope.datePeriod = start + ' - ' + end;

	analytics.registeredLastMonth(function (data) {
		$scope.registered = data;
	});

	analytics.loggedOnLastMonth(function (data) {
		$scope.loggedOn = data;
	});
	analytics.networksCreatedLastMonth(function (data) {
		$scope.networksCreated = data;
	});

	analytics.searchesLastMonth(function (data) {
		$scope.searches = data;
	});
});