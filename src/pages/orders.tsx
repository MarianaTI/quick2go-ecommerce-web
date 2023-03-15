import CreateOrder from "./api/order/CreateOrder";
import GetAllOrder from "./api/order/GetAllOrder";
import GetOneOrder from "./api/order/GetOneOrder";
import UpdateOrder from "./api/order/UpdateOrder";

function Orders() {
  return (
    <>
      <CreateOrder />
      <GetAllOrder />
      <UpdateOrder />
      <GetOneOrder />
    </>
  );
}
export default Orders;
