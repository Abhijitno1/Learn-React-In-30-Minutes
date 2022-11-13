import React from "react";

export default function Todo({todoobj}) {
    return (
        <div>
            <label>
                {todoobj.name}
            </label>
        </div>
    );
}