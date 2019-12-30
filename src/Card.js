import React from 'react';
import 'styles/card-styles.css'

export class Card extends React.Component {
    static defaultProps = {
        onDeletCard: () => {}
    };

    render() {
        return (
        <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        </div>
        );
    }
}