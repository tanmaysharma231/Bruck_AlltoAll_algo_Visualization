export const defaultState = () => {
    return {
      // Create an empty grid
      n: 6 ,
      grid: gridDefault(),
      // Get a new random shape
      //shape: randomShape(),
      // set rotation of the shape to 0
     // rotation: 0,
      // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
      //x: 5,
      //y: -4,
      // set the index of the next shape to a new random shape
     // nextShape: randomShape(),
      // Tell the game that it's currently running
      isRunning: true,
      speed:1000,
      scheme:'default',
      elem:0,
      step:0,//log k base 2
      count:0,//count goes from 0-initial rotate,1-communication,3-final rotate
      // Game isn't over yet
      gameOver: false
    }
  }
  export const gridDefault = () => {

    //var arr= new Object();
    // var n=Number(t);
     const gfg = [];
  // console.log("t1");
     // Loop to create 2D array using 1D array
    // document.write("Creating 2D array <br>");
    /*
    for (var i = 0; i < gfg.length; i++) {
         gfg[i] = [];
     }
      */    
     // Loop to initialize 2D array elements.
     
     for (var i = 0; i < 6; i++) {
         gfg[i] = [];
         for (var j = 0; j < 6; j++) {
       
             gfg[i][j] = String(j)+String(i);
         }
     }
     
    
    // arr=gfg;
   return gfg;
  }

  export const setgrid = ( n,scheme,elements) =>{
    const gfg = [];

      for (var i = 0; i < n; i++) {
          gfg[i] = [];
          for (var j = 0; j < n; j++) {
        
              gfg[i][j] = String(j)+String(i);
          }
      }
      return gfg;
  }
/*
  export const place= (grid,n,step,count)=>{
    const newGrid = [...grid];
    if(count===0){
      init_shift(n,grid)
      return 
    }



  }
  
  export const init_shift = (p,grid ) => {
    const newGrid = [...grid];
    for(var j=0;j<p;j++)
	  {
				
				var pos=j;
	    			while(pos)  
	    				{  
	                    				var temp = newgrid[0][j];  
    		        				for(var i = 0; i < p - 1; i++)  
        	        			{	
											newgrid[i][j] = newgrid[i + 1][j];  
                        }
										
 		        				   newgrid[p - 1][j] = temp;  
 		        				 // print(p,grid);
 		         				  pos--;
 	    			   		}  
                  
	  }
  }

  export const print= (p,grid)=> {
   
     for(var i=0;i<p;i++){
        printf("\n");
           for(var j=0;j<p;j++)
             {  cout <<setw(2) << setfill('0') <<grid[i][j]<<"\t" ;       
         
           
               }
      
  }
    printf("\n");
        sleep(1);
     
 }
 */
