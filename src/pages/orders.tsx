import CreateOrder from "./api/order/CreateOrder";
import GetAllOrder from "./api/order/GetAllOrder";

function Orders() {
  return (
    <>
      <CreateOrder />
      <GetAllOrder />
    </>
  );
}
export default Orders;
