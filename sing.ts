export default function sing(phrase: string, times: number): string {
  return Array(times).fill(phrase).join(" ");
}
