import React from 'react'
import previousPageBtn from '../../../assets/pictures/common/previousPage.svg'
import nextPageBtn from '../../../assets/pictures/common/nextPage.svg'

const containerStyle = "flex items-center justify-center gap-2"
const arrowStyle = "w-[22px] h-[22px] object-contain"

const buttonStyle = (active) =>
  `w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shadow-[0px_1px_2px_rgba(0,0,0,0.3)] ${
    active ? 'bg-[rgba(255,184,0,1)]' : 'bg-[rgba(250,250,250,1)]'
  }`

const PageNumber = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => totalPages - index)

  const handleNextPage = () => onPageChange(Math.min(totalPages, currentPage + 1))
  const handlePreviousPage = () => onPageChange(Math.max(1, currentPage - 1))

  return (
    <div className={containerStyle}>
      <button className={buttonStyle(false)} onClick={handleNextPage} disabled={currentPage === totalPages}>
        <img src={nextPageBtn} alt="بعدی" className={arrowStyle} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={buttonStyle(currentPage === page)}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button className={buttonStyle(false)} onClick={handlePreviousPage} disabled={currentPage === 1}>
        <img src={previousPageBtn} alt="قبلی" className={arrowStyle} />
      </button>
    </div>
  )
}

export default PageNumber