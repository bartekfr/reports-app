angular.module("services", [])
.factory("reportsResource", ["$timeout", "$resource", function($timeout, $resource) {
	return $resource("https://api.mongolab.com/api/1/databases/reportsdb/collections/reports/:id", {
		apiKey: "qUxqL9tqS3G-MbTZLJgdH8Ob4e1Yve_p",
		id: "@_id.$oid"
	});
}]);