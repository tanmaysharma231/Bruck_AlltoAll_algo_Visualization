import React from 'react';

export default function GridCircle(props){
const classes ='col grid-circle color-${props.color}';
return <div className={classes}>{props.id}</div>

}