
import GridCircle from './gridcircle';
import * as actions from '../actions';
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {start} from '../actions'

export default function GridBoard(props){
   //var arr=props.ar;
  // console.log(props.ar);
  // const grid =[];
  
    const game = useSelector((state) => state.game)
    const requestRef = useRef()
    const lastUpdateTimeRef = useRef(0)
    const progressTimeRef = useRef(0)
  const dispatch = useDispatch()
    const { grid,n,  isRunning,speed,step,count } = game
   
    const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRunning) {
            return 
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time
        }
        const deltaTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += deltaTime
        if (progressTimeRef.current > speed) {
           // init_shift(n,grid,count,step )
            place(grid,n,step,count)
           // dispatch({type:actions.START,payload:{grid:grid,count:count}})
            progressTimeRef.current = 0
        }
        lastUpdateTimeRef.current = time
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning])
     const place= (grid,n,step,count)=>{
        //const newGrid = [...grid];
        console.log("point 0")
        if (count===0){
          init_shift(n,grid,count,step)
         dispatch({type:actions.UPDATE,payload:{grid:grid,count:count+1,step:step}})
         console.log("point 1")
        }
        if (count===1){
         communicate(n,grid,count,step)
         dispatch({type:actions.UPDATE,payload:{grid:grid,count:count+1,step:step}})
         console.log("point 2")
        }
        if (count===2){
         final_rotate(n,grid,count,step)
         dispatch({type:actions.UPDATE,payload:{grid:grid,count:count+1,step:step}})
        }
        if(count===3){
            dispatch({type:actions.PAUSE,payload:{grid:grid,isRunning:false}})
        }
    }
    
    //PRINT() CHANGES TO STORE.DISPATCH({TYPE,PAYLOAD:{}})
     const init_shift = (p,grid,count,step ) => {
        const newGrid = [...grid];
        for(var j=0;j<p;j++)
          {
                    
                    var pos=j;
                        while(pos)  
                            {  
                                            var temp = newGrid[0][j];  
                                        for(var i = 0; i < p - 1; i++)  
                                    {	
                                                newGrid[i][j] = newGrid[i + 1][j];  
                            }
                                            
                                        newGrid[p - 1][j] = temp;  
                                      // print(p,grid);
                                      console.log("11111");
                                       dispatch({type:actions.PRINT,payload:{grid:newGrid,count:count,step:step}})
                                        pos--;
                                    }  
                      
          }
      }
    
      
    
    
    
    
     const communicate=(p,grid,count,step)=>
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
    
     const final_rotate=(p,grid,count,step)=>{	
    
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
    const gridSquares = grid.map((rowArray, row) => {
        
        return rowArray.map((square, col) => {
          
          let color = square
          
          
          // Generate a unique key for every block
          const k =String(col)+String(row);
          // Generate a grid square
          return <GridCircle
                  key={k}
                  color={1} 
                  id={k}
                  />
                      
                    
                      
                   
        })
      })
    /*
    for(let i=0;i<6;i++)
    {
        grid.push([]);
        for(let j=0;j<6;j++)
        {
            var t=String(j)+String(i);;       
            grid[i].push(<GridCircle key={t} color="1" id={1}></GridCircle>)
        }
    }
    */
    return (
        <div className=' grid-board'>
            {gridSquares}
        </div>
    )
}




