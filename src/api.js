const BASE_URL = "https://opentdb.com/api.php?amount=10&category=9"


export const fetchData = async (amount, cate) => {
  const res = await  (await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${cate}`)).json()
  return res
}
export const fetchCategories = async () => {
  const res = await  (await fetch("https://opentdb.com/api_category.php" )).json()
  return res
}