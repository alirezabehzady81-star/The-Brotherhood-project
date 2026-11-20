import React from 'react'
import UserTable from '../../../../../common/UserTable/UserTable'

const columns = ['عنوان دوره', 'مدرس', 'دسته‌بندی', 'قیمت', 'وضعیت' ,'', '',]
const gridColumns = "grid-cols-[2fr_1fr_1fr_1fr_1fr_35px_35px]"

const data = [
  {id: 1,values: ['آموزش React', 'علی رضایی', 'برنامه‌نویسی', '۱,۲۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 2, values: ['آموزش JavaScript', 'محمد احمدی', 'برنامه‌نویسی', '۹۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 3,values: ['آموزش طراحی سایت', 'رضا کریمی', 'طراحی وب', '۱,۵۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 4,values: ['آموزش HTML و CSS', 'علی رضایی', 'طراحی وب', '۷۵۰,۰۰۰ تومان', 'فعال'],},
  {id: 5,values: ['آموزش Python', 'مهدی محمدی', 'برنامه‌نویسی', '۱,۰۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 6,values: ['آموزش UI/UX', 'سارا احمدی', 'طراحی', '۱,۳۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 7,values: ['آموزش وردپرس', 'رضا کریمی', 'طراحی وب', '۸۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 8,values: ['آموزش Tailwind', 'علی رضایی', 'برنامه‌نویسی', '۶۰۰,۰۰۰ تومان', 'فعال'],},
  {id: 9,values: ['آموزش Git', 'محمد احمدی', 'برنامه‌نویسی', '۵۰۰,۰۰۰ تومان', 'فعال'],},
]

const MyFavorites = () => (
  <UserTable
    columns={columns}
    data={data}
    gridColumns={gridColumns}
    actionType="show"
  />
)

export default MyFavorites