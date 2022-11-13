import React from "react";

export default function Todo({todoobj, toggleIsCompleted}) {
    function handleTodoClick() {
        toggleIsCompleted(todoobj.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todoobj.isCompleted} onChange={handleTodoClick} />
                {todoobj.name}
            </label>
        </div>
    );
}