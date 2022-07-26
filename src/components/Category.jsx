import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks, GiMeat } from 'react-icons/gi'
import{} from 'react-icons/'
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
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background: linear-gradient(35deg, #5c5b5b , #313131);
    width:4rem;
    height:4rem;
    cursor:pointer;
    transform: scale(0.8);

    h4{
        color:white;
        font-size:0.7rem;
    }
    svg{
        color:white;
        font-size:1.5rem;
    }&.active{
        background: linear-gradient(to right, #21f239, #a3e940 );
    }
    @media(max-width:1200px) {
        width: 3rem;
        height: 3rem;
        h4{
            font-size:0.55rem;
            font-weight:600;
        }
        svg{
            font-size:1rem;
        }
    }
`
export default Category
