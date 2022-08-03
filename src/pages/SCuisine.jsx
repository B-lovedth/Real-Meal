import { Link } from 'react-router-dom'
import styled from 'styled-components';

const SCuisine = () => {
  return (
    <Sdiv>
      <Title>Available Cuisines</Title>
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
    </Sdiv>
  );
}
const Sdiv = styled.div`
  height:100%;
  margin:0;
`
const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1.5rem;
  margin: 2rem 3rem;
  text-align: center;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    margin:0;
  }
`;
const Title = styled.h3`
  text-align: center;
  font-family: 'Lobster Two';
  font-size:2rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing:1.5px;
`;
const StyledLink = styled(Link)`
  font-weight: 600;
  color:#1f1f1f;
  padding: 1rem 3rem;
  text-decoration: none;
  border-radius: 18px;
  @media(max-width:960px){
    padding:1rem 2rem;
  }
  &:hover {
    color: #e45710;
  }
  &:active {
    color: white;
    background: linear-gradient(to right, #ffa31d, #ef5454);
  }
`;
export default SCuisine
