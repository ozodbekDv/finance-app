import TransactionSkeleton from "@/components/TransactionSkeleton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCollectionsData } from "@/hooks/useCollectionData";
import { NotebookText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function RecurringBills() {
  const { data, isPending } = useCollectionsData();

  const [sortBy, setSortBy] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = (data?.transactions ?? []).filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = filteredTransactions
    ?.sort((a, b) => {
      if (sortBy === "oldest") {
        return (
          new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime()
        );
      }
      if (sortBy === "aToZ") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "zToA") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "highest") {
        return b.amount - a.amount;
      }
      if (sortBy === "lowest") {
        return a.amount - b.amount;
      }
      return 0;
    })
    .slice(0, 10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container py-8 flex flex-col gap-8 lg:px-10 px-5"
    >
      <h1 className="text-3xl font-bold">Recurring Bills</h1>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div>
          <div className="flex flex-col gap-8 bg-gray-900 text-white rounded-[12px] p-6">
            <NotebookText className="w-10 h-10" />
            <div>
              <p className="text-[14px] w-[289px]">Total Bills</p>
              <h4 className="font-bold text-[32px]">$384.98</h4>
            </div>
          </div>
          <div className="rounded-[12px] p-6 bg-white mt-6">
            <h6 className="font-bold text-[16px] mb-5">Summary</h6>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between pb-4 border-b border-gray-500/15">
                <p className="text-[14px] text-gray-500">Paid Bills</p>
                <p className="font-bold text-[12px]">4 ($190.00)</p>
              </div>
              <div className="flex justify-between pb-4 border-b border-gray-500/15">
                <p className="text-[14px] text-gray-500">Total Upcoming</p>
                <p className="font-bold text-[12px]">4 ($194.98)</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] text-gray-500">Due Soon</p>
                <p className="font-bold text-[12px]">2 ($59.98)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[12px] p-8 flex flex-col gap-4  shadow-md">
          {/* Top */}
          <div className="flex justify-between mb-6 md:mb-0">
            {/* Search input */}
            <div className="flex items-center lg:gap-4 gap-2 border border-[#98908B] rounded-lg px-5 transition-all duration-300 w-[100px] lg:w-[200px] hover:w-64 focus-within:w-64 focus-within:px-2 py-3">
              <input
                className="outline-none w-10 focus-within:w-64 md:w-[40px] lg:w-full"
                type="text"
                onChange={handleSearchChange}
                placeholder="Search transaction"
              />
              <img src="../images/icon-search.svg" alt="" />
            </div>
            {/* Filter */}
            <div className=" flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 ">
                <span className="text-gray-500">Sort by</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="latest">Latest </SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="aToZ">A to Z</SelectItem>
                      <SelectItem value="zToA">Z to A</SelectItem>
                      <SelectItem value="highest">Highest</SelectItem>
                      <SelectItem value="lowest">Lowest</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex md:gap-8 justify-between w-full text-gray-500 text-[14px] border-b-[1px] border-gray-100 pb-4">
            <span className="">Bill Title</span>
            <span className="text-right w-[120px]">Due Date </span>
            <span className="text-left">Amount</span>
          </div>
          <div className="">
            {isPending ? (
              <div className="flex flex-col gap-4">
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
                <TransactionSkeleton />
              </div>
            ) : (
              <ul className="flex flex-col gap-4">
                {sortedTransactions?.map((item) => {
                  const date = new Date(item.date || 0);
                  const formattedDate = new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(date);

                  return (
                    <li
                      key={item.id}
                      className="flex pb-4 border-b-[1px] border-gray-100 w-full"
                    >
                      <img
                        className="w-10 h-10 rounded-full mr-3 md:mr-4"
                        src={item.avatar}
                        alt="user photo"
                      />
                      <div className="flex gap-8 items-center justify-between w-full">
                        <span className="font-bold text-[18px] w-[250px]">
                          {item.name}
                        </span>

                        <span className="w-[120px] ml-auto lg:ml-0 text-right">
                          {formattedDate}
                        </span>
                        <span
                          className={` ${
                            item.amount < 0 ? "text-red-500" : "text-gray-900"
                          }`}
                        >
                          ${Math.abs(item.amount)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RecurringBills;
