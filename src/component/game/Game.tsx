import './Game.css'
import goldCoin from '../../assets/gold-coin.png'
import silverCoin from '../../assets/silver-coin.png'
import bronzeCoin from '../../assets/bronze-coin.png'
import eggFull from '../../assets/egg-full.png'
import eggBroken from '../../assets/egg-broken.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currencySelector, decreaseMoneyValue, increaseMoneyValue } from '../../config/currencyReducer'

const Game = () => {
    const [state, setState] = useState(0)
    const [coin, setCoin] = useState("")

    const currency = useSelector(currencySelector)
    const dispatch = useDispatch()

    const gacha = () => {
        let a = Math.floor(Math.random()*27)

        if (a < 2) {
            setState(3)
            setCoin("Gold")
            dispatch(increaseMoneyValue(100))
        }
        else if (a >= 2 && a <= 6) {
            setState(2)
            setCoin("Silver")
            dispatch(increaseMoneyValue(25))
        }
        else {
            setState(1)
            setCoin("Bronze")
            dispatch(increaseMoneyValue(10))
        }
    }

    return(
        <>
            <div className='game-home'>
                <h2>Collect Coins</h2>
                <div className="coins">
                    <div className="coin">
                        <img src={goldCoin} alt="" className='coin-image'/>
                        <h4 className='coin-text'>100 Coins</h4>
                    </div>
                    <div className="coin">
                        <img src={silverCoin} alt="" className='coin-image'/>
                        <h4 className='coin-text'>25 Coins</h4>
                    </div>
                    <div className="coin">
                        <img src={bronzeCoin} alt="" className='coin-image'/>
                        <h4 className='coin-text'>10 Coins</h4>
                    </div>
                </div>
                {state ? <><h5>Congratulations!</h5><h5>You Got a {coin} Coin!</h5></> : <h5>Click on the egg to collect coins!</h5>}
                {state ?
                    <div>
                        <img src={eggBroken} alt="" className='egg-image2' />
                        {state === 1 ? <img src={bronzeCoin} alt="" className='coin-image-egg'/> : (state === 2 ? <img src={silverCoin} alt="" className='coin-image-egg'/> : <img src={goldCoin} alt="" className='coin-image-egg'/>)}
                    </div> 
                : <img src={eggFull} alt="" className='egg-image' onClick={() => gacha()} />}
                <div className="button-place">
                    <button className='btn btn-primary retry' onClick={() => setState(0)}>Retry</button>
                    <button className='btn btn-outline-primary donate' onClick={() => dispatch(decreaseMoneyValue(50))}>Donate 50 Coins</button>
                </div>
            </div>
        </>
    )
}

export default Game