import OverviewCardTop from "@/components/OverviewCardTop";
import MyChart from "@/components/PieChart";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

const data = { budgets: [{ id: 1, theme: "", category: "", maximum: "" }] };

function Budget() {
  return (
    <div className="container md:py-8 py-10 flex flex-col gap-8 lg:px-10 px-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Budgets</h1>
        <Button className="py-6">+ Add New Budget</Button>
      </div>
      <div className="flex gap-6">
        <div className="px-8 pb-8 rounded-[12px] bg-white">
          <MyChart className="h-[300px] w-[300px]" />

          <div>
            <h3 className="mb-6 font-bold w-[360px] text-[20px]">
              Spending Summary
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#277C78] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Entertainment</p>
                <h4 className="text-[16px] font-bold">
                  $15.00{" "}
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $50.00
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#82C9D7] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Bills</p>
                <h4 className="text-[16px] font-bold">
                  $150.00
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $750.00
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#F2CDAC] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Dining Out</p>
                <h4 className="text-[16px] font-bold">
                  $133.00
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $75.00
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#626070] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Personal Care</p>
                <h4 className="text-[16px] font-bold">
                  $40.00
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $100.00
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col bg-white rounded-[12px] p-8 w-full">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#277C78] rounded-full inline-block w-4 h-4" />
                <span className="font-bold text-[20px] text-gray-900">
                  Entertainment
                </span>
              </h2>
              <EllipsisVertical />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 w-[544px]">Maximum of $50.00</p>
              <div className="h-8 rounded-sm p-1 bg-[#F8F4F0]">
                <span className="block h-full w-[25%] rounded-sm bg-[#277C78]" />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-4">
                  <span className="bg-[#277C78] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Remaining</span>
                    <h4 className="font-bold text-[14px]">$35.00</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#F8F4F0] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Spent</span>
                    <h4 className="font-bold text-[14px]">$15.00</h4>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#F8F4F0] rounded-[12px]">
                <OverviewCardTop
                  path="/"
                  link="See All"
                  title="Latest Spending"
                />
                <div className="flex flex-col gap-3">
                  <div className="pb-3 border-b-1 border-gray-500 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-gray-500 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-gray-500 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
