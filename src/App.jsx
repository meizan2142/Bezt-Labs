import StarBackGround from "./StarBackground/StarBackGround";

function App() {
  return (
    <div className="bg-[#014556] min-h-screen text-center flex justify-center items-center">
      <div className="relative bg-red-500 grid grid-cols-1 text-center space-y-96 w-[380px] h-screen main-div">
        {/* Star background */}
        <StarBackGround className="absolute inset-0 w-full h-full" />

        {/* Top part */}
        <div className="relative z-10">
          {/* Logo */}
          <div></div>
          {/* Text */}
          <div className="space-y-2">
            <h1 className="text-white font-bold text-2xl">Welcome to Abouv</h1>
            <p className="text-white text-base font-normal">
              Assessments that get you hired
            </p>
          </div>
          {/* 3 Logos */}
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        {/* Bottom Part */}
        <div className="relative z-10">
          <h1>Login or Signup</h1>
          {/* Input fields */}
          <div className="grid grid-cols-1 justify-center items-center">
            <input type="number" className="w-1/2 mx-auto" />
            <button className="bg-[#022730] text-white font-bold w-1/2 mx-auto">
              Continue
            </button>
          </div>
          {/* Terms & Conditions */}
          <p>
            <span className="text-base">By continuing, you agree to our</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
