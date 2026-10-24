
import { FaRegCommentDots, } from "react-icons/fa6";
import {Button} from "@heroui/react";
import CommentItem from './CommentItem';

export const Comment = () => {

  return (
    <div className='w-[754px] h-[872px] flex flex-col   '>
<div className=' h-[70px]  mt-0 '>
  <h2 className="text-[#005351] text-[25px] mr-1.5  text-right font-bold ">نظرات</h2>
</div>
<section className='w-[754px] h-[808px] p-5 bg-[#FFFFFF]  flex flex-col space-y-4'>
  <div  dir='ltr'  className="flex flex-wrap gap-3  ">
        <Button dir='rtl' className={"rounded-[7px] flex flex-wrap gap-1 items-center p-2 bg-[#00E2DC] "}>
      <FaRegCommentDots/>
        ارسال دیدگاه جدید
      </Button>

</div>
<div className="w-[715px] h-[313px] flex flex-col bg-[#F9F9F9]  ">
<div className=" flex flex-col  ">
       <CommentItem
        name="کاربر"
        email="ali@gmail.com"
        date="۱۴۰۳/۰۱/۲۵"
        likes={25}
        dislikes={6}
size={18}
ring='ring-[#E4E4E4]'
      />
      <div className=" w-full flex flex-col text-right mr-5" >
<p className='font-normal text-[13px] text-[#333333]'>سلام</p>
<p className='font-normal text-[13px] text-[#333333]'>من خيلي دوست دارم اين دوره رو بخرم ولي قيمتش خيلي بالاست، چه زماني دوباره اين دوره تخفيف ميخوره؟</p>
      </div>
      <div className="w-[667px] h-[162px] mx-4 mt-[10px] mb-4.5 border-r-[#01CEC9] border-r-4 bg-[#ECECEC] rounded-[10px] ">
       <CommentItem
        name="مهدی اصغری   "
        email="مدرس"
        date="۱۴۰۳/۰۱/۲۵"
        likes={25}
        dislikes={6}
size={16}
avatar={'/src/img/46a19889d0e121c8cd9cae8a5a9b2ba925f1d4c1.jpg'}

      />
<div className="text-right flex flex-col mr-[21px]">
<p className="text-[12px] font-normal text-[#333333] ">سلام عزیز.</p>
<p className="text-[12px] font-normal text-[#333333]">حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف خواهیم داشت.</p>
<p className="text-[12px] font-normal text-[#333333]">برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت و سوشال های سبزلرن رو دنبال کنین 👌❤️</p>
</div>
      </div>



</div>
<div className=""></div>
</div>
<div className="w-[715px] h-[313px] flex flex-col bg-[#F9F9F9]  ">
<div className=" flex flex-col  ">
       <CommentItem
        name="دانشجو"
        email="khalilpour4271"
        date="۱۴۰۳/۰۱/۲۵"
        likes={25}
        dislikes={6}
size={18}
ring='ring-[#FFBD59]'
      />
      <div className=" w-full flex flex-col text-right mr-5" >
<p className='font-normal text-[13px] text-[#333333]'>سلام</p>
<p className='font-normal text-[13px] text-[#333333]'>من خيلي دوست دارم اين دوره رو بخرم ولي قيمتش خيلي بالاست، چه زماني دوباره اين دوره تخفيف ميخوره؟</p>
      </div>
      <div className="w-[667px] h-[162px] mx-4 mt-[10px] mb-4.5 border-r-[#01CEC9] border-r-4 bg-[#ECECEC] rounded-[10px] ">
       <CommentItem
        name="مهدی اصغری   "
        email="مدرس"
        date="۱۴۰۳/۰۱/۲۵"
        likes={25}
        dislikes={6}
size={16}
avatar={'/src/img/46a19889d0e121c8cd9cae8a5a9b2ba925f1d4c1.jpg'}

      />
<div className="text-right flex flex-col mr-[21px]">
<p className="text-[12px] font-normal text-[#333333] ">سلام عزیز.</p>
<p className="text-[12px] font-normal text-[#333333]">حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف خواهیم داشت.</p>
<p className="text-[12px] font-normal text-[#333333]">برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت و سوشال های سبزلرن رو دنبال کنین 👌❤️</p>
</div>
      </div>



</div>
<div className=""></div>
</div>
</section>



    </div>
 




)
}
export default Comment