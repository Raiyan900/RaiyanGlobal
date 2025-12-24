import "./pagination.css";

export default function Pagination({ page, totalPages, setPage }) {

  const Page = (num, isActive = false) => (
    <span
      className={isActive ? "active" : ""}
      onClick={() => setPage(num)}
      style={{ cursor: "pointer" }}
    >
      {num}
    </span>
  );

  return (
    <div className="pagination">

      {/* PREV */}
      <button
        className="nav-btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <div className="pages">

        {/* ALWAYS SHOW PAGE 1 */}
        {Page(1, page === 1)}

        {/* If we have only 1 or 2 pages → show normally */}
        {totalPages === 2 && page === 2 && Page(2, true)}
        {totalPages === 2 && page === 1 && Page(2, false)}

        {/* If MORE than 2 pages, use advanced logic */}
        {totalPages > 1 && (
          <>
            {/* DOTS after page 1 */}
            {page > 3 && <span className="dots">…</span>}

            {/* PREVIOUS PAGE */}
            {page > 2 && Page(page - 1)}

            {/* CURRENT PAGE */}
            {page !== 1 && page !== totalPages && Page(page, true)}

            {/* NEXT PAGE */}
            {page < totalPages - 1 && Page(page + 1)}

            {/* DOTS before last */}
            {page < totalPages - 2 && <span className="dots">…</span>}

            {/* LAST PAGE */}
            {totalPages > 1 && Page(totalPages, page === totalPages)}
          </>
        )}


      </div>

      {/* NEXT */}
      <button
        className="nav-btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}
