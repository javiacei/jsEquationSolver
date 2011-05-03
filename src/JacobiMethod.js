JacobiMethod = function(params){
    // Extend
    EquationMethod.call(this, params);

    this.solvePartial = function(){
        var Sum, R, C;
        
        for (R = 1; R <= this.dim; R++){
            Sum = this.B[R-1];
            for (C = 1; C <= this.dim; C++){
                if(C != R){
                    Sum -= this.A[R-1][C-1] * this.Pold[C-1];
                }
            }
            this.Pnew[R-1] = Sum / this.A[R-1][R-1];
        }
    }
}


