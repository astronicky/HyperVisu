import React, { useEffect, useRef } from 'react';
import Router from './router';

export default function App() {

    var ws = useRef(new WebSocket('ws://192.168.106.65:9000')).current;

    useEffect(() => {
        ws.onopen = () => {
            ws.send("for connection");
        };
        
        ws.onclose = (e) => {
            console.log("This is close", e)
        };

        ws.onerror = (e) => {
            console.log("This is error", e)
        };

        ws.onmessage = (e) => {
            console.log("This is message ==>", JSON.parse(e.data));
        };
    }, []);

    return (
        <Router /> 
    );
}