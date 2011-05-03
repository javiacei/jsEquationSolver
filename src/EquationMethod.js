EquationMethod = function(params){
    this.A      = params.A;
    this.B      = params.B;
    this.Pini   = params.Pini;
    this.MaxIte = params.MaxIte;
    this.Tol    = params.Tol;
    this.Pnew   = [];
    this.Pold   = [];
    this.dim    = A.length;

    this.isDiagonalDominance = function(A){
        var i, j;
        var nEquations = A.length;
        var row;
        var res = true;
        
        for (i = 1; i <= nEquations; i++){
            row = 0.0;
            for (j = 1; j <= nEquations; j++){
                if (j != i){
                    // No es la diagonal
                    row += Math.abs(A[i-1][j-1]);
                }
            }
            if ( row > Math.abs(A[i-1][i-1]) ){
                res = false;
            }
        }
        return res;
    }

    this.initMatrix = function(){
        var i = 0;
        for (i = 0; i < this.dim; i++){
            if (!this.Pini){
                this.Pnew[i] = 0.0;
                this.Pold[i] = 0.0;
            }else{
                this.Pnew[i] = this.Pini[i];
                this.Pold[i] = this.Pini[i];
            }
        }
    }

    this.checkConvergence = function(Mnew, Mold){
        var Sep = 0;
        var i;
        var dim = Mnew.length;
        
        for (i = 1; i <= dim; i++)
            Sep += Math.abs(Mnew[i-1] - Mold[i-1]);
        return Sep;
    }

    this.updateMatrix = function(){
        var i;
        for (i = 1; i <= this.dim; i++)
            this.Pold[i-1] = this.Pnew[i-1];
    }

    this.vectorToString = function(m){
        var i;
        var str = "P = ( ";
        for (i = 1; i <= m.length; i++){
            if (i == m.length)
                str += m[i-1] + " )";
            else
                str += m[i-1] + ", ";
        }
        return str;
    }

    this.solvePartial = function(){} // Abstract


    this.solve = function(){
        var nIte = 1;
        var res = [];

        if (!this.isDiagonalDominance(this.A)){
            res[0] = {iteracion: " - ",
                        solucion: "A no es una matrix con diagonal estrictamente dominante",
                        error: " - "};
            return res;
        }

        this.initMatrix();

        var Sep = 1.0;
        res[0] =    {iteracion: 0,
                        solucion: this.vectorToString(this.Pold),
                        error: " - "
                    };
        while( (nIte <= this.MaxIte) && (Sep > this.Tol) ){
            this.solvePartial();

            /* Convergence criterion */
            Sep = this.checkConvergence(this.Pnew, this.Pold);

            /* Update values and increment the counter */
            this.updateMatrix();

            res[nIte] =     {iteracion: nIte,
                                solucion: this.vectorToString(this.Pold),
                                error: Sep
                            };
            nIte++;
        }
        return res;
    };
}