import { TextLineStream } from "@std/streams";
import { toTransformStream } from "@std/streams/to-transform-stream";

const response = await fetch("https://example.com/data.txt");

if (response.body) {
  const transformedStream = response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream())
    .pipeThrough(
      toTransformStream(async function* (src) {
        for await (const chunk of src) {
          yield chunk;
        }
      })
    );
  const reader = transformedStream.getReader();
  while (true) {
    const { value, done } = await reader.read();
    console.log(value);
    if (done) break;
  }
}
