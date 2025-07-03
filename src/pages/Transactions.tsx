import { useCollectionsData } from "@/hooks/useCollectionData";
import { useState } from "react";

function Transactions() {
  const { data } = useCollectionsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("oldest");
  const [category, setCategory] = useState("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const filteredTransactions = (data?.transactions ?? [])
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (category === "all" ? true : item.category === category));

  const sortedTransactions = [
    {
      name: "John Doe",
      category: "Entertainment",
      date: "2023-10-01",
      amount: 100,
      avatar: "../images/avatar.png",
      id: "1",
    },
    ...filteredTransactions,
  ];

  // const sortedTransactions2 = filteredTransactions
  //   ?.sort((a, b) => {
  //     if (sortBy === "oldest") {
  //       return new Date(a.date) - new Date(b.date);
  //     }
  //     if (sortBy === "aToZ") {
  //       return a.name.localeCompare(b.name);
  //     }
  //     if (sortBy === "zToA") {
  //       return b.name.localeCompare(a.name);
  //     }
  //     if (sortBy === "highest") {
  //       return b.amount - a.amount;
  //     }
  //     if (sortBy === "lowest") {
  //       return a.amount - b.amount;
  //     }
  //     return 0;
  //   })
  //   .slice(0, 6);

  return (
    <div className="container py-8 flex flex-col gap-8 lg:px-10">
      <h1 className="font-bold text-3xl mt-2 mb-2.5">Transactions</h1>
      <div className="">
        <div className="">
          {/* Search input */}
          <div className="">
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search transaction"
            />
            <img src="../images/icon-search.svg" alt="" />
          </div>
          {/* Filter */}
          <div className="">
            <div>
              <span className="">Sort by</span>
              <select className="" value={sortBy} onChange={handleSortChange}>
                <option value="oldest">Oldest</option>
                <option value="aToZ">A to Z</option>
                <option value="zToA">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
            <div>
              <span className="">Category</span>
              <select
                className=""
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="all">All</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
          </div>
        </div>

        <div className="">
          <span className="">Recipient / Sender</span>
          <span className="">Category</span>
          <span className="">Transaction Date</span>
          <span className="">Amount</span>
        </div>

        <div className="">
          <ul>
            {sortedTransactions?.map((item) => {
              const date = new Date(item.date);
              const formattedDate = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(date);

              return (
                <li key={item.id} className="">
                  <div className="">
                    <img src={item.avatar} alt="user photo" />
                    <span>{item.name}</span>
                  </div>
                  <span className="">{item.category}</span>
                  <span className="">{formattedDate}</span>
                  <span
                    className={` ${
                      item.amount < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {item.amount}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
