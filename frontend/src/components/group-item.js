import React from 'react';
import TodoCard from './todo-card';

function GroupItem({groupName, groupNumber, groupMembers}) {
    return (
        <div>
            <h4 className="uk-text-center">{groupName}</h4>
            <div id={`group${groupNumber}`} data-uk-sortable="group: sortable-group">
                {
                    groupMembers.map((name, index) => {
                        return <TodoCard name={name} key={index} />
                    })
                }
            </div>
        </div>
    );
}

export default GroupItem;