import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import OrderListView from "./components/orderListView";
import {orderBy} from 'lodash';

function App() {

  const [orderList, setOrderList] = useState([{}])
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchPhoneNumber, setSearchPhoneNumber] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
        .then(res => {
            let filteredOrders = res.data
            if(searchId || searchName || searchPhoneNumber){
                if(searchId){
                    filteredOrders = filteredOrders.filter((order) => {
                        return order.id.toString().includes(searchId);
                    }
                    )
                }
                if(searchName){
                    filteredOrders = filteredOrders.filter((order) => {
                        return order.name.includes(searchName);
                    }
                    )
                }
                if(searchPhoneNumber){
                    filteredOrders = filteredOrders.filter((order) => {
                        return order.phone_number.includes(searchPhoneNumber);
                    }
                    )
                }
            }
            const list = orderBy(filteredOrders,"id","desc")
            setOrderList(list)
        })
  }, [searchId,searchName,searchPhoneNumber]);

  const handleIdSearch = event =>{
      setSearchId(event.target.value)
  }

  const handleNameSearch = event =>{
      setSearchName(event.target.value)
  }

  const handlePhoneNumberSearch = event =>{
      setSearchPhoneNumber(event.target.value)
  }

  return (

      <div className="App container mx-auto">
          <h5 className="card-title bg-primary text-white" style={{
              margin: "50px 0 10PX 0",
              borderRadius: '5px',
              width: "600px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
          }}>Orders</h5>
          <div className="card" style={{
              width: '600px',
              height: '60vh',
          }}>
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search By Id"
                         onChange={handleIdSearch} value={searchId}/>
                  <input type="text" className="form-control" placeholder="Search By Name"
                         onChange={handleNameSearch} value={searchName}/>
                  <input type="text" className="form-control" placeholder="Search By Number"
                         onChange={handlePhoneNumberSearch} value={searchPhoneNumber}/>
              </div>
              <div className="card-body overflow-auto">
                  <div
                      style={{
                          marginLeft: '-30px',
                      }}
                  >
                      <OrderListView orders={orderList}/>
                  </div>
              </div>

          </div>
          <h6 className="card text-dark bg-warning py-1 mb-3" style={{width: "600px", marginTop: '10px'}}>
              2024, All rights reserved &copy;
          </h6>
      </div>
  );
}


export default App;
