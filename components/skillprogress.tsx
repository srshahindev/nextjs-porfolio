import { Progress } from './ui/progress'

export const SkillProgress = ({
  progressValue,
  progressName
}: {
  progressValue: number
  progressName: string
}) => {
  return (
    <div className='flex w-full flex-col space-y-3'>
      <div className='flex w-full items-center justify-between text-sm font-semibold tracking-wide text-slate-200 md:text-base'>
        <span>{progressName}</span>
        {/* পার্সেন্টেজ টেক্সটটিকে একটু হাইলাইট করা হয়েছে */}
        <span className='text-teal-400'>{`${progressValue}%`}</span>
      </div>

      {/* Progress বার এর ব্যাকগ্রাউন্ড একটু ডার্ক করা হয়েছে যাতে ভালো কন্ট্রাস্ট দেয় */}
      <Progress
        value={progressValue}
        className='h-2.5 w-full bg-slate-700/50'
      />
    </div>
  )
}
