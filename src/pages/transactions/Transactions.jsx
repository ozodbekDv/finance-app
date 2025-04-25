import { useCollectionsData } from "../../hooks/useCollectionData";
import style from "./Transactions.module.scss";

function Transactions() {
  const { data } = useCollectionsData();

  return (
    <div className={style["transactions-page"]}>
      <h2 className={style["transactions-title"]}>Transactions</h2>
      <div className={style.transactions}>
        <div className={style["transactions-top"]}>
          {/* Search input */}
          <div className={style["transactions-search"]}>
            <input type="text" placeholder="Search transaction" />
            <img src="../images/icon-search.svg" alt="" />
          </div>
          {/* Filter */}
          <div className={style.transactions_filter}>
            <div>
              <span className={style["transactions_filter-caption"]}>
                Sort by
              </span>
              <select id="" className={style["transactions_filter-select"]}>
                <option value="oldest"> Oldest</option>
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
              <select id="" className={style["transactions_filter-select"]}>
                <option value="oldest"> Oldest</option>
                <option value="aToZ">A to Z</option>
                <option value="zToA">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
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
            {data &&
              data.transactions.slice(0, 6).map((item) => {
                const dateStr = item.date;
                const date = new Date(dateStr);

                // Boshqa formatga o‘zgartirish (19 Aug 2024 kabi)
                const options = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                const formattedDate = new Intl.DateTimeFormat(
                  "en-GB",
                  options
                ).format(date);

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
