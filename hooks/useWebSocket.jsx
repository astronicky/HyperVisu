import { useEffect, useRef } from "react";

const useWebSocket = () => {
    const ws = useRef(new WebSocket('ws://192.168.106.65:9000')).current;

    // useEffect(() => {
    //     return () => {
    //         ws.close();
    //     }
    // }, []);

    return (event, callback) => {
        
        ws.onopen = () => {
            ws.send("for connection");
        };
        
        ws.onclose = (e) => {
            console.log("This is close", e);
        };

        ws.onerror = (e) => {
            console.log("This is error", e);
        };

        ws.onmessage = (e) => {
            let { data } = e;
            
            console.log('WebSocket: ======================')
            console.log(data);
            try {
                data = JSON.parse(data);
            } catch (err) {
                data = {};
            }
            
            if (data.event === event) {
                delete data.event;
                delete data.id;
                callback(data);
            }
            console.log('Web-----------------------')
            console.log(data);
        };
    };
};

export default useWebSocket;
