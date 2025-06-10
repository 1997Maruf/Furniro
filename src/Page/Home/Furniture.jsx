import img1 from "../../assets/imag/Furniture1.png"
import img2 from "../../assets/imag/Furniture2.png"
import img3 from "../../assets/imag/Furniture3.png"
import img4 from "../../assets/imag/Furniture4.png"
import img5 from "../../assets/imag/Furniture5.png"
import img6 from "../../assets/imag/Furniture6.png"
import img7 from "../../assets/imag/Furniture7.png"
import img8 from "../../assets/imag/Furniture8.png"
const Furniture = () => {
    return (
        <div className="mt-[67px]">
            <p className="text-[#616161] text-[20px] font-semibold leading-[30px] text-center">Share your setup with</p>
           <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3A3A3A] mb-8">
       #FuniroFurniture
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-[43px] gap-4 max-w-7xl mx-auto">
      <img src={img1} alt="img1" class=" rounded-lg" />
      <img src={img2} alt="img2" class=" rounded-lg" />
      <img src={img3} alt="img3" class=" rounded-lg" />
      <img src={img4} alt="img4" class=" rounded-lg" />
      <img src={img5} alt="img5" class=" rounded-lg" />
      <img src={img6} alt="img6" class=" rounded-lg" />
      <img src={img7} alt="img7" class=" rounded-lg" />
      <img src={img8} alt="img8" class=" rounded-lg" />
      
    </div> 
    
        </div>
    );
};

export default Furniture;