// await Deno.open("thoughts.txt", { read: true, write: true, create: true });
const file = await Deno.open("thoughts.txt", { read: true, write: true });
const encoder = new TextEncoder();
const data = encoder.encode("\nI think basil is underrated");
await file.write(data);
file.close();
