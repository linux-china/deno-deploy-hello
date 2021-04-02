addEventListener("fetch", (event: Event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  (event as FetchEvent).respondWith(response);
});
