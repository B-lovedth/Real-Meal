import { useEffect, useState } from "react"

const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(() => {
    getPopular()
  },[])
  
   const getPopular = () => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      .then((res) => res.json())
      .then((data) => setPopular(data))
       .catch((err) => console.log(err.message))
     console.log("popular",popular)
    }
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Popular
