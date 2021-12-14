import { GrFacebook, GrYoutube, GrTwitter } from "react-icons/gr";

const Footer = (props) => {
  const iframe = (
    <iframe
      width="600"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA"
    ></iframe>
  );
  return (
    <>
      <div className="w-full lg:flex lg:justify-evenly lg:mb-14 sm:col sm:col-span-1">
        <div style={{ maxWidth: "260px" }} className="flex flex-col m-3">
          <h1 className="text-blue-500 text-lg border-b-2 border-blue-500">ОНЛАЙН</h1>
          <p className="text-sm text-gray-500 font-medium my-2">И-мэйл: info@measurement.mn</p>
          <div className="flex justify-evenly text-3xl">
            <button>
              <GrFacebook />
            </button>
            <button>
              <GrYoutube />
            </button>
            <button>
              <GrTwitter />
            </button>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.9446940589805!2d106.9475783150485!3d47.91810757440109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969221a9199009%3A0xd8a3b13c552c8cd6!2z0JzQrdCZ0JbSrtCg0JzQrdCd0KIg0KXQpdCa!5e0!3m2!1smn!2smn!4v1639379857888!5m2!1smn!2smn"
            width={200}
            height={200}
            style={{ border: "4" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div style={{ maxWidth: "260px" }} className="flex flex-col m-3">
          <h1 className="text-blue-500 text-lg border-b-2 border-blue-500 text-center">БАЙРШИЛ</h1>

          <div className="my-2 ml-1">
            <h1 className="text-base text-blue-500">ДЭЛГҮҮР-1</h1>
            <p className="text-sm text-gray-500 font-medium">
              Монгол улс, Улаанбаатар хот, Баянзүрх дүүргийн 4-р хороо Стандарт хемжил зүйн газрын
              баруун талын байрны 1 давхарт
            </p>
          </div>

          <div className="my-4 ml-1">
            <h1 className="text-base text-blue-500">ДЭЛГҮҮР-2, ЛАБОРАТОРИ</h1>
            <p className="text-sm text-gray-500 font-medium">
              Монгол улс, Улаанбаатар хот, Хан-уул дүүргийн 15-р хороо ХУРД Рапид харш хороолол 21-р
              байрны 73-р тоот
            </p>
          </div>
        </div>
        <div style={{ maxWidth: "260px" }} className="flex flex-col m-3">
          <h1 className="text-blue-500 text-lg border-b-2 border-blue-500">ХОЛБОО БАРИХ</h1>

          <div className="my-2 ml-1 ">
            <h1 className="text-base text-blue-500">ДЭЛГҮҮР-1</h1>
            <p className="text-sm text-gray-500 font-medium mb-3">Утас: +976 77773040</p>
            <p className="text-sm text-gray-500 font-medium">И-мэйл: info@measurement.mn</p>
            <p className="text-sm text-gray-500 font-medium">measurementmng@gmail.com</p>
          </div>

          <div className="my-4 ml-1">
            <h1 className="text-base text-blue-500">ДЭЛГҮҮР-2, ЛАБОРАТОРИ</h1>
            <p className="text-sm text-gray-500 font-medium mb-3">Утас: +976 70153040</p>
            <p className="text-sm text-gray-500 font-medium">И-мэйл: info@measurement.mn</p>
            <p className="text-sm text-gray-500 font-medium">measurementmng@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;