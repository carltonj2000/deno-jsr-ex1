export function sing(phrase: string, times: number): string {
  return Array(times).fill(phrase).join(" ");
}

console.log(sing("la", 3));
