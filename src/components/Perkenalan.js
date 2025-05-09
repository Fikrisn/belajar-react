import React from 'react';

const Perkenalan = (props) => {
    const handleClick = (nama) => {
        console.log('click' + nama)
    }
    return (
    <div>
        <div>Nama saya adalah {props.nama}</div> 
        <div>Hobby saya adalah {props.hobby}</div>
        <button onClick={() => {handleClick(props.nama)}}>klik ini</button>
    </div>
    )
}

export default Perkenalan;