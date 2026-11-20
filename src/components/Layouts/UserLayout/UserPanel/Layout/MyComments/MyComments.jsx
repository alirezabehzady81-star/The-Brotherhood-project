import React from 'react'
import UserTable from '../../../../../common/UserTable/UserTable'

const columns = ['کد دیدگاه', 'دیدگاه در', 'دسته‌بندی', 'وضعیت', 'زمان', '', '']
const gridColumns = "grid-cols-[70px_2fr_1fr_1fr_1fr_35px_35px]"

const data = [
  { id: 1, values: ['#366', 'عنوان مقاله اول', 'آموزشی', 'تأیید شده', '۱۴۰۴/۰۸/۱۲'] },
  { id: 2, values: ['#367', 'عنوان مقاله دوم', 'برنامه‌نویسی', 'در انتظار تأیید', '۱۴۰۴/۰۸/۱۵'] },
]

const MyComments = () => (
  <UserTable
    columns={columns}
    data={data}
    gridColumns={gridColumns}
    actionType="show"
  />
)

export default MyComments