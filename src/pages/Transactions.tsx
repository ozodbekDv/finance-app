import { useCollectionsData } from "@/hooks/useCollectionData";
import { useState } from "react";

// shadcn/ui components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import TransactionSkeleton from "@/components/TransactionSkeleton";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Funnel,
  NotepadTextDashed,
} from "lucide-react";

function Transactions() {
  const { data, isPending } = useCollectionsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [category, setCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSortBy(e.target.value);
  // };

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setCategory(e.target.value);
  // };

  const filteredTransactions = (data?.transactions ?? [])
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (category === "all" ? true : item.category === category));

  const total = Math.ceil((data?.transactions?.length ?? 0) / limit);

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
    .slice(startIndex, endIndex);

  return (
    <div className="container py-8 flex flex-col gap-8 lg:px-10 px-5">
      <h1 className="font-bold text-3xl mt-2 mb-2.5">Transactions</h1>
      <div className="bg-white rounded-[12px] p-8 flex flex-col gap-4  shadow-md">
        {/* Top */}
        <div className="flex justify-between mb-6 md:mb-0">
          {/* Search input */}
          <div className="flex items-center lg:gap-4 gap-2 border border-[#98908B] rounded-lg px-5 transition-all duration-300 w-[100px] lg:w-[320px] hover:w-64 focus-within:w-64 focus-within:px-2 py-3">
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
            <NotepadTextDashed className="block md:hidden" />
            <Funnel className="block md:hidden" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-gray-500">Category</span>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Bills">Bills</SelectItem>
                    <SelectItem value="Groceries">Groceries</SelectItem>
                    <SelectItem value="Dining Out">Dining Out</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex md:gap-8 justify-between w-full text-gray-500 text-[14px] border-b-[1px] border-gray-100 pb-4">
          <div className="flex justify-between w-full">
            <span className="w-[570px]">Recipient / Sender</span>
            <span className="text-right w-[120px]">Category</span>
          </div>

          <div className="flex justify-between w-full">
            <span className="w-[120px] text-left">Transaction Date</span>
            <span className="ml-auto">Amount</span>
          </div>
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
                    className="flex pb-4 border-b-[1px] border-gray-100"
                  >
                    <img
                      className="w-10 h-10 rounded-full mr-3 md:mr-4"
                      src={item.avatar}
                      alt="user photo"
                    />
                    <div className="flex gap-8 items-center justify-between w-full">
                      <div className="flex flex-col lg:flex-row justify-between w-full">
                        <span className="font-bold text-[18px] w-[250px]">
                          {item.name}
                        </span>
                        <span className="w-[120px] h-[18px] text-left">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex justify-between lg:flex-row flex-col w-full text-right">
                        <span className="w-[120px] ml-auto lg:ml-0 text-right">
                          {formattedDate}
                        </span>
                        <span
                          className={` ${
                            item.amount < 0 ? "text-red-500" : "text-green-500"
                          }`}
                        >
                          {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="flex justify-between mt-6">
          <Button
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
            variant={"outline"}
            className="py-2.5 px-4 border border-[#98908B] rounded-[8px] active:scale-110 transform transition duration-300"
          >
            <ChevronLeft /> Prev
          </Button>
          <div className="flex justify-between gap-2">
            {Array.from({ length: total }, (_, index) => {
              return (
                <Button
                  onClick={() => setCurrentPage(index + 1)}
                  key={index}
                  variant={"outline"}
                  className={`w-10 h-10 border border-[#98908B] rounded-[8px] active:scale-110 transform transition duration-300 ${
                    currentPage === index + 1 ? "bg-gray-900 text-white" : ""
                  }`}
                >
                  {index + 1}
                </Button>
              );
            })}
          </div>
          <Button
            onClick={() =>
              setCurrentPage(currentPage < total ? currentPage + 1 : 1)
            }
            variant={"outline"}
            className="py-2.5 px-4 border border-[#98908B] rounded-[8px] active:scale-110 transform transition duration-300 "
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
