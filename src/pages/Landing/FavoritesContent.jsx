
export const FavoritesContent = ({
  title = "محبوب ترین دسته بندی ها",
  caption = "گستره وسیعی از محبوب ترین دوره ها",

}) => {
  return (
    <>
<div className="w-100% h-[100px] flex justify-center">
<div className="w-[370px] h-[90px] flex flex-col items-center ">
      <div className="flex items-center gap-2 ">
        <span className="size-2.5 rounded-full bg-teal-400" />
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <p className="text-right mt-2 text-xm text-gray-400">{caption}</p>
</div>
</div>
<div className="flex w-100% h-[496px] relative justify-center items-center-safe">
<div className=" w-100% h-[496px]  ">
<img src="/src/img/Rectangle 14 (1).svg" alt="" className="" />
</div>
<div className=" w-[1093px] h-[262px] absolute ">
<img src="/src/img/category items.svg" alt="" className="" />
</div>



</div>

    </>
  )
}
export default FavoritesContent