import 'bootstrap/dist/css/bootstrap.min.css'
import '../detailed_product/Detailed_Product.css'

import { Link, useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { detailSelector, fetchDetailProduct } from '../../config/detailProductReducer'
import { changeMoneyValue, currencySelector, increaseMoneyValue } from '../../config/currencyReducer'
import { useState } from 'react'
import currencyCoin from '../../assets/currency.png'
import { boughtSelector, removeProduct } from '../../config/productBoughtReducer'
import { decreaseValue } from '../../config/sellIdGeneratorReducer'

const DetailedMyProduct = () => {
    const history = useHistory()
    
    const backToPageBefore = () => {
        history.goBack()
    }
    
    const [success, setSuccess] = useState(false)
    
    const dispatch = useDispatch()

    const detailProductState = useSelector(detailSelector)
    
    const currency = useSelector(currencySelector)

    const boughtProduct = useSelector(boughtSelector)

    const SuccessAlert = () => {
        
        return (
            <>
                <div className='pop2'>
                    <div className='image-border'>
                        <img src={detailProductState.image} alt="" className='product-image' />
                    </div>
                    <h2>SUCCESS</h2>
                    <p>{detailProductState.title} was selled successfully!</p>
                    <p>Your Current Coin is {currency.value.toFixed(2)}</p>
                    <button className='btn btn-primary go-back-button' onClick={() => {
                        backToPageBefore()
                        dispatch(decreaseValue(detailProductState.id))
                        dispatch(removeProduct(detailProductState))
                    }}>Go Back</button>
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
                        <div className='buttons'>
                            <button className='btn btn-primary sell' onClick={() => {
                                dispatch(increaseMoneyValue(detailProductState.price))
                                setSuccess(true)
                            }}>Sell</button>
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
            <button onClick={() => {
                if (success) {
                    backToPageBefore()
                    dispatch(decreaseValue(detailProductState.id))
                    dispatch(removeProduct(detailProductState))
                }
                else {
                    backToPageBefore()
                }
            }} className="go-back-outer">
                <div className="outer">

                </div>
            </button>
            {success ? <SuccessAlert /> : <ShowPop />}
        </>
    )
}

export default DetailedMyProduct