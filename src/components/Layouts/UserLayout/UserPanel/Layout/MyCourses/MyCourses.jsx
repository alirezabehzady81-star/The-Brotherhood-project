import React from 'react'
import UserTable from '../../../../../common/UserTable/UserTable'

const columns = [
  'لوگو',
  'نام دوره',
  'مدرس',
  'تاریخ شروع',
  'قیمت',
  'وضعیت',
  'مشاهده',
  'حذف',
]

const data = [
  {
    id: 1,
    values: [
      <img
        src="/images/course-logo.png"
        alt=""
        className="w-[35px] h-[35px] object-contain mx-auto"
      />,
      'دوره آموزش طراحی سایت',
      'علی محمدی',
      '۱۴۰۴/۰۹/۱۵',
      '۲,۵۰۰,۰۰۰ تومان',
      'در حال برگزاری',
    ],
    actions: [
      '/images/eye-green.svg',
      '/images/trash.svg',
    ],
  },
  {
    id: 2,
    values: [
      <img
        src="/images/course-logo.png"
        alt=""
        className="w-[35px] h-[35px] object-contain mx-auto"
      />,
      'دوره آموزش برنامه‌نویسی',
      'رضا احمدی',
      '۱۴۰۴/۱۰/۰۱',
      '۳,۰۰۰,۰۰۰ تومان',
      'به پایان رسیده',
    ],
    actions: [
      '/images/eye-green.svg',
      '/images/trash.svg',
    ],
  },
]

const MyCourses = () => {
  return (
    <UserTable
      columns={columns}
      data={data}
      gridColumns="grid-cols-[40px_2fr_1fr_1fr_1fr_1fr_35px_35px]"
    />
  )
}

export default MyCourses