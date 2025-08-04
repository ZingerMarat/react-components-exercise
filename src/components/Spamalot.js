import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    const res = []
    for (let i = 0; i < 500; i++) {
        res.push(<Spam key={i} />)
    }

    return (res)
}

export default Spamalot

