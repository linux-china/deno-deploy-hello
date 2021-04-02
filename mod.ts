addEventListener("fetch", (event: Event) => {
  const response = new Response("Hello Leijuan!", {
    headers: { "content-type": "text/plain" },
  });
  (event as FetchEvent).respondWith(response);
});
