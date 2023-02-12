import 'bootstrap/dist/css/bootstrap.min.css'
import '../product/Product.css'
import '../product/List.css'
import '../product/Grid.css'

import listImg from '../../assets/list.png'
import gridImg from '../../assets/grid.png'
import notFound from '../../assets/not-found.png'
import eggIcon from '../../assets/eggLogo.png'

import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
import { IProductAPIResult } from '../../config/interface'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailProduct } from '../../config/detailProductReducer'
import DetailedProduct from '../detailed_product/Detailed_Product'
import { boughtSelector } from '../../config/productBoughtReducer'
import DetailedMyProduct from '../detailed_my_product/DetailedMyProduct'

interface ISearchParams{
    search?: string
}

interface IIdParams{
    id?: string
}

const MyProduct = () => {

    const [loading, setLoading] = useState(false)
    const [view, setView] = useState("list")
    const {search} = useParams<ISearchParams>()
    const {id} = useParams<IIdParams>()
    const {url, path} = useRouteMatch()

    const [found, setFound] = useState<number>(0)
    var isComponentMounted = true;

    const dispatch = useDispatch()

    const boughtProduct = useSelector(boughtSelector)
    
    const Loading = () => {
        return (
            <div className='load'>
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
            </div>
        )
    }

    const changeView = () => {
        if (view === "list") setView("grid")
        else if (view === "grid") setView("list")
    }

    const ShowProductGrid = () => {
        setFound(0)
        return (
            <>
                <div className='router'>
                    <div><Link to="/home">Home</Link> &gt; <Link to="/products">Product List</Link></div>
                    <button className='list-grid-button' onClick={() => {changeView()}}><img src={gridImg} alt="" className='list-grid' /></button>
                </div>
                <div className='grid-view'>
                    {boughtProduct.bought.map((product: IProductAPIResult) => {
                        if (product.id.toString() === id) {
                            dispatch(fetchDetailProduct(product))
                        }

                        if (search) {
                            if (product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase() === search.toLowerCase()) {
                                setFound(1)
                                return (
                                    <div className='grid-home'>
                                        <div className='img-box'>
                                            <img src={product.image} className="grid-img" alt="..." />
                                        </div>
    
                                        <div className='title-box'>
                                            <h5 className="card-title grid-title">{product.title}</h5>
                                        </div>
                                        
                                        <div className='button-box'>
                                            <Link to={(url === "/myproducts/") ? `${url}` + product.id : `${url}/` + product.id}><button className="btn btn-primary">View Product Detail</button></Link>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        else {
                            setFound(1)
                            return (
                                <div className='grid-home'>
                                    <div className='img-box'>
                                        <img src={product.image} className="grid-img" alt="..." />
                                    </div>

                                    <div className='title-box'>
                                        <h5 className="card-title grid-title">{product.title}</h5>
                                    </div>
                                    
                                    <div className='button-box'>
                                    <Link to={(url === "/myproducts/") ? `${url}` + product.id : `${url}/` + product.id}><button className="btn btn-primary">View Product Detail</button></Link>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                {(found !== 0) ? <></> :
                    <div className='not-found-text'>
                        <h1 className='not-found-text-h1'>No Product(s) can be shown here that have been bought yet</h1>
                        <Link to="/products"><button className="btn btn-primary">Click Here to Buy Products</button></Link>
                    </div>
                }
            </>
        )
    }

    const ShowProductList = () => {
        setFound(0)
        return (
            <>
                <div className='router'>
                    <div><Link to="/home">Home</Link> &gt; <Link to="/products">Product List</Link> &gt; My Product List</div>
                    <button className='list-grid-button' onClick={() => {changeView()}}><img src={listImg} alt="" className='list-grid' /></button>
                </div>
                {boughtProduct.bought.map((product: IProductAPIResult) => {
                    if (product.id.toString() === id) {
                        dispatch(fetchDetailProduct(product))
                    }

                    if (search) {
                        if (product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase() === search.toLowerCase()) {
                            setFound(1)
                            return (
                                <div className='card-home'>
                                    <div className="card-container">
                                        <div className='img-container'>
                                            <img src={product.image} alt="..." className='product-img' />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text desc">{product.description}</p>
                                            <Link to={(url === "/myproducts/") ? `${url}` + product.id : `${url}/` + product.id}><button className="btn btn-primary">View Product Detail</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    else {
                        setFound(1)
                        return (
                            <div className='card-home'>
                                <div className="card-container">
                                    <div className='img-container'>
                                        <img src={product.image} alt="..." className='product-img' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text desc">{product.description}</p>
                                        <Link to={(url === "/myproducts/") ? `${url}` + product.id : `${url}/` + product.id}><button className="btn btn-primary">View Product Detail</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                {(found !== 0) ? <></> :
                    <div className='not-found-text'>
                        <h1 className='not-found-text-h1'>No Product(s) can be shown here that have been bought yet</h1>
                        <Link to="/products"><button className="btn btn-primary">Click Here to Buy Products</button></Link>
                    </div>
                }
            </>
        )
    }

    return (
        <div className='home-body'>
            {id ? (loading ? <></> : <DetailedMyProduct />) : <></>}
            <Link to="/myproduct">
                <button className='my-product-block btn btn-primary'>
                    My Product
                </button>
            </Link>
            {loading ? <></> : 
                <button className='to-minigame btn btn-primary' onClick={() => window.location.replace("/game")}>
                    <img src={eggIcon} alt="logo" className='egg-mini' height="auto" />
                </button>
            }
            {loading ? <Loading /> : (view === "list") ? <ShowProductList /> : <ShowProductGrid />}
            <div className='created-by'>Created by @Novva 2023</div>
        </div>
    )
}

export default MyProduct