import { Link } from 'react-router-dom'
import styled from 'styled-components';

const SCuisine = () => {
  return (
    <Grid>
      <StyledLink to='/cuisine/African'>African</StyledLink>
      <StyledLink to='/cuisine/American'>American</StyledLink>
      <StyledLink to='/cuisine/British'>British</StyledLink>
      <StyledLink to='/cuisine/Cajun'>Cajun</StyledLink>
      <StyledLink to='/cuisine/Caribbean'>Caribbean</StyledLink>
      <StyledLink to='/cuisine/European'>European</StyledLink>
      <StyledLink to='/cuisine/French'>French</StyledLink>
      <StyledLink to='/cuisine/German'>German</StyledLink>
      <StyledLink to='/cuisine/Greek'>Greek</StyledLink>
      <StyledLink to='/cuisine/Indian'>Indian</StyledLink>
      <StyledLink to='/cuisine/Irish'>Irish</StyledLink>
      <StyledLink to='/cuisine/Italian'>Italian</StyledLink>
      <StyledLink to='/cuisine/Japanese'>Japanese</StyledLink>
      <StyledLink to='/cuisine/Jewish'>Jewish</StyledLink>
      <StyledLink to='/cuisine/Korean'>Korean</StyledLink>
      <StyledLink to='/cuisine/Latin American'>Latin American</StyledLink>
      <StyledLink to='/cuisine/Mediterranean'>Mediterranean</StyledLink>
      <StyledLink to='/cuisine/Mexican'>Mexican</StyledLink>
      <StyledLink to='/cuisine/Middle Eastern'>Middle Eastern</StyledLink>
      <StyledLink to='/cuisine/Nordic'>Nordic</StyledLink>
      <StyledLink to='/cuisine/Southern'>Southern</StyledLink>
      <StyledLink to='/cuisine/Spanish'>Spanish</StyledLink>
      <StyledLink to='/cuisine/Thai'>Thai</StyledLink>
      <StyledLink to='/cuisine/Vietnamese'>Vietnamese</StyledLink>

    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1.5rem;
  margin: 4rem 3rem;
  text-align:center;
`;

const StyledLink = styled(Link)`
  font-weight:600;  
  text-decoration:none;
  &:hover{
    color:#00df34;
    font-weight:800;
  }
  &:active{
    color:white;
    background: linear-gradient(to right, #21f239, #a3e940);
  }
`
export default SCuisine
