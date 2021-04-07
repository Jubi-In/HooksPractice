import React, { useEffect, useState, } from 'react';

const useBeforeLeave = onBefore => {

    const handle = event => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    }

    useEffect(() => {
        if (typeof onBefore === "function") {
            document.addEventListener("mouseleave", handle);
            return () => document.removeEventListener("mouseleave", handle);
        } else {
            return;
        }
    }, []);
};

const Test = () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);

    return (
        <div>
           <h1>hello</h1>
        </div>
    );
};

export default Test;