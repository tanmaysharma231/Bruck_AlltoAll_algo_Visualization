import { PAUSE,STEP,START,RESUME,RESTART ,PRINT,UPDATE} from "../actions";
import { defaultState,init_shift,setgrid  } from '../utils'
const gameReducer = (state = defaultState(), action) => {
  const { grid, n,step, count, isRunning } = state
    switch(action.type) {
      case PRINT:
        var newGrid = action.payload.grid
        // reset some things to start a new shape/block
        var newState = defaultState()
        newState.grid = newGrid
       // newState.count=action.payload.count+1
        //newState.step = 1
        newState.isRunning = isRunning
      
        return newState
  
        
        case UPDATE:
           newGrid = state.grid
        // reset some things to start a new shape/block
         newState = defaultState()
        newState.grid = newGrid
        newState.count=state.count+1
        newState.step =action.payload.step
        newState.isRunning = isRunning
      
        return newState
  
          
            
        case STEP:
          return state
    
        case START:
           newGrid = setgrid(n,grid,step,count)
          // reset some things to start a new shape/block
           newState = defaultState()
          newState.grid = newGrid
          newState.count=action.payload.count+5
          newState.step = 1
          newState.isRunning = isRunning
        
          return newState
    
        case RESUME:
    
          return state
    
        case PAUSE:
    
          return state
    
    
        case RESTART:
    
          return state
          
    
        default:
          return state
      }
    }
    
    export default gameReducer