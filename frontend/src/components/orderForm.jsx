import React, {useEffect, useState} from 'react'
import {Form} from "react-router-dom"
import axios from "axios";

function OrderForm() {
    const [name, setName] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [framType, setSelectedFramType] = useState('')
    const [framBrand, setSelectedFramBrand] = useState('')
    const [framPrice, setFramPrice] = useState("")
    const [LSPH, setLSPH] = useState("")
    const [LCYL, setLCYL] = useState("")
    const [LAXIS, setLAXIS] = useState("")
    const [RSPH, setRSPH] = useState("")
    const [RCYL, setRCYL] = useState("")
    const [RAXIS, setRAXIS] = useState("")
    const [pd, setpd] = useState("")
    const [eyeGlassLens, setEyeGlassLens] = useState("")
    const [eyeGlassPrice, setEyeGlassPrice] = useState("")
    const [checkout, setSelectedCheckout] = useState("")

    const AddOrderHandler = () => {
        const order =  {
            "name": name,
            "phone_number": phone_number,
            "frame_Type": framType,
            "frame_brand": framBrand,
            "frame_price": parseInt(framPrice, 10),
            "od": JSON.stringify({'SPH': RSPH, 'CYL': RCYL, 'AXIS': RAXIS}),
            "os": JSON.stringify({'SPH': LSPH, 'CYL': LCYL, 'AXIS': LAXIS}),
            "pd": pd,
            "eyeglass_lense": eyeGlassLens,
            "eyeglass_lense_price": parseInt(eyeGlassPrice, 10),
            "checkOut": checkout
        }
        axios.post("http://127.0.0.1:8000/orders", order).then(res => {
                console.log(res.data)
            })
        console.log(order)
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }
    const handlePhoneNumberChange = event =>{
        setPhone_number(event.target.value)
    }

    const handleFrameTypeChange = event =>{
        setSelectedFramType(event.target.value)
    }

    const handleFrameBrandChange = event =>{
        setSelectedFramBrand(event.target.value)
    }

    const handleFramPriceChange = event =>{
        setFramPrice(event.target.value)
    }
    const handleRSPHChange = event =>{
        setRSPH(event.target.value)
    }

    const handleRCYLChange = event =>{
        setRCYL(event.target.value)
    }

    const handleRAXISChange = event =>{
        setRAXIS(event.target.value)
    }

    const handleLSPHChange = event =>{
        setLSPH(event.target.value)
    }

    const handleLCYLChange = event =>{
        setLCYL(event.target.value)
    }

    const handleLAXISChange = event =>{
        setLAXIS(event.target.value)
    }

    const handlePdChange = event =>{
        setpd(event.target.value)
    }

    const handleEyeGlassLensChange = event =>{
        setEyeGlassLens(event.target.value)
    }

    const handleEyeglassPrice = event =>{
        setEyeGlassPrice(event.target.value)
    }



    const handleCheckoutChange = event =>{
        const checkValue = event.target.value === "true";
        setSelectedCheckout(checkValue)
        console.log( typeof checkValue, checkValue)
    }

    return (
        <Form method= "POST" style={{
            marginTop: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: "center",
            justifyContent: "center"
      }}>
            <div className="card text-center"
                 style={{
                     width: "500px"
                 }}
            >
                <div className="card-header bg-primary text-white">
                    Add Order
                </div>
                <div className="card-body">
                    <input className="mb-2 input-group form-control titleIn"
                          onChange={handleNameChange} placeholder="Customer Name" value={name}/>
                    <input className="mb-2 input-group form-control titleIn"
                          onChange={handlePhoneNumberChange} placeholder="Customer Phone number" value={phone_number}/>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text price" htmlFor="inputGroupSelect01">Frame Type</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01"
                                onChange={handleFrameTypeChange} value={framType} style={{width: "200px"}}>
                            <option>Choose...</option>
                            <option value="eyeglass">Eyeglass</option>
                            <option value="sunglass">Sunglass</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text price" htmlFor="inputGroupSelect01">Brand</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01"
                                onChange={handleFrameBrandChange} value={framBrand} style={{width: "150px", marginRight: '5px'}}>
                            <option >Choose...</option>
                            <option value="Georgio Valenti">Georgio Valenti</option>
                            <option value="Comfort">Comfort</option>
                        </select>
                        <div className="input-group-prepend ">
                            <span className="price input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control price"
                               onChange={handleFramPriceChange} value={framPrice} placeholder="Price"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{width: "60px"}}>Right</span>
                        </div>
                        <input type="text" className="form-control" onChange={handleRSPHChange} value={RSPH} placeholder="SPH"/>
                        <input type="text" className="form-control" onChange={handleRCYLChange} value={RCYL} placeholder="CYL"/>
                        <input type="text" className="form-control" onChange={handleRAXISChange} value={RAXIS} placeholder="AXIS"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{width: "60px"}}>Left</span>
                        </div>
                        <input type="text" className="form-control" onChange={handleLSPHChange} value={LSPH} placeholder="SPH"/>
                        <input type="text" className="form-control" onChange={handleLCYLChange} value={LCYL} placeholder="CYL"/>
                        <input type="text" className="form-control" onChange={handleLAXISChange} value={LAXIS} placeholder="AXIS"/>
                    </div>
                    <div className="input-group mb-3" style={{width: "200px"}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">PD</span>
                        </div>
                        <input type="text" className="form-control"  onChange={handlePdChange} value={pd}/>
                    </div>
                    <span style={{display: 'flex', flexDirection: "row"}}>
                        <input className=" price mb-2 input-group form-control titleIn" onChange={handleEyeGlassLensChange}
                               value={eyeGlassLens} placeholder="Eyeglass Lense" style={{width: "400px", marginRight: "5px"}}/>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend ">
                            <span className="price input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control price" onChange={handleEyeglassPrice}
                               value={eyeGlassPrice} placeholder="Price"/>
                    </div>
                    </span>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text price" htmlFor="inputGroupSelect01">Checkout</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={handleCheckoutChange}
                                value={checkout} style={{width: "200px"}}>
                            <option >Choose...</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-outline-primary mx-2 mb-3" style={{
                    "width": "480px",
                    "fontWeight": "bold"
                }}
                        onClick={AddOrderHandler}
                >
                    Add
                </button>
            </div>
        </Form>

    )
}

export default OrderForm;