/*global QUnit*/

sap.ui.define([
	"practitioners2/controller/businesspartners.controller"
], function (Controller) {
	"use strict";

	QUnit.module("businesspartners Controller");

	QUnit.test("I should test the businesspartners controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
