import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { start, pause, step,restart,resume } from '../actions'

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.isRunning)
    return (
        <div className="controls">
            
            <button className="control-button" onClick={(e) => {
                dispatch(start())

            }}>Play</button>

            {/* right */}
            <button className="control-button" onClick={(e) => {
                dispatch(pause())
            }}>pause</button>

            {/* rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(step())
            }}>step</button>

            {/* down */}
            <button className="control-button" onClick={(e) => {
                dispatch(restart())
            }}>restart</button>

        </div>
    )
}