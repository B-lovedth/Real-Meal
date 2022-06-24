import React from 'react'

const Veggie = () => {
  return (
     <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pargination: false,
            drag: 'free',
            gap: '5rem',
          }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          }
          )}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Veggie
