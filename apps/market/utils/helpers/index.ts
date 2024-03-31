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
