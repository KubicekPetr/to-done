import React from 'react'

function FloatingAction() {
    return (
        <div style={{
            position: "fixed",
            right: 23,
            bottom: 23,
            zIndex: 999,
        }}>
            <a className="uk-icon-button" data-uk-toggle="target: #modal-todo" uk-icon="plus" style={{
                width: 56,
                height: 56,
                color: "white",
                background: "#111",
                zIndex: 999,
                boxShadow: "3px 3px 2px 1px rgba(0, 0, 0, 0.2)",
            }}></a>
        </div>
    )
}

export default FloatingAction;
