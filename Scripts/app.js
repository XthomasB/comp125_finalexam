var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update(
            
        );
    }
    function main() {
        var rollbutton = new createjs.Bitmap("Assets/images/rollButton.png"); 
        
        stage.addChild(rollbutton);
        rollbutton.x = 250;
        rollbutton.y = 250;   
        var die1 = new createjs.Bitmap("Assets/images/blank.png");
        stage.addChild(die1)
        var die2 = new createjs.Bitmap("Assets/images/blank.png");   
        stage.addChild(die2)
        die2.x =400 
            function rollbutton1(rollbutton) {
                this.rollbutton = rollbutton;
                
                die1 = (int)(Math.random()*6) + 1;
                die2 = (int)(Math.random()*6) + 1;
                }
                
                
        
    }

    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map