const file = await Deno.readTextFile("thoughts.txt");
console.log(file);

await Deno.writeTextFile("thoughts.txt", "winter is the most fun season\n", {
  append: true,
});
