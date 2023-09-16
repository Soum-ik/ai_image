import {  useState } from "react";
import default_Image from "../asset/img/img_gen.jpg";
import { useRef } from "react";

export default function Image() {
  const [image_url, setImage_url] = useState("/");
  const inputREf = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenrator = async () => {
    if (inputREf.current.value === "") {
      return 0;
    }
    // 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
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
        body: JSON.stringify({
          prompt: `${inputREf.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    const data_array = data.data;
    setImage_url(data_array[0].url);
    setLoading(false);
  };

  return (
    <>
      <div className="sm:bg-gradient-to-b bg-gradient-to-r from-pink-300 to-pink-100 min-h-screen max-h-screen px-5 py-5 justify-center ">
        <div className="flex justify-center items-center flex-col space-y-10">
          <div className="backdrop">
            <h1 className="text-2xl">
              Your Imaganition Can Reality: Unleashing Your Imagination
            </h1>
          </div>
          <div className="">
            <div className="backdrop">
              <img
                src={image_url === "/" ? default_Image : image_url}
                className="w-96   rounded"
                alt=""
              />
            </div>
            <div
              className={
                loading
                  ? " w-96 h-1 bg-pink-500 delay-1000"
                  : "w-0 h-1 bg-pink-500"
              }
            ></div>
            <div className={loading ? " text-xl " : " hidden"}>loading...</div>
          </div>

          <div className=" flex flex-col  text-center justify-center items-center ">
            <input
              ref={inputREf}
              className="  w-[500px] px-6 py-4 outline-none rounded-lg bg-pink-100 shadow-lg backdrop:placeholder:blur-sm mx-12"
              type="serach"
              placeholder="what you went to see"
              name=""
              id=""
            />
            <button
              type="submit"
              onClick={() => {
                imageGenrator();
              }}
              className=" duration-500 scroll-smooth hover:bg-pink-500 text-center  mt-10 w-40 h-10 shadow-2xl rounded-xl ring-offset-purple-400 border-solid border-2 border-pink-300 bg-transparent"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
