import React from 'react'

function Modal() {
    return (
        <div id="modal-todo" data-uk-modal>
            <div className="uk-modal-dialog">
                <button className="uk-modal-close-default" type="button" data-uk-close></button>
                <div className="uk-modal-header">
                    <h2 class="uk-modal-title">Add Task</h2>
                </div>
                <div className="uk-modal-body">
                    <form>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="title-todo">Title</label>
                                <div className="uk-form-controls">
                                    <input id="title-todo" type="text" class="uk-input" placeholder="enter your task" />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="todo-description">Description</label>
                                <textarea
                                className="uk-textarea"
                                name="description-todo" 
                                id="description-todo"
                                rows="5"
                                placeholder="enter a description for your task...">       
                                </textarea>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="options-todo">State</label>
                                <select className="uk-select" id="option-todo" name="options-todo">
                                    <option disabled selected>Select the state for your task</option>
                                    <option>Waiting</option>
                                    <option>Started</option>
                                    <option>Finished</option>
                                </select>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button uk-button-default uk-margin-small-right uk-modal-close" type="button">Cancel</button>
                    <button className="uk-button uk-button-primary" type="button">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
