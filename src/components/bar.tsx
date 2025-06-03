const Bar = () => {
  return (
    <div>
      <div className="w-full h-[50px] bg-[#f683a0] flex items-center border border-black">
        {Array(11)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-5 h-5 mx-2" />
          ))}
      </div>
    </div>
  );
};
export default Bar;
