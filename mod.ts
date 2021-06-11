// @ts-ignore
const handler = (event: FetchEvent) => {
    const response = new Response("Hello Deno!!", {
        headers: {"content-type": "text/plain"},
    });
    event.respondWith(response);
};

addEventListener("fetch", handler);
