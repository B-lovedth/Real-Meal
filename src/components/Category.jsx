import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
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
            </NavLink>
            <NavLink to="/cuisine/Thai">
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to="/cuisine/Japanese">
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </List>
    )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin:1rem 0rem;
    h4{
        font-size:0.7rem;
    }
`
export default Category
