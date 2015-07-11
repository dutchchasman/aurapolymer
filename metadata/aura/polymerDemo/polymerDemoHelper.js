({
	polymerReady: function(Polymer, component) {
        var helper = this;
        helper.import("/resource/dom_element_1_0",
        	function() {
            	helper.renderPolymerElement(component);  
        	}
      	);
	},
    
    renderPolymerElement: function(component) {
        if (!component._renderedPolymer && component.isRendered()) {
            component._renderedPolymer = true;
            var polymerContent = component._polymerContent || document.createElement("dom-element");
			component.find("content").getElement().appendChild(polymerContent);
        }
    },
    
    import: function(href, onload) {
        var link = document.createElement("link");
        link.rel = "import";
        link.href = href;    
        link.onload = onload;
        
        document.getElementsByTagName("head")[0].appendChild(link);
    }
})