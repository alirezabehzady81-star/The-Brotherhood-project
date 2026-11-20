import React from 'react'
import UserTable from '../../../../../common/UserTable/UserTable'

const columns = ['', 'نام دوره', 'مدرس', 'تاریخ شروع', 'قیمت', 'وضعیت', '', '']
const gridColumns = "grid-cols-[40px_2fr_1fr_1fr_1fr_1fr_35px_35px]"

const data = [
  { id: 1, values: [<img src="/images/course-logo.png" alt="" className="w-[35px] h-[35px] object-contain mx-auto" />, 'دوره آموزش طراحی سایت', 'علی محمدی', '۱۴۰۴/۰۹/۱۵', '۲,۵۰۰,۰۰۰ تومان', 'تکمیل شده'] },
  { id: 2, values: [<img src="/images/course-logo.png" alt="" className="w-[35px] h-[35px] object-contain mx-auto" />, 'دوره آموزش برنامه‌نویسی', 'رضا احمدی', '۱۴۰۴/۱۰/۰۱', '۳,۰۰۰,۰۰۰ تومان', 'در انتظار برگزاری'] },
]

const MyReserveCourse = () => (
  <UserTable
    columns={columns}
    data={data}
    gridColumns={gridColumns}
    actionType="showGreen"
  />
)

export default MyReserveCourse