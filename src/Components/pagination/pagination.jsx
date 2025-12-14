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
        {totalPages > 2 && (
          <>
            {/* DOTS after page 1 */}
            {page > 3 && <span className="dots">…</span>}

            {/* PAGE 2 (only when page = 2) */}
            {page === 2 && Page(2, true)}

            {/* MIDDLE PAGE */}
            {page > 2 && page < totalPages - 1 && Page(page, true)}

            {/* DOTS before last page */}
            {page < totalPages - 2 && <span className="dots">…</span>}

            {/* LAST PAGE */}
            {Page(totalPages, page === totalPages)}
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
