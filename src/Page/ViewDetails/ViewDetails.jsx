import { Link } from "react-router";
import img1 from "../../assets/imag/v1.png";
import img2 from "../../assets/imag/v2.png";
import img3 from "../../assets/imag/v3.png";
import img4 from "../../assets/imag/v4.png";
import img5 from "../../assets/imag/v5.png";
import img6 from "../../assets/imag/tabe-img.png";
import img7 from "../../assets/imag/tab-img1.png";
import { Rating } from "@smastrom/react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "@smastrom/react-rating/style.css";
const ViewDetails = () => {
  return (
    <div>
      <div className="container lg:w-[1440px] mx-auto text-black">
        <div className="flex items-center bg-[#f9f1e7] py-[31px] gap-[34px] h-[100px] px-4 lg:px-[100px]">
          <div className="flex items-center gap-[14px]">
            <Link to="/" className="text-[#9F9F9F] text-[16px]">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
            </svg>
            <Link to="/shop" className="text-[#9F9F9F] text-[16px]">
              Shop
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
            </svg>
            <div className="divider lg:divider-horizontal"></div>
          </div>
          <p className="text-[16px] text-[#000]">Asgaard sofa</p>
        </div>
        <div className="lg:flex lg:px-[95px] gap-[106px]  pb-[67px] mt-[42px]">
          <div className="lg:flex gap-[31px]">
            <div className="lg:block flex gap-[8px] justify-center items-center">
              <div className="w-[76px] h-[89px] bg-[#f9f1e7] flex items-center rounded-[10px]">
                <img src={img1} alt="" />
              </div>
              <div className="w-[76px] h-[89px] lg:mt-[27px] bg-[#f9f1e7] flex items-center rounded-[10px]">
                <img src={img2} alt="" />
              </div>
              <div className="w-[76px] h-[89px] lg:mt-[27px] bg-[#f9f1e7] flex items-center rounded-[10px]">
                <img src={img3} alt="" />
              </div>
              <div className="w-[76px] h-[89px] lg:mt-[27px] bg-[#f9f1e7] flex items-center rounded-[10px]">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="lg:w-[423px] w-[370px] lg:h-[500px] flex items-center bg-[#f9f1e7] rounded-[10px]">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="lg:px-0 px-3">
            <h1 className="text-[42px] text-[#000]">Asgaard sofa</h1>
            <p className="text-[20px] text-[#9F9F9F] font-medium">
              Rs. 250,000.00
            </p>
            <div className="flex items-center mt-[15px]">
              <Rating style={{ maxWidth: 130 }} value={3.5} readOnly />
              <div className="divider lg:divider-horizontal"></div>
              <p className="text-[14px] text-[#9F9F9F]">5 Customer Review</p>
            </div>
            <p className="text-[#000] mt-[18px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className="mt-[22px] text-[#9F9F9F]">Size</p>
            <div className="flex gap-[16px]  items-center mt-[12px]">
              <p className="w-[30px] h-[30px] bg-[#B88E2F] cursor-pointer rounded-[5px] text-white flex items-center justify-center">
                L
              </p>
              <p className="w-[30px] h-[30px] bg-[#f9f1e7] cursor-pointer rounded-[5px] text-black flex items-center justify-center">
                XL
              </p>
              <p className="w-[30px] h-[30px] bg-[#f9f1e7] cursor-pointer rounded-[5px] text-black flex items-center justify-center">
                XS
              </p>
            </div>
            <p className="mt-[18px] text-[#9F9F9F]">Color</p>
            <div className="flex gap-[16px]  items-center mt-[12px]">
              <p className="w-[30px] h-[30px] bg-[#816DFA] cursor-pointer rounded-full flex items-center justify-center"></p>
              <p className="w-[30px] h-[30px] bg-[#000] cursor-pointer rounded-full text-black flex items-center justify-center"></p>
              <p className="w-[30px] h-[30px] bg-[#B88E2F] cursor-pointer rounded-full text-black flex items-center justify-center"></p>
            </div>
            <div className="flex lg-flex-row flex-col justify-center mt-[32px] gap-[18px]">
              <div className="w-[123px] h-[64px] border-[1px] rounded-[10px] flex gap-[35px] items-center justify-center">
                <span>-</span> 1 <span>+</span>{" "}
              </div>
              <div className="">
                <button className="w-[215px] h-[64px] border-[1px] rounded-[10px] flex  items-center justify-center text-[20px] text-[#000]">
                  Add To Cart
                </button>
              </div>
              <div className="">
                <button className="w-[215px] h-[64px] border-[1px] rounded-[10px] flex  items-center justify-center text-[20px] text-[#000]">
                  + Compare
                </button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="">
              <p className="text-[#9F9F9F]">
                SKU<span className="ml-[61px]">: SS001</span>
              </p>
              <p className="text-[#9F9F9F] mt-[12px]">
                Category<span className="ml-[28px]">: Sofas</span>
              </p>
              <p className="text-[#9F9F9F] mt-[12px]">
                Tags<span className="ml-[60px]">: Sofa, Chair, Home, Shop</span>
              </p>
              <p className="text-[#9F9F9F] mt-[12px] flex items-center">
                Share
                <span className="ml-[50px] flex  gap-[25px] ">
                  :{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_117_920)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_920">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_117_924)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_924">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="">
          <Tabs>
            <TabList className="flex items-center justify-center">
              <Tab>Description</Tab>
              <Tab>Additional Information</Tab>
              <Tab>Reviews [5]</Tab>
            </TabList>

            <TabPanel>
              <div className="">
                <p className=" text-[#9F9F9F] text-[16px] lg:px-[207px] px-7">
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </p>
                <p className="mt-[30px] text-[#9F9F9F] text-[16px] lg:px-[207px] px-7">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
                <div className="flex lg:flex-row flex-col gap-[30px] justify-center mt-[30px]">
                  <div className="lg:w-[605px] lg:h-[348px] bg-[#f9f1e7]">
                    <img className="" src={img6} alt="" />
                  </div>
                  <div className="lg:w-[605px] lg:h-[348px] bg-[#f9f1e7]">
                    <img src={img7} alt="" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="">
                <p className=" text-[#9F9F9F] text-[16px] px-[207px]">
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </p>
                <p className="mt-[30px] text-[#9F9F9F] text-[16px] px-[207px]">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
                <div className="flex gap-[30px] justify-center mt-[30px]">
                  <div className="w-[605px] h-[348px] bg-[#f9f1e7]">
                    <img className="" src={img6} alt="" />
                  </div>
                  <div className="w-[605px] h-[348px] bg-[#f9f1e7]">
                    <img src={img7} alt="" />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
