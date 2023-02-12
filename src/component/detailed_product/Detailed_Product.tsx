import 'bootstrap/dist/css/bootstrap.min.css'
import './Detailed_Product.css'

import { Link, useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { detailSelector, fetchDetailProduct } from '../../config/detailProductReducer'
import { changeMoneyValue, currencySelector } from '../../config/currencyReducer'
import { decreaseMoneyValue } from '../../config/currencyReducer'
import { useState } from 'react'
import currencyCoin from '../../assets/currency.png'
import { addProduct, boughtSelector } from '../../config/productBoughtReducer'
import { increaseValue, sellIdSelector } from '../../config/sellIdGeneratorReducer'

const DetailedProduct = () => {
    const history = useHistory()
    
    const backToPageBefore = () => {
        history.goBack()
    }
    
    const [success, setSuccess] = useState(false)
    
    const dispatch = useDispatch()

    const detailProductState = useSelector(detailSelector)
    const currency = useSelector(currencySelector)
    const boughtProduct = useSelector(boughtSelector)
    const sellId = useSelector(sellIdSelector)

    const myProduct = {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0,
        }
    }

    const convertProductToMyProduct = () => {
        myProduct.id = sellId.value
        myProduct.title = detailProductState.title
        myProduct.price = detailProductState.price
        myProduct.description = detailProductState.description
        myProduct.category = detailProductState.category
        myProduct.image = detailProductState.image
        myProduct.rating = detailProductState.rating

        dispatch(increaseValue())
        dispatch(addProduct(myProduct))
    }

    const SuccessAlert = () => {
        
        return (
            <>
                <div className='pop2'>
                    <div className='image-border'>
                        <img src={detailProductState.image} alt="" className='product-image' />
                    </div>
                    <h2>SUCCESS</h2>
                    <p>{detailProductState.title} was Bought successfully!</p>
                    <p>Your Current Coin is {currency.value.toFixed(2)}</p>
                    <button className='btn btn-primary go-back-button' onClick={() => {backToPageBefore()}}>Go Back</button>
                </div>
            </>
        )
    }

    const ShowPop = () => {
        return (
            <div className='pop'>
                <p>{boughtProduct.title}</p>
                <h1>{detailProductState.title}</h1>
                <div className='content'>
                    <div className='left'>
                        <div className='image-border'>
                            <img src={detailProductState.image} alt="" className='product-image' />
                        </div>
                        <div className='button-places'>
                            {(currency.value > detailProductState.price)
                             ? <button className='btn btn-primary buy' onClick={() => {
                                dispatch(decreaseMoneyValue(detailProductState.price))
                                convertProductToMyProduct()
                                setSuccess(true)
                            }}>Buy</button>
                             : <button className='btn btn-secondary buy'>Buy</button>
                            }
                            <button className='btn btn-outline-primary go-back-button' onClick={() => {backToPageBefore()}}>Go Back</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className='price'>
                            <img src={currencyCoin} alt="" width="50vw" />
                            <h2> {detailProductState.price.toString()}</h2>
                        </div>
                        <h4>Description:</h4>
                        <p className='desc'>{detailProductState.description}</p>
                        <h4>Category:</h4>
                        <Link to={"/products:" + detailProductState.category}><button className='category btn btn-warning'>{detailProductState.category}</button></Link>
                        <h4>⭐ {detailProductState.rating.rate} ({detailProductState.rating.count})</h4>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <button onClick={() => {backToPageBefore()}} className="go-back-outer">
                <div className="outer">

                </div>
            </button>
            {success ? <SuccessAlert /> : <ShowPop />}
        </>
    )
}

export default DetailedProduct