export default function WalletPage() {
  return (
    <div className="h-screen w-full space-y-4 overflow-y-auto rounded-xl bg-[#111] p-8">
      <h1 className="mb-6 text-2xl font-bold">Wallet & Coins</h1>
      <p className="text-gray-300">
        Your current balance: <span className="text-yellow-400">1200 Coins</span>
      </p>
    </div>
  );
}
