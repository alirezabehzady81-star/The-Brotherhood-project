
import React, { useState } from 'react'
import PageNumber from '../PageNumber/PageNumber'

import showBtn from './../../../assets/pictures/common/Show.svg'
import showGreenBtn from './../../../assets/pictures/common/Show(Green).svg'
import walletBtn from './../../../assets/pictures/common/wallet.svg'
import trashBtn from './../../../assets/pictures/common/Trash.svg'

const itemsPerPage = 8

const tableContainerStyle = "flex flex-col w-full min-h-[700px]"
const headerStyle = "grid items-center text-[17px] text-[rgba(0,59,57,1)] border-b border-[rgba(0,120,117,1)] pb-3"
const rowStyle = "grid items-center min-h-[48px] rounded-[5px] px-2 shadow-[0px_1px_2px_rgba(0,0,0,0.15)] text-[14px] text-[rgba(85,85,85,1)]"
const cellStyle = "flex items-center justify-center"
const iconStyle = "w-[20px] h-[20px] object-contain mx-auto"
const paginationWrapperStyle = "flex justify-center mt-auto mb-[100px]"

const actionIcons = {
  show: showBtn,
  showGreen: showGreenBtn,
  wallet: walletBtn,
}

const UserTable = ({ columns, data, gridColumns, actionType = 'show' }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage))
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = data.slice(startIndex, startIndex + itemsPerPage)

  const actionIcon = actionIcons[actionType]

  const getRowStyle = (index) => {
    const background = index % 2 === 0
      ? 'bg-[rgba(246,255,255,1)]'
      : 'bg-[rgba(247,247,247,1)]'

    return `${rowStyle} ${background} ${gridColumns}`
  }

  return (
    <div className={tableContainerStyle}>

      <div className={`${headerStyle} ${gridColumns}`}>
        {columns.map((column, index) => (
          <div key={index} className={cellStyle}>
            {column}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[13px] mt-3">
        {currentData.map((item, index) => (
          <div key={item.id} className={getRowStyle(index)}>

            {item.values.map((value, valueIndex) => (
              <div key={valueIndex} className={cellStyle}>
                {value}
              </div>
            ))}

            <div className={cellStyle}>
              <img
                src={actionIcon}
                alt="عملیات"
                className={iconStyle}
              />
            </div>

            <div className={cellStyle}>
              <img
                src={trashBtn}
                alt="حذف"
                className={iconStyle}
              />
            </div>

          </div>
        ))}
      </div>

      <div className={paginationWrapperStyle}>
        <PageNumber
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

    </div>
  )
}

export default UserTable
