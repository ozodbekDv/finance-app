import React from "react";
import { EllipsisVertical } from "lucide-react";
import { Progress } from "./ui/progress";

function PotsCard() {
  return (
    <div className="flex flex-col gap-8 bg-white rounded-[12px] p-8 w-full">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          <span className="bg-[#277C78] rounded-full inline-block w-4 h-4" />
          <span className="font-bold text-[20px] text-gray-900">Savings</span>
        </h2>
        <EllipsisVertical />
      </div>
      <div>
        <div className="flex gap-4 items-center justify-between">
          <p className="text-gray-500 w-full">Total Saved</p>
          <h4 className="font-bold text-[32px]">$159.00</h4>
        </div>
        <div className="mt-4">
          <Progress color="#277C78" width="7%" value={7} />
          <div className="flex justify-between mt-[13px]">
            <p>7.95%</p>
            <p className="text-gray-500 text-[14px]">Target of $2,000</p>
          </div>
        </div>
      </div>
      <div className="flex  flex-row w-full gap-4">
        <button className="rounded-[8px] bg-[#F8F4F0] py-4 w-full">
          + Add Money
        </button>
        <button className="rounded-[8px] bg-[#F8F4F0] py-4 w-full">
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default React.memo(PotsCard);
