import { useEffect, useState } from "react"

const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(() => {
    getPopular()
  },[])
  
   const getPopular = () => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.recipes)
        console.log(popular)
        console.log(data)
      })
      .catch((err) => console.log(err.message))
    }
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div>
            <p>{recipe.title}</p>
            {console.log(recipe.title)}
          </div>
        )
      })}
    </div>
  )
}

export default Popular
