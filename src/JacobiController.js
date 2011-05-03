JacobiController = function(params){
    // Extend
    MethodController.call(this, params);

    this.callMethod = function(params){
        var jacobi = new JacobiMethod({
            A: params.A,
            B: params.B,
            MaxIte: params.MaxIte,
            Tol: params.Tol,
            Pini: params.Pini
        });
        var jSol = jacobi.solve();

        return jSol;
    }
}

//jacobiController = new JacobiController({
//    id: "solJacobi"
//});


