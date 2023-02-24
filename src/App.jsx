import { useEffect, useState } from 'react'
import {fetchCategories, fetchData} from "./api"
import FlashList from './FlashList'

function App() {
  const [data, setData] = useState([])
  const [Categorise, setCategorise] = useState([])
  const [amount, setAmount] = useState(10)
  const [cate, setCate] = useState(9)

const getQuiz = async () => {
  const res =  await fetchData(amount,cate)

  setData(res.results)
}
const getCate = async () => {
  const res =  await fetchCategories()
  setCategorise(res.trivia_categories)

}

const handleSubmit = (e) => {
  e.preventDefault()
  getQuiz()
}

useEffect(() => {
  getCate()
},[])

  return (
    <div className="App">
      <div >
        <form className="search-bar" onSubmit={handleSubmit}>
          <div className="cate">
          <label htmlFor='cate'>Categorise: </label>
            <select id="cate">
            {Categorise.map((item) => (
              <option key={item.id} value={item.id} >{item.name}</option>
            ))}
            </select>
          </div>

          <div className='amount'>
            <label htmlFor='amount'>Amount: </label>
            <input id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>

          <button type='submit'>Generate</button>
        </form>

        <FlashList data={data} />

      </div>


    </div>
  )
}

export default App
