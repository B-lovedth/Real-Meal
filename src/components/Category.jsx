import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiMeat } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Category = () => {
    return (
        <List>
            <SLink to="/cuisine/Italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to="/cuisine/American">
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to="/cuisine/Thai">
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to="/cuisine/European">
                <GiMeat/>
                <h4>European</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin:0rem;
    h4{
        font-size:0.7rem;
    }
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #404040, #e45710);
  width: 3.5rem;
  height: 3.5rem;
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
    background: linear-gradient(to right, #e45710, #ef5454);
  }
  &:hover {
    background: linear-gradient(35deg, #f0532c, #7c7b7b);
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
