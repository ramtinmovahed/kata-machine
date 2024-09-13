export default function bs_list(haystack: number[], needle: number): boolean {
  // 1 2 3 4 5 6
  //     ^
  let left = 0
  let right = haystack.length;
  while (left < right) {
    let midpoint = Math.floor((left + right) / 2)
    if (haystack[midpoint] === needle) {
      return true
    }
    else if (haystack[midpoint] < needle) {
      left = midpoint + 1;
    }
    else if (haystack[midpoint] > needle) {
      right = midpoint;
    }
  }
  return false
}