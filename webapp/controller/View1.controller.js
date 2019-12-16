sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileFieldEquipment.TileFieldEquipment.controller.View1", {
		onInit: function () {
			history.back();
			window.open("https://fieldequipment-q5260njtds.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});