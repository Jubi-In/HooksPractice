import React, { useEffect, useState, } from 'react';

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!confirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }

    return confirmAction;
};

const Test = () => {
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("ARE YOU SURE?", deleteWorld, abort);
    return (
        <div>
           <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default Test;