import React from "react";

export default function Todo({todoobj}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todoobj.isCompleted} />
                {todoobj.name}
            </label>
        </div>
    );
}