import React from "react";
import {FileCheck, FileCheckFill} from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

function OrderItem({order}) {
    return(
        <li key={order.id} className={listBgColor(order.checkOut)}
              style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "5px",
            height: '50px'
           }}>
            <span style={{width: "40px" }}>{order.id})</span>
            <Link to={`/order/${order.id}`} style={{"fontWeight": "bold" , "textDecoration": "none", width: "130px", display:"flex", justifyContent:"start"}}>{order.name}</Link>
            <span >{order.phone_number}</span>
            {getdate(order.date)}
            <span >{order.total_price}</span>
            <span >{checkpointLogo(order.checkOut)}</span>
        </li>
    )
}
function checkpointLogo(checkout) {

                return checkout? <FileCheckFill/> : <FileCheck/>
            }

function listBgColor (checkOut) {
            return checkOut ? "list-group-item list-group-item-action mb-1 p-2 list-group-item-success" : "list-group-item list-group-item-action mb-1 p-2 list-group-item-danger"
        }

function getdate(jsonString){
     if (!jsonString) return "";
    const jsonObject = JSON.parse(jsonString);
    return `${jsonObject.day}-${jsonObject.month}-${jsonObject.year}`;
}


export default OrderItem;