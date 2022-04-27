    let plane = 'plane';
    let sevenFiftySeven = '757';
    let drone = 'drone';
    let shellPlane = null;
    let nothing = "";

    let flyingObjects = [plane, sevenFiftySeven, drone, shellPlane, nothing];

    function takeOff(x){
        for(var i = 0; i < x.length; i++){
            if(x[i]){
                console.log(x[i]  + "is preparing for takeoff!");
            }
            else 
            {
                console.log(x[i]  + "cannot fly!");
            }
        }
   }
   takeOff(flyingObjects); 

   