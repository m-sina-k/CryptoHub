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

export function paginationBuilder(current: number, max: number) {
  let prev = current === 0 ? null : current - 1,
    next = current === max ? null : current + 1,
    items: (number | false)[] = [1]

  if (current === 0 && max === 0) return { current, prev, next, items }
  if (current > 4) items.push(false)

  let r = 2,
    r1 = current - r,
    r2 = current + r

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

  if (r2 + 1 < max) items.push(false)
  if (r2 < max) items.push(max)

  return { current, prev, next, items }
}
