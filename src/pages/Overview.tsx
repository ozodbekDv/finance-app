import OverviewCardTop from "@/components/OverviewCardTop";
import { BadgeDollarSign } from "lucide-react";
import MyChart from "@/components/PieChart";

function Overview() {
  return (
    <div className="container md:py-8 py-10 flex flex-col gap-8 lg:px-10 px-5">
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
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
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
          <div className="overview-cards">
            <OverviewCardTop path="/" link="View All" title="Transactions" />
            <div className="flex flex-col gap-5 mt-8">
              <div className="pb-5 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-400 rounded-full inline-block"></span>
                  <h3 className="font-bold text-[14px]">Emma Richardson</h3>
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-green-700">
                    +$75.50
                  </h4>
                  <p>19 Aug 2024</p>
                </div>
              </div>
              <div className="pb-5 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-400 rounded-full inline-block"></span>
                  <h3 className="font-bold text-[14px]">Savory Bites Bistro</h3>
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-green-700">
                    -$55.50
                  </h4>
                  <p>19 Aug 2024</p>
                </div>
              </div>
              <div className="pb-5 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-400 rounded-full inline-block"></span>
                  <h3 className="font-bold text-[14px]">Daniel Carter</h3>
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-green-700">
                    -$42.30
                  </h4>
                  <p>18 Aug 2024</p>
                </div>
              </div>
              <div className="pb-5 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-400 rounded-full inline-block"></span>
                  <h3 className="font-bold text-[14px]">Sun Park</h3>
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-green-700">
                    +$120.00
                  </h4>
                  <p>17 Aug 2024</p>
                </div>
              </div>
              <div className="pb-5 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-gray-400 rounded-full inline-block"></span>
                  <h3 className="font-bold text-[14px]">Urban Services Hub</h3>
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-green-700">
                    -$65.00
                  </h4>
                  <p>17 Aug 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overview-cards">
            <OverviewCardTop path="/" link="See Details" title="Budgets" />
            <div className="flex gap-4 mt-5">
              <MyChart />
              <div className="flex flex-col gap-4">
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#277C78] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Entertainment</span>
                    <h4 className="font-bold text-[14px] text-gray-900">
                      $50.00
                    </h4>
                  </div>
                </div>
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#82C9D7] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Bills</span>
                    <h4 className="font-bold text-[14px] text-gray-900">
                      $750.00
                    </h4>
                  </div>
                </div>
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#F2CDAC] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Dining Out</span>
                    <h4 className="font-bold text-[14px] text-gray-900">
                      $75.00
                    </h4>
                  </div>
                </div>
                <div className="px-4 flex gap-4 items-center">
                  <span className="rounded-[8px] w-1 h-10 bg-[#626070] inline-block"></span>
                  <div>
                    <span className="text-[12px]">Personal Care</span>
                    <h4 className="font-bold text-[14px] text-gray-900">
                      $100.00
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-cards">
            <OverviewCardTop
              path="/"
              title="Recurring Bills"
              link="See Details"
            />
            <div className="flex flex-col gap-3 mt-8 ">
              <div className="overview-bills border-l-[4px] border-[#277C78]">
                <p className="text-[14px] text-gray-500">Paid Bills</p>
                <h4 className="font-bold text-[14px]">$190.00</h4>
              </div>
              <div className="overview-bills border-l-[4px] border-[#F2CDAC]">
                <p className="text-[14px] text-gray-500">Total Upcoming</p>
                <h4 className="font-bold text-[14px]">$194.98</h4>
              </div>
              <div className="overview-bills border-l-[4px] border-[#82C9D7]">
                <p className="text-[14px] text-gray-500">Due Soon</p>
                <h4 className="font-bold text-[14px]">$59.98</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
