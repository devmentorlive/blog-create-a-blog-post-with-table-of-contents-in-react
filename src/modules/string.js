export function parameterize(str) {
  return str
    .toString()
    .split(" ")
    .map((word) => word.toLowerCase().replace(/[^a-z]+/g, ""))
    .join("-");
}
