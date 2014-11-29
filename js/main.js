/*jslint vars: true, plusplus: true, devel: true, moz: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

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

    init();

}());
