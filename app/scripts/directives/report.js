'use strict';

angular.module('dashboardApp').directive('report', function (analytics) {
	var dates = {
		today: moment(),
		yesterday: moment().subtract('days', 1),
		lastWeek: moment().startOf('week').subtract('weeks', 1),
		lastMonth: moment().startOf('month').subtract('month', 1)
	};

	return {
		restrict: 'E',
		templateUrl: 'views/report.html',
		scope: true,
		link: function ($scope, elem, attrs) {
			$scope.heading = attrs.periodHeading;
			$scope.datePeriod = dates[attrs.date].format('DD/MM/YYYY');

			analytics.report(attrs.report, dates[attrs.date], 'user-registered', function (data) {
				$scope.registered = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'user-logged-on', function (data) {
				$scope.loggedOn = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'network-created', function (data) {
				$scope.networksCreated = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'search', function (data) {
				$scope.searches = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'share-with-friend', function (data) {
				$scope.sends = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'user-followed', function (data) {
				$scope.followed = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'share-like', function (data) {
				$scope.shares = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'user-unfollowed', function (data) {
				$scope.unfollowed = data;
			});

			analytics.report(attrs.report, dates[attrs.date], 'account-deactivated', function (data) {
				$scope.deactivated = data;
			});

		}
	};
});