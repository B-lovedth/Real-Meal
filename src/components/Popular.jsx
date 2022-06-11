import { useEffect, useState } from "react"

const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(() => {
    getPopular()
  }, [])
  
  const getPopular = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.MY_API_KEY}&number=9`)
      const data = await api.json()
      console.log(data) 
    }
  return (
    <div>
      Popular
    </div>
  )
}

export default Popular
