GSController = function(params){
    // Extend
    MethodController.call(this, params);

    this.callMethod = function(params){
        var gs = new GSMethod({
            A: params.A,
            B: params.B,
            MaxIte: params.MaxIte,
            Tol: params.Tol,
            Pini: params.Pini
        });
        var gsSol = gs.solve();

        return gsSol;
    }
}

//gsController = new GSController({
//    id: "solGS"
//});

