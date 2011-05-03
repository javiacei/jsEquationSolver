MethodController = function(params){
    this.id = params.id;

    this.callMethod = function(params){}

    this.solve = function(params){
        var that = this;

        var sol = this.callMethod(params);

        var solTable = new DomTable().init({
            parent: dojo.byId(that.id)
        });
        
        
        var i = 0;
        sol.forEach(function(el){
            var className = "";
            var classNameTh = "spec";
            
            if (i % 2){
                className = "alt"
                classNameTh = "specalt"
            }

            var item = [
                { data: el.iteracion, className: classNameTh },
                { data: el.solucion, className: className },
                { data: el.error, className: className }

            ];

            solTable.addItem(item);
            i++;
        });
    }
}


