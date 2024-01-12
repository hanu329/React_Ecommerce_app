
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import {Items} from './Items'
import styled from 'styled-components';
//import './css/d.css'
export const PaginatedItem=({itemsPerPage, pageFun})=>{

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for(let i=14; i<50; i++)
    {
    items[i]=i+1
    }
            const [itemOffset, setItemOffset] = useState(0);
    
        const endOffset = itemOffset + itemsPerPage;
 
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);
      
        const handlePageClick = (event) => {
          console.log(event)
          const newOffset = (event.selected * itemsPerPage) % items.length;
       
          setItemOffset(newOffset);
        };
        pageFun(currentItems)
       
      const fun=(event)=>{
        console.log(event,"sldfj")
      
          
      }
        
    return (
        <>        
          {/* <Items currentItems={currentItems} /> */}         
          <ReactPaginate
     
      className='clspage'
        breakLabel=".."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageActive={fun}
       
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={1}
      />
          
      
   
        </>
    )
}

