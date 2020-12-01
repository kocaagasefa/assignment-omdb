import ReactPaginate from "react-paginate";
import classes from "./style.module.css";
import classNames from "classnames";
const Pagination = ({ pageCount, currentPage, onPageChange }) => (
  <ReactPaginate
    previousLabel={"<"}
    nextLabel={">"}
    breakLabel={"..."}
    pageCount={pageCount}
    forcePage={currentPage}
    onPageChange={onPageChange}
    containerClassName={"mb-0 pagination justify-content-center"}
    subContainerClassName={"pages pagination"}
    breakClassName={"break-me"}
    pageClassName="page-item"
    pageLinkClassName={classNames("page-link", classes.pageLink)}
    activeClassName={classNames("active", classes.activePageItem)}
    breakLinkClassName={classNames("page-link", classes.pageLink)}
    nextLinkClassName={classNames("page-link", classes.pageLink)}
    nextClassName="page-item"
    previousClassName="page-item"
    previousLinkClassName={classNames("page-link", classes.pageLink)}
    pageRangeDisplayed={3}
  />
);

export default Pagination;
