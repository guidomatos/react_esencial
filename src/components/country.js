import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

export class Country extends Component {
    delete = name => {
        this.props.onDelete(name);
    };

    componentWillUnmount() {
        console.log('Componente desmontado');
    }

    render() {
        return (
            <li>
                <IconButton size="small" onClick={() => this.delete(this.props.name)}>
                    <Delete></Delete>
                </IconButton>
                {this.props.name}
            </li>
        );
    }
}

export default Country;