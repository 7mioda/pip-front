import { useEffect } from 'react';

export default (topic, callback) => useEffect(() => {
  const eventSource = new EventSource(
    `http://localhost:8001/hub?topic=${encodeURIComponent(topic)}`
  );
  eventSource.onmessage = (event) => {
    // Will be called every time an update is published by the server
    callback(JSON.parse(event.data));
  };
}, [callback, topic]);
