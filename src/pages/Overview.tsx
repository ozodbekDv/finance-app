import React from "react";

// components
import OverviewCardTop from "@/components/OverviewCardTop";
import MyChart from "@/components/PieChart";

// icons
import { BadgeDollarSign } from "lucide-react";

// custom hooks
import { useCollectionsData } from "@/hooks/useCollectionData";

// framer-motion
import { motion } from "framer-motion";

function Overview() {
  const [total, setTotal] = React.useState(0);
  const { data, isPending } = useCollectionsData();

  const pots = data?.pots.slice(0, 4);
  React.useEffect(() => {
    if (pots && pots.length > 0) {
      const totalSaved = pots.reduce((acc, pot) => acc + pot.total, 0);
      setTotal(totalSaved);
    }
  }, [pots]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container md:py-8 py-10 flex flex-col gap-8 lg:px-10 px-5"
    >
      <h1 className="font-bold text-3xl mt-2 mb-2.5">Overview</h1>
      <div className="flex md:flex-row flex-col md:justify-between md:gap-6 gap-3">
        <div className="p-6 rounded-[12px] text-white bg-gray-900 w-full">
          <span>Current Balance</span>
          <h4 className="font-bold text-[32px]">
            ${isPending ? "0" : data && data.balance[0]?.current}
          </h4>
        </div>
        <div className="p-6 rounded-[12px] bg-white text-gray-900 w-full">
          <span>Income</span>
          <h4 className="font-bold text-[32px]">
            ${isPending ? "0" : data && data.balance[0].income}
          </h4>
        </div>
        <div className="p-6 rounded-[12px] bg-white text-gray-900 w-full">
          <span>Expenses</span>
          <h4 className="font-bold text-[32px]">
            ${isPending ? "0" : data && data.balance[0].expenses}
          </h4>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="flex flex-col gap-4 mb-4">
          <div className="overview-cards">
            <OverviewCardTop path="/pots" link="See Details" title="Pots" />
            <div className="mt-5 flex gap-5">
              <div className="flex items-center gap-4 bg-beige-100 py-4 px-4 rounded-[12px] bg-[#F8F4F0] grow">
                <BadgeDollarSign className="text-[#277c78]" />
                <div>
                  <p className="mb-[11px]">Total Saved</p>
                  <h4 className="font-bold text-[32px] text-gray-900">
                    ${total}
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {pots?.map((pot) => {
                  return (
                    <div className="px-4 flex gap-4 items-center" key={pot.id}>
                      <span
                        className={`rounded-[8px] w-1 h-10 bg-[${pot.theme}] inline-block`}
                      ></span>
                      <div>
                        <span className="text-[12px]">{pot.name}</span>
                        <h4 className="font-bold text-[14px] text-gray-900">
                          ${pot.total}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="overview-cards">
            <OverviewCardTop
              path="/transactions"
              link="View All"
              title="Transactions"
            />
            <div className="flex flex-col gap-5 mt-8">
              {data?.transactions.slice(0, 5).map((transaction) => {
                const date = new Date(transaction.date || 0);
                const formattedDate = new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(date);
                return (
                  <div
                    key={transaction.id}
                    className="pb-5 border-b border-gray-200 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10 h-10 bg-gray-400 rounded-full inline-block"
                        src={transaction.avatar}
                        alt={transaction.name + " avatar"}
                      />
                      <h3 className="font-bold text-[14px]">
                        {transaction.name}
                      </h3>
                    </div>
                    <div>
                      {transaction.amount > 0 ? (
                        <h4 className="font-bold text-[14px] text-green-700">
                          ${transaction.amount}
                        </h4>
                      ) : (
                        <h4 className="font-bold text-[14px] text-red-700">
                          -${transaction.amount * -1}
                        </h4>
                      )}

                      <p>{formattedDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overview-cards">
            <OverviewCardTop
              path="/budgets"
              link="See Details"
              title="Budgets"
            />
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
              path="/recurringBills"
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
    </motion.div>
  );
}

export default Overview;
