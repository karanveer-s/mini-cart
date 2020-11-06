import React from 'react';

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="row my-2 text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem' }} className="img-fluid" alt="dish"/>
            </div>
            
            <div className="col-10 mx-auto col-lg-2">
                {title}
            </div>
            
            <div className="col-10 mx-auto col-lg-2">
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <span ><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><i className="fa fa-trash-o" style={{fontSize:"24px",color:"red"}}></i>
                        </span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>total: {total} </strong>
            </div>
        </div>
    );
}
