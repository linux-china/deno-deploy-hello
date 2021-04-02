// @ts-ignore
const handler = (event: FetchEvent) => {
    const response = new Response("Hello Leijuan!!", {
        headers: {"content-type": "text/plain"},
    });
    event.respondWith(response);
};

addEventListener("fetch", handler);
