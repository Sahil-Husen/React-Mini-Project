import { useState } from "react";

function Standard() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setbmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if ((!height && !weight) || (height && weight <= 0)) {
      alert("Please enter height and weight!");
    } else {
      // weight kg, height cm
      const bmi = (weight / (height / 100) ** 2).toFixed(2);
      setbmi(bmi);
    }
    setHeight("");
    setWeight("");
    setTimeout(() => {
      setbmi(" ");
    }, 5000);
  };

  return (
    <div className=" cursor-pointer p-10  w-screen h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex gap-10 items-center justify-center">
      <div className="w-1/2">
        <form
          action=""
          className=" shadow-[0px_0px_7px_1px_#edf2f7] p-5 rounded-md   bg-gradient-to-r from-purple-500 to-purple-900 "
          onSubmit={calculateBMI}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Weight
            </label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your weight Kg"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Height in inch
            </label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              id="password"
              placeholder="Enter height Cm"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              {"    "}
              <p> Your BMI is </p>
              <span className=" m-2 p-3 py-1   px-2 text-black font-bold">
                {bmi}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      
      <div className=" shadow-[0px_0px_7px_1px_#edf2f7] sm:flex  sm:flex-col lg:flex-row sm:overflow-hidden  w-full sm:w-3/4 md:w-1/2 lg:w-1/4 h-auto border border-white p-1 rounded-md bg-gradient-to-r from-purple-500 to-purple-900">
        <h2 className="font-bold text-black text-lg md:text-sm mb-1">
          BMI Categories:
        </h2>
        <hr className="my-2 border-gray-300" />
        <ul className="text-yellow-50 font-semibold tracking-tight space-y-2">
          <li>
            Underweight: BMI{" "}
            <span className="font-bold text-black">&lt; 18.5</span>
          </li>
          <li>
            Normal weight: BMI{" "}
            <span className="font-bold text-black">18.5–24.9</span>
          </li>
          <li>
            Overweight: BMI{" "}
            <span className="font-bold text-black">25–29.9</span>
          </li>
          <li>
            Obesity: BMI of <span className="font-bold text-black">30</span> or
            greater
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Standard;
