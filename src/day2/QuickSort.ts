function partition(arr: number[], left: number, right: number): number {
  let pivot = arr[right]
  let i = left - 1

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j]
      arr[j] = temp;

    }
  }

  // swap pivot
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;
  return i + 1;

}

function qs(arr: number[], left: number, right: number) {

  if (left < right) {

    var pivot = partition(arr, left, right);
    qs(arr, left, pivot - 1);
    qs(arr, pivot + 1, right);
  }
}


export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}



const test = [3, 2, 5, 0, 1, 8, 7, 6, 9, 4]

quick_sort(test)
console.log(test)