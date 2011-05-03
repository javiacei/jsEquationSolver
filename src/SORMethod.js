SORMethod = function(params){
    // Extend
    EquationMethod.call(this, params);
    this.W = params.W;

    this.solvePartial = function(){
        var Sum, R, C, Paux;

        for (R = 1; R <= this.dim; R++){
            Sum = this.B[R-1];
            for (C = 1; C <= this.dim; C++){
                if(C != R){
                    if (C > R){
                        // Parte superior --> Pold
                        Paux = this.Pold;
                    }else{
                        // Parte inferior --> Pnew
                        Paux = this.Pnew;
                    }
                    Sum -= this.A[R-1][C-1] * Paux[C-1];
                }
            }
            this.Pnew[R-1] = (1 - this.W) * this.Pold[R-1] + ((this.W * Sum) / this.A[R-1][R-1]);
        }
    }
}