import React  from 'react';
class Cartitem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />


                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>phone</div>
                    <div style={{color:'red'}}>Rs 999</div>
                    <div style={{color:'red'}}>qty</div>
                    <div className='cart-item-action'>
                        {}
                    </div>


                </div>
                
            </div>
        )
    }

}
const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'

    }
}
export default Cartitem;
