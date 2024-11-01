const arg0 = await Deno.args[0];
console.log({ arg0 });

const home = await Deno.env.get("HOME");
console.log({ home });

function handler(): Response {
  return new Response("It's happening");
}

Deno.serve(handler);
