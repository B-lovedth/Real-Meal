import { FaPizzaSlice, FaHamburger , FaReact} from 'react-icons/fa'
import { GiNoodles, GiMeat } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Category = () => {
  return (
    <Footer>
      <List>
        <h2>Popular</h2>
        <SLink to='/cuisine/Italian'>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink to='/cuisine/American'>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to='/cuisine/Thai'>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to='/cuisine/European'>
          <GiMeat />
          <h4>European</h4>
        </SLink>
        <h2>Cuisines</h2>
      </List>
      <p>Created by B-lovedth with ❤ and React<FaReact></FaReact></p>
    </Footer>
  );
}
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  bottom: 0;
  border-top: 1px solid #555;
  padding-top: 2rem;
  width: 80%;
  margin: 7rem auto 0.5rem;
  p {
    text-align: center;
    display:inline-flex;
    align-items:center;
    color: #1a1a1a;
    font-size: 1rem;
    font-weight: 600;
  }
`;
const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  /* margin: 2rem auto 0; */
  h4 {
    font-size: 0.7rem;
  }
  h2 {
    font-family: "Lobster Two";
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 1rem;
  text-decoration: none;
  background: linear-gradient(175deg, #b52b2b, #ff6c22);
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.7rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to bottom, #ff5500, #320000);
  }
  &:hover {
    background: linear-gradient(35deg, #333, #1a1a1a);
    transition: all 900ms ease-in;
  }
  @media (max-width: 1200px) {
    width: 3rem;
    height: 3rem;
    h4 {
      font-size: 0.55rem;
      font-weight: 600;
    }
    svg {
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export default Category
