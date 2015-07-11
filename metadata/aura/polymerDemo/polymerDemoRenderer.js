({
    afterRender: function(component, helper) {
        this.superAfterRender();
        
        helper.renderPolymerElement(component);
    }
})