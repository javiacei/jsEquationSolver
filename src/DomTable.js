DomTable = function(params){
    this.init = function(params){
        this.parent = params.parent;
        // Limpiar la tabla de soluciones
        this.clean();
        this.table = dojo.create("table");
        this.parent.appendChild(this.table);

        this._addLine([
            {data: "Iteración"},
            {data: "Solución"},
            {data: "Error (Tolerancia) "}
        ]);

        return this;
    }

    this.clean = function(){
        this.parent.innerHTML = "";
    }

    this._addLine = function(item){
        var that = this;
        // Item = array objetos
        var tr = dojo.create("tr");
        item.forEach(function(obj){
            var td = dojo.create("td");
            td.innerHTML = obj.data;
            td.className = obj.className;
            tr.appendChild(td);
        });
        that.table.appendChild(tr);
    }

    this.addItem = function(item){
        this._addLine(item);
    }
}


