import React from 'react';
import GroupItem from './group-item';

function Group() {
    const groups = ['Group1', 'Group2', 'Group3'];
    const groupMembers = [['Card1', 'Card2', 'Card3'], ['Card1', 'Card2', 'Card3'], ['Card1', 'Card2', 'Card3']];
    return (
        <div className="uk-child-width-1-3@s" data-uk-grid>
            {groups.map((group, index) => {
                return <GroupItem groupName={group} groupNumber={index} groupMembers={groupMembers[index]} />
            })}
        </div>
    );
}

export default Group;