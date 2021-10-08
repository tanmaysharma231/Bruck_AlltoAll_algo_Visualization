export const PAUSE="PAUSE"
export const START="START"
export const RESUME="RESUME"
export const STEP="STEP"
export const RESTART="RESTART"
export const PRINT="print"
export const UPDATE="update"

export const pause=()=>{
    return {type:PAUSE}
}
export const start=()=>{
    return {type:START}
}
export const resume=()=>{
    return {type:RESUME}
}
export const step=()=>{
    return {type:STEP}
}
export const restart=()=>{
    return {type:RESTART}
}