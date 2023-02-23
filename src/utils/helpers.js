export const formatPrice = (price) => {
  const newPrice = Intl.NumberFormat("fil-PH", {
    style: "currency",
    currency: "PHP",
  }).format((price / 100) * 55.08)

  return newPrice
}

export const getUniqueValues = (products, type) => {
  let unique = products.map((item) => item[type])
  if (type === "colors") {
    unique = unique.flat()
  }
  return ["all", ...new Set(unique)]
}
