import React from 'react'
import UserTable from '../../../../../common/UserTable/UserTable'

const columns = ['', 'نام دوره', 'مدرس', 'تاریخ شروع', 'قیمت', 'وضعیت', '', '']
const gridColumns = "grid-cols-[40px_2fr_1fr_1fr_1fr_1fr_35px_35px]"

const courseNames = [
  'دوره آموزش طراحی سایت',
  'دوره آموزش برنامه‌نویسی',
]

const data = Array.from({ length: 11 }, (_, index) => ({
  id: index + 1,
  values: [
    <img src="/images/course-logo.png"  className="w-[35px] h-[35px] object-contain mx-auto" />,
    courseNames[index === 0 ? 0 : 1],
    index === 0 ? 'علی محمدی' : 'رضا احمدی',
    index === 0 ? '۱۴۰۴/۰۹/۱۵' : '۱۴۰۴/۱۰/۰۱',
    index === 0 ? '۲,۵۰۰,۰۰۰ تومان' : '۳,۰۰۰,۰۰۰ تومان',
    index === 0 ? 'در حال برگزاری' : 'به پایان رسیده',
  ],
}))

const MyCourses = () => (
  <UserTable
    columns={columns}
    data={data}
    gridColumns={gridColumns}
    actionType="wallet"
  />
)

export default MyCourses