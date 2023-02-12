import React, { useEffect } from 'react'
import './App.css'

import Product from './component/product/Product'
import NavbarS from './component/navbar/NavbarS'
import Home from './component/home/Home'
import notFound from './assets/not-found.png'

import { BrowserRouter, Route, Switch, useHistory, useRouteMatch, Redirect } from 'react-router-dom'
import { currencySelector } from './config/currencyReducer'
import { useDispatch, useSelector } from 'react-redux'
import MyProduct from './component/my_product/MyProduct'
import NavbarMyProduct from './component/navbar/NavbarMyProduct'
import NavbarGame from './component/navbar/NavbarGame'
import Game from './component/game/Game'



function App() {
  const dispatch = useDispatch()
  const currMoney = useSelector(currencySelector)
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <NavbarGame />
          <Home />
        </Route>

        <Route path={"/home"} exact>
          <Redirect push to="/" />
        </Route>

        <Route path={"/products"} exact>
          <div>
            <NavbarS />
            <Product />
          </div>
        </Route>

        <Route path={"/products:"}>
          <div>
            <NavbarS />
            <Product />
          </div>
        </Route>

        <Route path={"/products::search"} exact>
          <div>
            <NavbarS />
            <Product />
          </div>
        </Route>

        <Route path={"/products/:id"} exact>
          <div>
            <NavbarS />
            <Product />
          </div>
        </Route>

        <Route path={"/products::search/:id"}>
          <div>
            <NavbarS />
            <Product />
          </div>
        </Route>

        <Route path={"/myproduct"} exact>
          <div>
            <NavbarMyProduct />
            <MyProduct />
          </div>
        </Route>

        <Route path={"/myproduct:"}>
          <div>
            <NavbarMyProduct />
            <MyProduct />
          </div>
        </Route>

        <Route path={"/myproduct::search"} exact>
          <div>
            <NavbarMyProduct />
            <MyProduct />
          </div>
        </Route>

        <Route path={"/myproduct/:id"} exact>
          <div>
            <NavbarMyProduct />
            <MyProduct />
          </div>
        </Route>

        <Route path={"/myproduct::search/:id"}>
          <div>
            <NavbarMyProduct />
            <MyProduct />
          </div>
        </Route>

        <Route path={"/game"}>
          <div>
            <NavbarGame />
            <Game />
          </div>
        </Route>

        <Route path={"*"}>
          <div>
            <NavbarS />
            <img src={notFound} className='not-found' />
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App