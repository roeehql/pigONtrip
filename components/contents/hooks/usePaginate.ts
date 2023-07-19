import { useState ,useEffect } from "react";

const usePaginate = ({listLength}:{listLength:number}) => {
    const itemsPerPage = 9;
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemFirstIndex, setItemFirstIndex] = useState(0);
    const [itemLastIndex, setItemLastIndex] = useState(itemsPerPage);
  

    const setFirstPage = () => {
      setCurrentPage(1);
      setItemFirstIndex(0);
      setItemLastIndex(itemsPerPage);
    }

    const setPrevPage = () => {
      setCurrentPage(current=>currentPage > 1 ? current - 1 : current);
      setItemFirstIndex((current) => currentPage > 1 ? current - itemsPerPage : 0); 
      setItemLastIndex((current) => currentPage > 1 ? current - itemsPerPage : itemsPerPage);
    }

    const setNextPage = () => {
      setCurrentPage(current=> currentPage === pageNumber? current : current + 1);
      setItemFirstIndex((current) => currentPage === pageNumber ? current : current + itemsPerPage );
      setItemLastIndex((current) => currentPage === pageNumber ? current: current + itemsPerPage );
    }

    const setPage = (page:number) => {
      setCurrentPage(page);
      setItemFirstIndex((page * itemsPerPage) -itemsPerPage);
      setItemLastIndex(page * itemsPerPage);      
    }

    const handlePage = (page:number | "이전" | "다음") => {
        if (page === 1) setFirstPage()
        if(page === "이전") setPrevPage()
        if(page === "다음") setNextPage()
        if(typeof page === "number") setPage(page)
    };

    useEffect(() => {
      setPageNumber(Math.ceil(listLength / itemsPerPage));
    }, [listLength]);

    return {handlePage, itemFirstIndex, itemLastIndex, pageNumber, currentPage}
}

export default usePaginate