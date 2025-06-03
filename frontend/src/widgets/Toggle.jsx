import React from "react"
import { useState, useEffect } from "react";
import "../index.css"

const Toggle = () => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = (event) => {
        setToggled(!toggled);
    };

    useEffect(() => {
        const root = document.documentElement;
    
        if (toggled) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
    }, [toggled]);

    return (
        <input type="checkbox" name="schemetoggle" checked={toggled} onChange={handleToggle} />
    )
  }

export default Toggle