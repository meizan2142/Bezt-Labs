import { FaAngleUp } from "react-icons/fa6";
import StarBackGround from "./StarBackground/StarBackGround";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
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
            <img src="https://app.abouv.com/icons/onboarding/welcome.svg" alt="Icon 1" className="m-8 h-12" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 w-full text-center space-y-4">
          <h2 className="text-white font-semibold text-lg">Login or Signup</h2>

          {/* Input & Button */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="number"
                  className="w-full p-3 bg-white rounded-md outline-none"
                  placeholder="Enter 10-digit mobile number"
                  id="number"
                  {...register('number', {
                    required: 'Phone number is required',
                    minLength: { value: 10, message: 'Phone number must be exactly 10 digits' },
                    maxLength: { value: 10, message: 'Phone number must be exactly 10 digits' }
                  })}
                />
                {errors.number && <p className="text-red-400">{errors.number.message}</p>}
              </div>

              <button className="w-full bg-[#022730] text-white font-bold p-3 rounded-md">
                Continue
              </button>
            </form>
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
