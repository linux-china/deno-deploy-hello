dev:
  deployctl run --watch ./mod.ts

setup:
  deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -f https://deno.land/x/deploy/deployctl.ts
