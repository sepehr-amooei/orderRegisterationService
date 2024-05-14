import OrderItem from "./orderItem";
function OrderListView(props) {
    return(
        <ul>
                {
                    props.orders.map(order =>
                    <OrderItem order= { order }/>
               )}
        </ul>
    )
}

export default OrderListView;