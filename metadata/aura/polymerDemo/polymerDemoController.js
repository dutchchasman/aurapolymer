({
	init: function(component, event, helper) {   
        helper.import("/resource/polymer1_0_a/components/bower_components/polymer/polymer.html",
        	function() {
            	helper.polymerReady(Polymer, component);
        	}
      	);
    }
})