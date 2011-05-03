jsEquationSolver = function(){
    // Editor de variables
    var textarea = document.getElementById('code');
    this.editor = new CodeMirror(CodeMirror.replace(textarea), {
        parserfile: ["tokenizejavascript.js", "parsejavascript.js"],
        stylesheet: "lib/CodeMirror-0.67/css/jscolors.css",
        path: "lib/CodeMirror-0.67/js/",
        content: document.getElementById("code").value,
        lineNumbers: true,
        height: "100%"
    });
    
    this.jacobiController = new JacobiController({
        id: "solJacobi"
    });

    this.gsController = new GSController({
        id: "solGS"
    });

    this.sorController = new SORController({
        id: "solSOR"
    });

    this.init = function(){
        eval(this.getCode());
    }

    this.execute = function(){
        this.init();
        
        var error = false;

        // Comprobar Datos
        if (!window.A){
            new EquationDialog("Debes de insertar la matriz A en el editor usando la variable <b>A</b>.");
            error = true;
        }
        if (!window.B){
            new EquationDialog("Debes de insertar la matriz B en el editor usando la variable <b>B</b>.");
            error = true;
        }
        if (!window.Tol){
            new EquationDialog("Debes de insertar la Tolerancia en el editor usando la variable <b>Tol</b>.");
            error = true;
        }
        if (!window.W){
            new EquationDialog("Debes de insertar el valor de W (0 < W < 2) en el editor isando la variable <b>W</b>.");
            error = true;
        }
        if (!window.MaxIte){
            new EquationDialog("Debes de insertar el número maximo de iteraciones en el editor usando la variable <b>MaxIte</b>.");
            error = true;
        }

        if (!error){
            this.jacobiController.solve({
                A: window.A,
                B: window.B,
                MaxIte: window.MaxIte,
                Tol: window.Tol,
                Pini: window.Pini
            });

            this.gsController.solve({
                A: window.A,
                B: window.B,
                MaxIte: window.MaxIte,
                Tol: window.Tol,
                Pini: window.Pini
            });

            this.sorController.solve({
                A: window.A,
                B: window.B,
                MaxIte: window.MaxIte,
                Tol: window.Tol,
                Pini: window.Pini,
                W: window.W
            });
            this.cleanVars();
        }
    }

    this.cleanVars = function(){
        window.A = null;
        window.B = null;
        window.Pini    = null;
        window.Tol     = 10E-6;    // Por defecto
        window.MaxIte  = 1000;     // Por defecto
        window.W       = null;
    }

    this.getCode = function(){
        return this.editor.getCode();
    }

    this.redo = function(){
        this.editor.redo();
    }

    this.undo = function(){
        this.editor.undo();
    }
}

