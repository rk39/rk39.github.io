import React, { Component } from 'react';

export default class Checkbox extends React.Component {
    render() {
        return(
            <div className="check">
                <input 
                    name="boxChange"
                    type="checkbox"
                />
            </div>
        )
    }
}