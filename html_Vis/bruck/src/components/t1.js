
export let assign=(n)=>{
    var arr= new Object();
   // var n=Number(t);
    var gfg = new Array(n);
  
    // Loop to create 2D array using 1D array
   // document.write("Creating 2D array <br>");
   /*
   for (var i = 0; i < gfg.length; i++) {
        gfg[i] = [];
    }
     */    
    // Loop to initialize 2D array elements.
    
    for (var i = 0; i < n; i++) {
        gfg[i] = [];
        for (var j = 0; j < n; j++) {
      
            gfg[i][j] = String(j)+String(i);
        }
    }
    
    /*  
    // Loop to display the elements of 2D array.
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++)
      
        {
            document.write(gfg[i][j] + " ");
        }
        document.write("<br>");
    }
    */
    arr=gfg;
  return arr;
}
