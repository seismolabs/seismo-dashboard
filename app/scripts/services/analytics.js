'use strict';

angular.module('dashboardApp').factory('analytics', function ($http, config) {
	var app = config.app;
	var url = config.analytics.url;

	function todayQuery(id, callback) {
		var query = url + '/api/reports/day/' + app + '?id=' + id + '&date=today';
		return $http({method: 'GET', url: query}).success(callback);
	}

	function weekQuery(id, callback) {
		var query = url + '/api/reports/week/' + app + '?id=' + id + '&date=' + moment().format('YYYY-MM-DD');
		return $http({method: 'GET', url: query}).success(callback);
	}

	function monthQuery(id, callback) {
		var query = url + '/api/reports/month/' + app + '?id=' + id + '&date=' + moment().format('YYYY-MM-DD');
		return $http({method: 'GET', url: query}).success(callback);
	}

	function lastMonthQuery(id, callback) {
		var query = url + '/api/reports/month/' + app + '?id=' + id + '&date=' + moment().subtract('month', 1).format('YYYY-MM-DD');
		return $http({method: 'GET', url: query}).success(callback);
	}

	return {
		// day

		registeredToday: function (callback) {
			return todayQuery('user-registered', callback);
		},

		loggedOnToday: function (callback) {
			return todayQuery('user-logged-on', callback);
		},

		networksCreatedToday: function (callback) {
			return todayQuery('network-created', callback);
		},

		searchesToday: function (callback) {
			return todayQuery('search', callback);
		},

		// week

		registeredWeek: function (callback) {
			return weekQuery('user-registered', callback);
		},

		loggedOnWeek: function (callback) {
			return weekQuery('user-logged-on', callback);
		},

		networksCreatedWeek: function (callback) {
			return weekQuery('network-created', callback);
		},

		searchesWeek: function (callback) {
			return weekQuery('search', callback);
		},

		// month

		registeredMonth: function (callback) {
			return monthQuery('user-registered', callback);
		},

		loggedOnMonth: function (callback) {
			return monthQuery('user-logged-on', callback);
		},

		networksCreatedMonth: function (callback) {
			return monthQuery('network-created', callback);
		},

		searchesMonth: function (callback) {
			return monthQuery('search', callback);
		},

		// last month

		registeredLastMonth: function (callback) {
			return lastMonthQuery('user-registered', callback);
		},

		loggedOnLastMonth: function (callback) {
			return lastMonthQuery('user-logged-on', callback);
		},

		networksCreatedLastMonth: function (callback) {
			return lastMonthQuery('network-created', callback);
		},

		searchesLastMonth: function (callback) {
			return lastMonthQuery('search', callback);
		}

	};
});
