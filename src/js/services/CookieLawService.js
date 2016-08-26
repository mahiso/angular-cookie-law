'use strict';

angular.module('angular-cookie-law')

.factory('CookieLawService', [
    '$cookies',
    'cookieLawName',
    'cookieLawAccepted',
    'cookieLawDeclined',
    function($cookies, cookieLawName, cookieLawAccepted, cookieLawDeclined) {
        var accept = function(expireDate, cookieDomain) {
            $cookies.put(cookieLawName, cookieLawAccepted, { domain: cookieDomain, expires: expireDate });
        };

        var decline = function(expireDate, cookieDomain) {
            $cookies.put(cookieLawName, cookieLawDeclined, { domain: cookieDomain, expires: expireDate });
        };

        var isEnabled = function() {
            return $cookies.get(cookieLawName) === cookieLawAccepted;
        };

        return {
            accept: accept,
            decline: decline,
            isEnabled: isEnabled
        };
    }
]);
