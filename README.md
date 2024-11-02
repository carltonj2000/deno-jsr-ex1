# Deno With JSR Examples

- Run via `deno --allow-all <filename>`.
- Add packages via `deno add jsr:@std/streams`.
- Check via `deno check sing.ts`.

## References

- `deno1.json`
  - [fetch](https://youtu.be/oxVwTT-rZRo?si=YHOIxRVQjDMfLV9-)
  - [namespace api](https://youtu.be/p28ujFMrdA0?si=Uq-Cji07qr4skXzo)
- `deno.json`
  - [jsr](https://youtu.be/7uiL4WYvZVs?si=sBPoN6dbS16tpajb)
  - [deno.js](https://youtu.be/bTmO5Tfgke4?si=ThTJGb_t_J7p7i1U)
  - [ECMAScript](https://youtu.be/cTFBiwYY3vs?si=joruT-C2ze0XDn5W)
  - [tsx](https://youtu.be/KoM8ahe8O74?si=LjqDmzqxQw2xiT9x)

## Type Checking In Markdown

Check via: `deno check --doc-only README.md`.

```typescript
export default function sing(phrase: string, times: number): string {
  return Array(times).fill(phrase).join(" ");
}
```
