import RewardTabs from "@/src/components/pages/super-admin/reward/RewardTabs"

const rewardPage = () => {
  return (
    <>
        <div className="bg-[#F3F4F6] rounded-2xl p-2 md:px-9 md:py-6">
            <h3 className="text-2xl font-semibold mb-4">Reward</h3>
            <RewardTabs/>
        </div>
    </>
  )
}

export default rewardPage;