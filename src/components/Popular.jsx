import { useEffect, useState } from "react"

const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(() => {
    getPopular()
  }, [])
  
   const getPopular = () => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message))
    }
  return (
    <div>
      Popular
    </div>
  )
}

export default Popular
