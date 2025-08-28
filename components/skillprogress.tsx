import { Progress } from './ui/progress'

export const SkillProgress = ({
  progressValue,
  progressName
}: {
  progressValue: number
  progressName: string
}) => {
  return (
    <div className='w-full space-y-2'>
      <p className='flex w-full justify-between font-semibold'>
        {progressName}
        <span>{`${progressValue}%`}</span>
      </p>
      <Progress value={progressValue} className='w-full' />
    </div>
  )
}
