// import YouTube from "react-youtube";
// var getYouTubeID = require("get-youtube-id");

const Product = (props) => {
   const detail = [
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
      {
         title: "Tooluurin zagvar",
         value: "LXLC",
      },
   ];

   const images = [
      "https://images.unsplash.com/photo-1546455643-312811da2332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80",
      "https://images.unsplash.com/photo-1521985068534-cec90327c93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "https://images.unsplash.com/photo-1513323813850-c7318e3efc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "https://images.unsplash.com/photo-1612171709946-7fc1298a5a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
   ];
   return (
      <>
         <div id="topMargin" className="mx-auto h-96 mb-40">
            <h1 className="text-sm text-blue-500 text-normal ml-2 mb-4">
               BUTEEGDEHUUN-USNII TOOLUUR-ENGIIIN TOOLUUR
            </h1>
            <div id="mainDiv" className=" gap-8 grid grid-cols-2">
               <div className="">
                  <img
                     className="w-full mb-2"
                     id="mainImg"
                     src="https://images.unsplash.com/photo-1622915904739-efd69cd8c519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                     alt="abc"
                  />
                  <div
                     id="imgGrid"
                     className="grid lg:grid-cols-4 md:grid-cols-3 gap-1"
                  >
                     {images.map((data) => {
                        return (
                           <img
                              className="lg:h-32 md:h-24"
                              onClick={() => console.log(data)}
                              id="smallImg"
                              src={data}
                              alt="abc"
                           />
                        );
                     })}
                  </div>
               </div>
               <div className="flex flex-col justify-between">
                  <div className="w-5/6 mx-auto">
                     <h1 className="text-2xl mb-3">
                        DN 50 huiten usnii tooluur
                     </h1>
                     {detail.map((data) => {
                        return (
                           <p className="font-bold text-black text-base">
                              {data.title}:
                              <span className="font-light">
                                 {"  " + data.value}
                              </span>
                           </p>
                        );
                     })}
                  </div>
                  {/* <YouTube
                     className="w-11/12 mx-auto h-80"
                     videoId={getYouTubeID(
                        "https://www.youtube.com/watch?v=Ct6BUPvE2sM"
                     )}
                  /> */}
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gWX88YvGDaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
            </div>
         </div>
         {/* CSS */}
         <style jsx>{`
            #topMargin {
               margin-top: 115px;
               height: fit-content;
               width: 79%;
            }
            #mainDiv {
               grid-template-columns: 1fr 1fr;
            }
            #mainImg {
               height: 500px;
               object-fit: cover;
            }
            #smallImg {
               object-fit: cover;
            }
         `}</style>
      </>
   );
};

export default Product;
