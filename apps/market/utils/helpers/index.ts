export const formatLargeNumber = (num: string) => {
  return Math.abs(Number(num)) >= 1.0e9
    ? Math.abs(Number((Number(num) / 1.0e9).toFixed(2))).toLocaleString() + " B"
    : Math.abs(Number(num)) >= 1.0e6
      ? Math.abs(Number((Number(num) / 1.0e6).toFixed(2))).toLocaleString() +
        " M"
      : Math.abs(Number(num)) >= 1.0e3
        ? Math.abs(Number((Number(num) / 1.0e3).toFixed(2))).toLocaleString() +
          " K"
        : Math.abs(Number(num))
}

export function paginationBuilder(currentPage: number, totalPages: number) {
  let current = currentPage,
    last = totalPages,
    delta = 2,
    left = current - delta,
    right = current + delta + 2,
    range: number[] = [],
    rangeWithDots: (false | number)[] = [],
    l

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push(false)
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}
