import React, { useEffect, useState, } from 'react';

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue ="";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener); 
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
}

const Test = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div>
           <button onClick={enablePrevent}>Protect</button>
           <button onClick={disablePrevent}>Protect</button>
        </div>
    );
};

export default Test;