import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

function Items({ currentItems, ItemToRender, userAlbums }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <ItemToRender data={item} userAlbum={userAlbums} />
        ))}
    </>
  );
}

export function PaginatedItems({ itemsPerPage, renderItem, itemsData, albums }) {
  const [itemOffset, setItemOffset] = useState(0);

  console.log(itemsPerPage, itemsData, "asas", albums)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = itemsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(itemsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemsData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} ItemToRender={renderItem} userAlbums={albums} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}