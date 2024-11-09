import CenterMode from "@/components/Testimonial/Slider";

const testimonials = [
  {
    id: 1,
    userName: "Mandar Suryawanshi",
    description:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    collage: "Northeastern University, USA",
  },
  {
    id: 2,
    userName: "Aarohi Sighel",
    description:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true. I really admire the attention",
    collage: "University of South Australia",
  },
  {
    id: 3,
    userName: "Susan Mendonca",
    description:
      "Helped with counseling and making the right decision, great staff, would definitely recommend it to anyone planning to go abroad for studies. I am thankful to KC Sadar Team for making my dream come true.",
    collage: "Conestoga College, Canada",
  },
  {
    id: 4,
    userName: "Mandar Suryawanshi",
    description:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    collage: "Northeastern University, USA",
  },
  {
    id: 5,
    userName: "Mandar Kaur",
    description:
      "Thank you World, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    collage: "Northeastern University, USA",
  },
];
const Testimonial = () => {
  return (
    <div className="bg-[#FFDCD8]">
      <div className="text-[26px] md:text-[42px] font-semibold text-[#0E1B2C] text-center pt-[80px]">
        Our students love us
      </div>
      <div className="max-w-6xl mx-auto pt-[40px] pb-[42px] md:pb-[112px]">
        <CenterMode>
          {testimonials.map((item) => (
            <div key={item.id} className=" px-16 md:px-4">
              <div className="bg-white p-8 text-[#0E1B2C] rounded-[10px]">
                <img
                  src="/assets/testimonial/Group 3282.svg"
                  width={32}
                  height={22}
                  alt="feedback"
                  className="!ml-[0px]"
                />
                <div className="pt-4">{item.description}</div>
                <div className="font-semibold pt-6">{item.userName}</div>
                <div className="text-[#64647A] pt-2">{item.collage}</div>
              </div>
            </div>
          ))}
        </CenterMode>
      </div>
    </div>
  );
};
export default Testimonial;
