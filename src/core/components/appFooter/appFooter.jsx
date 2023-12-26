import iconLogo from "../../../assets/icon.svg"
export const AppFooter = () => {
  return (
   
<footer className="bg-[#0D0D0D]">
  <div className="sm:ml-52 max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
    <div className="lg:flex  lg:items-center lg:justify-around">
      <div className="flex justify-center text-[#E46205]  lg:justify-start">
        <img src={iconLogo} alt="logo" className="w-10 h-10" />
        <span className="self-center text-2xl px-2 font-semibold whitespace-nowrap">
          Sr. Bigotes
        </span>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2023. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}
