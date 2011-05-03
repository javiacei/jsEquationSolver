SORController = function(params){
    // Extend
    MethodController.call(this, params);

    this.callMethod = function(params){
        var sor = new SORMethod({
            A: params.A,
            B: params.B,
            MaxIte: params.MaxIte,
            Tol: params.Tol,
            W: params.W,
            Pini: params.Pini
        });
        var sorSol = sor.solve();

        return sorSol;
    }
}

//sorController = new SORController({
//    id: "solSOR"
//});