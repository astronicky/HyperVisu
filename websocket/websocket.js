import React from "react";

const ws = React.useRef(new WebSocket('ws://192.168.106.65:9000')).current;

export const connection = () => {
    ws.onopen = () => {
        ws.send("for connection");
    };
};

export const close = () => {
    ws.onclose = (e) => {
        console.log("This is close", e)
    };
};

export const error = () => {
    ws.onerror = (e) => {
        console.log("This is error", e)
    };
};

export const message = () => {
    ws.onmessage = (e) => {
        console.log("This is message ==>", JSON.parse(e.data));
    };
}
