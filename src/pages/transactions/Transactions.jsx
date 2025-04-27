import { useState } from "react";
import { useCollectionsData } from "../../hooks/useCollectionData";
import style from "./Transactions.module.scss";

function Transactions() {
  const { data } = useCollectionsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("oldest");
  const [category, setCategory] = useState("all");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredTransactions = data?.transactions
    ?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (category === "all" ? true : item.category === category));

  const sortedTransactions = filteredTransactions
    ?.sort((a, b) => {
      if (sortBy === "oldest") {
        return new Date(a.date) - new Date(b.date);
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
    .slice(0, 6);

  return (
    <div className={style["transactions-page"]}>
      <h2 className={style["transactions-title"]}>Transactions</h2>
      <div className={style.transactions}>
        <div className={style["transactions-top"]}>
          {/* Search input */}
          <div className={style["transactions-search"]}>
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search transaction"
            />
            <img src="../images/icon-search.svg" alt="" />
          </div>
          {/* Filter */}
          <div className={style.transactions_filter}>
            <div>
              <span className={style["transactions_filter-caption"]}>
                Sort by
              </span>
              <select
                className={style["transactions_filter-select"]}
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="oldest">Oldest</option>
                <option value="aToZ">A to Z</option>
                <option value="zToA">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
            <div>
              <span className={style["transactions_filter-caption"]}>
                Category
              </span>
              <select
                className={style["transactions_filter-select"]}
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

        <div className={style["transactions_header"]}>
          <span className={style["transactions_header-recipient"]}>
            Recipient / Sender
          </span>
          <span className={style["transactions_header-category"]}>
            Category
          </span>
          <span className={style["transactions_header-transaction"]}>
            Transaction Date
          </span>
          <span className={style["transactions_header-amount"]}>Amount</span>
        </div>

        <div className={style["transactions-wrapper"]}>
          <ul>
            {sortedTransactions?.map((item) => {
              const date = new Date(item.date);
              const formattedDate = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(date);

              return (
                <li key={item.id} className={style.transaction}>
                  <div className={style["transaction-user"]}>
                    <img src={item.avatar} alt="user photo" />
                    <span>{item.name}</span>
                  </div>
                  <span className={style["transaction-category"]}>
                    {item.category}
                  </span>
                  <span className={style["transaction-date"]}>
                    {formattedDate}
                  </span>
                  <span
                    className={`${style["transaction-amount"]} ${
                      item.amount > 0
                        ? style["active-transaction"]
                        : style["passive-transaction"]
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
