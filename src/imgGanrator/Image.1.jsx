// import { useRef, useState } from "react";
// import default_Image from "../asset/img/img_gen.jpg";

// export default function Image() {
//   const [image_url, setImage_url] = useState("/");
//   const inputREf = useRef(null);

//   const imageGenrator = async () => {
//     if (inputREf.current.value === "") {
//       return 0;
//     }

//     const response = await fetch(
//       "https://api.openai.com/v1/images/generations",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer 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",
//         },
//         body: JSON.stringify({
//           prompt: `${inputREf.current.value}`,
//           n: 1,
//           size: "1024x1024",
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <>
//       <div className="sm:bg-gradient-to-b bg-gradient-to-r from-pink-300 to-pink-100 min-h-screen max-h-screen px-5 py-5 justify-center ">
//         <div className="flex justify-center items-center flex-col space-y-10">
//           <div className="backdrop">
//             <h1 className="text-2xl">
//               Your Imaganition Can Reality: Unleashing Your Imagination
//             </h1>
//           </div>
//           <div className="">
//             <div className="backdrop">
//               <img
//                 src={image_url === "/" ? default_Image : image_url}
//                 className="w-96   rounded"
//                 alt=""
//               />
//             </div>
//           </div>

//           <div className=" flex flex-col mx-6 text-center justify-center items-center ">
//             <input
//               ref={inputREf}
//               className="  w-[500px] px-6 py-4 outline-none rounded-lg bg-pink-100 shadow-lg backdrop:placeholder:blur-sm "
//               type="serach"
//               placeholder="what you went to see"
//               name=""
//               id=""
//             />
//             <button
//               type="submit"
//               onClick={() => {
//                 imageGenrator();
//               }}
//               className=" hover:bg-pink-500 text-center  mt-10 w-40 h-10 shadow-2xl rounded-xl ring-offset-purple-400 border-solid border-2 border-pink-300 bg-transparent"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
