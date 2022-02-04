function solve(meal_cost, tip_percent, tax_percent) {
  let tip = (meal_cost / 100) * tip_percent;
  let tax =  (meal_cost / 100) * tax_percent;
  let total_cost = Math.round(meal_cost + tip + tax);
  return total_cost;
}