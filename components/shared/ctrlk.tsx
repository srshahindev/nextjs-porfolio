export const Ctrlk = () => {
  return (
    <div className='relative hidden overflow-hidden rounded-lg p-[1.2px] min-[950px]:block'>
      <div className='absolute inset-0 animate-spin rounded bg-linear-to-l from-purple-500 to-pink-400 [animation-duration:_4s]'></div>
      <button className='bg-bgPrimary relative cursor-pointer rounded-sm px-4 py-2'>
        ctrl+k
      </button>
    </div>
  )
}
