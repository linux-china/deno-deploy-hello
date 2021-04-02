addEventListener("fetch", (event: Event) => {
    const fetchEvent = event as FetchEvent;
    const response = new Response("Hello Leijuan!!", {
        headers: {"content-type": "text/plain"},
    });
    fetchEvent.respondWith(response);
});
