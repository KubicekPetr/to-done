import React from 'react';

function TodoCard() {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-card-small">
            Hi i'm a card
            <div className="uk-align-right">
                <div className="uk-iconnav">
                    <li className="#!" uk-icon="icon: file-edit"></li>
                    <li className="#!" uk-icon="icon: copy"></li>
                    <li className="#!" uk-icon="icon: trash"></li>
                </div>
            </div>
        </div>
    );
}

export default TodoCard;