export const place= (grid,n,step,count)=>{
    //const newGrid = [...grid];
    
    if (count===0){
      init_shift(n,grid,count,step)
     dispatch({type:actions.UPDATE,payload:{count:count+1,step:step}})
    }
    if (count===1){
     communicate(n,grid,count,step)
     dispatch({type:actions.UPDATE,payload:{count:count+1,step:step}})
    }
    if (count===2){
     final_rotate(n,grid,count,step)
     dispatch({type:actions.UPDATE,payload:{count:count+1,step:step}})
    }
    if(count===3){
        dispatch({type:actions.PAUSE,payload:{isRunning:false}})
    }
}

//PRINT() CHANGES TO STORE.DISPATCH({TYPE,PAYLOAD:{}})
export const init_shift = (p,grid,count,step ) => {
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
                                   dispatch({type:actions.PRINT,payload:{grid:newgrid,count:count,step:step}})
 		         				  pos--;
 	    			   		}  
                  
	  }
  }

  




export const communicate=(p,grid,count,step)=>
{
	const t=[...grid];

	const logg=Math.log2(p);

	for(var k=0;k<=logg;k++)
				{
					// Move data to (i+2k)
        	 			   for(var i=0;i<p;i++)
							{   
	 	 			          	if ((i>> k)&1)
									{
																	
										for(var j=0;j<p;j++)
											{
											
												var pos=(j+Math.pow(2,k)); 
												
												if(pos>=p)
												   pos=pos-p;
												   	
													
													t[i][pos] = grid[i][j];  
  												 dispatch({type:actions.PRINT,payload:{grid:t,count:count,step:step}})
  												
										  }
													  
                       			 				
	        	   		      		}
	        	   		      	
							}
				}	
					
	 dispatch({type:actions.PRINT,payload:{grid:t,count:count,step:step}})
}

export const final_rotate=(p,grid,count,step)=>{	

	const t=[...grid];
	for(var j=0;j<p;j++)
	        for(var i=0;i<p;i++)	
				{
					if(j-i<0)
						t[(j-i+6)][j]=grid[i][j];
						t[j-i][j]=grid[i][j];								
				}
	dispatch({type:actions.PRINT,payload:{grid:t,count:count,step:step}})
		
	
}

