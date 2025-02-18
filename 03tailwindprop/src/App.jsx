import React from "react";
import Card from "./components/Card";

const App = () => {
  let myobj = {
    username: "samjhana@gmail.com",
    age: 30,
  };
  let saileshobj = {
    username: "yogisailesh@gmail.com",
    age: 32,
  };
  let myArr = [1, 2, 3, 4, 4];
  return (
    <div>
      <div className="container bg-red-500 mx-auto">
        <h1 className="text-8xl text-sky-500">
          hello tailwind css v4 and react
        </h1>
        <div>
          <h2 className="text-2xl">Samjhana Chaudhary</h2>
        </div>
        <div>
          <button className="bg-amber-500 px--5 py-2 rounded-2xl hover:bg-amber-700">
            Click me!!
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.pexels.com/photos/30243611/pexels-photo-30243611/free-photo-of-cozy-minimalist-interior-with-beige-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      <Card firstName="Sailesh" someObj={saileshobj} />
      <Card firstName="samjhana" someObj={myobj} />
    </div>
  );
};

export default App;
