/*jslint vars: true, plusplus: true, devel: true, moz: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/
var fs = require('fs');
var http = require('http');
var path = require('path');

(function () {
    'use strict';


    var csInterface = new CSInterface();




    function init() {

        themeManager.init();

        $("#doAndroid").click(function () {
          csInterface.evalScript('doAndroid()');

        });


        $("#doIOS7").click(function () {
          csInterface.evalScript('doIOS7()');

        });

        $(function() {
          $("#accordion").accordion();
        });


    }
    console.log(process.platform);

    init();

}());
