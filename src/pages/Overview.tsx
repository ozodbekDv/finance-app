import OverviewCardTop from "@/components/OverviewCardTop";
import { BadgeDollarSign } from "lucide-react";

function Overview() {
  return (
    <div className="container py-8 flex flex-col gap-8 pr-10">
      <h1 className="font-bold text-3xl mt-2 mb-2.5">Overview</h1>
      <div className="flex md:flex-row flex-col md:justify-between md:gap-6 gap-3">
        <div className="p-6 rounded-[12px] text-white bg-gray-900 w-full">
          <span>Current Balance</span>
          <h4 className="font-bold text-[32px]">$4,836.00</h4>
        </div>
        <div className="p-6 rounded-[12px] bg-white text-gray-900 w-full">
          <span>Income</span>
          <h4 className="font-bold text-[32px]">$3,814.25</h4>
        </div>
        <div className="p-6 rounded-[12px] bg-white text-gray-900 w-full">
          <span>Expenses</span>
          <h4 className="font-bold text-[32px]">$1,700.50</h4>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-4 mb-4">
          <div className="overview-cards">
            <OverviewCardTop path="/" link="See Details" title="Pots" />
            <div className="mt-5 flex gap-5">
              <div className="flex items-center gap-4 bg-beige-100 py-4 px-4 rounded-[12px] bg-[#F8F4F0] grow">
                <BadgeDollarSign className="text-[#277c78]" />
                <div>
                  <p className="mb-[11px]">Total Saved</p>
                  <h4 className="font-bold text-[32px] text-gray-900">$850</h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#277C78] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Savings</span>
                    <h4 className="font-bold text-[14px] text-gray-900">
                      $159
                    </h4>
                  </div>
                </div>
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#82C9D7] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Gift</span>
                    <h4 className="font-bold text-[14px] text-gray-900">$40</h4>
                  </div>
                </div>
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#626070] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Concert Ticket</span>
                    <h4 className="font-bold text-[14px] text-gray-900">
                      $110
                    </h4>
                  </div>
                </div>
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#F2CDAC] inline-block"></span>
                  <div>
                    <span className="text-[12px]">New Laptop</span>
                    <h4 className="font-bold text-[14px] text-gray-900">$10</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-cards">transactions</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overview-cards">budgets</div>
          <div className="overview-cards">recurring bills</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
