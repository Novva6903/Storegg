import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import '../product/Grid.css'

import logoImg from '../../assets/logo-storegg.png'
import minigame from '../../assets/minigame.png'
import { Button } from 'react-bootstrap'
import currencyCoin from '../../assets/currency.png'

import { Link } from 'react-router-dom'
import { IPreviewProduct } from '../../config/interface'

const Home = () => {
    const previewProduct: any = [
        {
            id: 3,
            title: "Mens Cotton Jacket",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            price: 55.99
        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            price: 695
        },
        {
            id: 12,
            title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            price: 114
        },
        {
            id: 18,
            title: "MBJ Women's Solid Short Sleeve Boat Neck V",
            image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            price: 9.85
        },
    ]

    return (
        <div className='home'>
            <div className='img-home'>
                <img src={logoImg} alt="" className='logo-img' />
            </div>
            <div className='product-preview'>
                <h1>Recommended Products</h1>
                <div className="products">
                    {previewProduct.map((product: IPreviewProduct) => {
                        return (
                            <div className='grid-home'>
                                <div className='img-box'>
                                    <img src={product.image} className="grid-img" alt="..." />
                                </div>

                                <div className='title-box'>
                                    <h5 className="card-title grid-title">{product.title}</h5>
                                </div>
                                
                                <div className='price'>
                                    <img src={currencyCoin} alt="" width="50vw" />
                                    <h5 className='price-text'> {product.price.toString()} </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to="/products"><Button variant="primary" className='button-1'>Redirect To Products</Button></Link>
            </div>
            <div className='minigame-preview'>
                <h1>Try Out Our Mini Game!</h1>
                <img src={minigame} alt="" className='minigame' />
                <Link to="/game"><Button variant="primary">Redirect To Mini Games</Button></Link>
                <div className='created-by'>Created by @Novva 2023</div>
            </div>
        </div>
        
    )
}

export default Home