import CoinHistoryTable from "@/src/components/pages/super-admin/order-history/CoinHistoryTable"
import OrderHistoryTabs from "@/src/components/pages/super-admin/order-history/OrderHistoryTabs"

const VipPlanPage = () => {
  return (
    <>
        <div className="bg-[#F3F4F6] rounded-2xl p-2 md:px-9 md:py-6">
            <h3 className="text-2xl font-semibold mb-4">Order History</h3>
            <OrderHistoryTabs/>
        </div>
    </>
  )
}

export default VipPlanPage