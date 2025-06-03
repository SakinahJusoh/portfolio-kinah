import React from "react";

const Footer = () => {
  const contact = [
    {
      image: "/Images/telephone.png",
      text: "+6011-17757315",
    },
  ];

  return (
    <div className="w-full bg-[#f7f6eb] p-[60px]">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="[font-family: 'Playfair_Display-SemiBold'] font-semibold text-black text-[40px] leading-[44px] mb-4">
            SAKINAH
            <br />
            JUSOH
          </h2>
        </div>

        <div className="absolute ml-58 mt-8">
          <div className="flex items-center text-black ml-82">
            <img src="/Images/mail.png" alt="email" className="w-5 h-5 mr-2" />

            <span className="[font-family: 'Poppins-Medium'] font-semibold text-lg leading-6 ml-2 ">
              sakinah.jusoh@time.com.my
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {contact.map((item, index) => (
            <div key={index} className="flex items-center text-black mt-8">
              <img src={item.image} alt="icon" className="w-5 h-5 mr-2" />

              <span className="[font-family: 'Poppins-Medium'] font-semibold text-sm leading-[21px] mr-40">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[1500px] h-px top-18 left-[-40px] absolute bg-black" />
      <div className="w-full p-1 flex items-center mt-6">
        <div className="flex items-center  ">
          <img
            src="/Images/copyright.png"
            alt="Copyright"
            className="w-4 h-4 mr-3"
          />
        </div>
        <div className="font-['Inter-SemiBold'] font-medium text-black text-sm leading-3">
          2025 BY SAKINAH
        </div>
      </div>
    </div>
  );
};

export default Footer;
