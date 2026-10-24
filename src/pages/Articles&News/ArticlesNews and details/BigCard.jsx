
import { MdKeyboardArrowDown } from "react-icons/md";
import { CustomStyless } from './ScrolShadow';

export const BigCard = () => {
  return (
    <div className='h-fit  bg-[#fafafa]  space-y-5 w-fit rounded-2xl flex flex-col items-center  '>
   <article
      dir="rtl"
      className="space-y-1 text-right text-sm leading-8 mx-6 text-slate-700"
    >
    

      <p>ری اکت چیست؟
        تصور کنید یک مهندس طراحی خودرو هستید و قصد دارید یک ماشین جدید و جذاب 
        بسازید. این مهندس برای رسیدن به هدفش دو راه داره. ما در این مقاله قراره
        خیلی خودمونی بگیم ری اکت چیه، و در کنارش بتونید از آموزش react یاد
        ببرید. خب پس بزن بریم!
      </p>

      <p>
        ۱ - مثلاً به دولت مراجعه کنه و بگه لطفاً ابزار و مواد اولیه لازم رو در
        اختیار من قرار بده تا این ماشین رو بسازم. فردا می‌بینه یک کامیون پر از
        آهن و پلاستیک و ... به صورت خام در کارگاهش تخلیه شده و اون باید تمام
        چندهزار قطعه ماشین رو از صفر طراحی و تولید کنه.
      </p>

      <p>
        ۲ - یا اینکه طرح قطعات و قالب‌های طراحی‌شده خودش رو به یک شرکت دانش‌بنیان
        و قطعه‌ساز ارائه بده که متخصص این کار هست و قبلاً هزاران نوع قطعه آماده
        تولید کرده. در این صورت مهندس ما هم خیلی راحت تمام قطعات مورد نیاز خودش
        رو تحویل می‌گیره تا ماشین جدید خودش رو بسازه. چیزی شبیه به تولید ماشینی
        مثل لامبورگینی!
      </p>

      <p>این ساده‌ترین جواب مقدماتی برای درک سوال «ری اکت چیست؟» می‌تونه باشه!</p>
    </article>
<img src="/src/img/b34af91c909626fcb0578636953084bea527bc56.png"    className={` w-[575px] h-[300px] object-cover `}  />
<CustomStyless/>
<button
  type="button"
  className=" flex items-center mb-4  gap-2 rounded-full border border-teal-400 bg-white px-6 py-2 text-xs font-bold text-slate-800 shadow-[0_2px_8px_rgba(45,212,191,0.25)] transition hover:bg-teal-50"
>
  مطالعه بیشتر
  <MdKeyboardArrowDown className="text-base text-teal-500" />
</button>

    </div>
  )
}
export default BigCard