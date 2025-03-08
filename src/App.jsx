import { FaAngleUp } from "react-icons/fa6";
import StarBackGround from "./StarBackground/StarBackGround";

function App() {
  return (
    <div className="bg-[#014556] min-h-screen flex justify-center items-center text-center">
      <div className="relative w-[380px] h-screen flex flex-col justify-between items-center py-10 px-6">
        {/* Star Background */}
        <StarBackGround className="absolute inset-0 w-full h-full" />

        {/* Top Section */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="w-20 h-20 rounded-full border grid place-items-center bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-[#006680]" />
            <div className="absolute top-1/3 left-0 w-full h-1/3 bg-[#298F96]" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#37C8AB]" />
            <div className="w-12 h-12 rounded-full border bg-white grid place-items-center z-10">
              <FaAngleUp size={29} />
            </div>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-white font-bold text-2xl">Welcome to Abouv</h1>
          <p className="text-white text-base font-normal">
            Assessments that get you hired
          </p>

          {/* Three Icons */}
          <div className="flex gap-6 mt-2">
            <img src="/icons/icon1.png" alt="Icon 1" className="w-12 h-12" />
            <img src="/icons/icon2.png" alt="Icon 2" className="w-12 h-12" />
            <img src="/icons/icon3.png" alt="Icon 3" className="w-12 h-12" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 w-full text-center space-y-4">
          <h2 className="text-white font-semibold text-lg">Login or Signup</h2>

          {/* Input & Button */}
          <div className="space-y-3">
            <input
              type="number"
              className="w-full p-3 bg-white rounded-md outline-none"
              placeholder="10 digit mobile number"
            />
            <button className="w-full bg-[#022730] text-white font-bold p-3 rounded-md">
              Continue
            </button>
          </div>

          {/* Terms & Conditions */}
          <p className="text-white text-sm">
            By continuing, you agree to our <br />
            <a href="#" className="underline font-bold">Terms & Conditions</a> &nbsp;
            <a href="#" className="underline font-bold">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
