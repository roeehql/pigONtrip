import { useState ,useEffect } from "react";

const usePaginate = ({listLength}:{listLength:number}) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [itemFirstIndex, setItemFirstIndex] = useState(0);
    const [itemLastIndex, setItemLastIndex] = useState(6);
  
    const handlePage = (page:number | "이전" | "다음") => {
        if (page === 1) {
          setCurrentPage(page);
          setItemFirstIndex(0);
          setItemLastIndex(6);
        } else if(page === "이전"){
          setCurrentPage(current=>currentPage > 1 ? current - 1 : current);
          setItemFirstIndex((current) => currentPage > 1 ? current - itemsPerPage : 0); 
          setItemLastIndex((current) => currentPage > 1 ? current - itemsPerPage : 6);
        } else if(page === "다음"){
          setCurrentPage(current=> currentPage === pageNumber? current : current + 1);
          setItemFirstIndex((current) => currentPage === pageNumber ? current : current + itemsPerPage );
          setItemLastIndex((current) => currentPage === pageNumber ? current: current + itemsPerPage );
        }else {
          setCurrentPage(page);
          setItemFirstIndex((page * itemsPerPage) -itemsPerPage);
          setItemLastIndex(page * itemsPerPage);      
        }
      };
      useEffect(() => {
        console.log(listLength);
        
        setPageNumber(Math.ceil(listLength / 6));
      }, [listLength]);

      return {handlePage, itemFirstIndex, itemLastIndex, pageNumber, currentPage}
}

export default usePaginate