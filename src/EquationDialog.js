EquationDialog = function(message){

    var dom = dojo.create("div");
    dom.innerHTML = message;
    
    var dialog = new dijit.Dialog({
        title: "jsEquationsSolver",
        style: {width: '300px'}
    },dom);

    dialog.show();
}