import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import eggIcon from '../../assets/eggLogo.png'
import userIcon from '../../assets/user-icon.svg'
import currencyCoin from '../../assets/currency.png'

import { useState } from 'react'
import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch, Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { currencySelector } from '../../config/currencyReducer'

const NavbarS = () => {
    const [searchVal, setSearchVal] = useState("/product:")
    const {url, path} = useRouteMatch()

    const currMoney = useSelector(currencySelector)

    const keyDownHandler = (event: any) => {
        if (event.key === "Enter") {
            event.preventDefault()
            
            window.location.replace(searchVal);
        }
    }
    
    return (
        <div className='nav-body'>
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <div className='brand-container'>
                        <Link to="/home">
                            <Navbar.Brand>
                                <img src={eggIcon} alt="logo" width="50px" height="auto" />
                            </Navbar.Brand>
                        </Link>
                        <Link to="/home" className='remove-underline'><div className='brand-name'>StorEgg</div></Link>
                    </div>
                    <div className='will-collapse'>
                        <div className='search-bar'>
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e:any) => setSearchVal("/myproduct:" + e.target.value)}
                                onKeyPress={keyDownHandler}
                                />
                                <Link to={searchVal}><Button variant="outline-light">Search</Button></Link>
                            </Form>
                        </div>
        
                        <div className='user-belonging'>
                            <div className='currency'>
                                <img src={currencyCoin} alt="" className='coin-icon'/>
                                <div className='coin-value'>{currMoney.value.toFixed(2)} Coin(s)</div>
                            </div>

                            <img src={userIcon} alt="" className='user-icon'/>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarS