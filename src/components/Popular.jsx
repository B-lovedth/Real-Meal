import { useEffect, useState } from "react"

const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(() => {
    getPopular()
  }, [])
  
  const getPopular = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=bc1c151e3fa14f08b95f4f4b7e42d1d4&number=9`)
      const data = await api.json()
      console.log(data) 
      console.log(process.env.REACT_APP_API_KEY)
    }
  return (
    <div>
      Popular
    </div>
  )
}

export default Popular
