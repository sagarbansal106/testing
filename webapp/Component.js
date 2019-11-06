sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ChartDemo/BarChart/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ChartDemo.BarChart.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			var fLang = jQuery.sap.getUriParameters().get("sap-ui-language");
					if (fLang == "AR" ||fLang == "ar") {
						jQuery.sap.includeStyleSheet("css/style_ar.css", "sap_bluecrystal");
					} else {
						jQuery.sap.includeStyleSheet("css/style_en.css", "sap_bluecrystal");
					}

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});