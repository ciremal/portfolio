const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center w-full"
    >
      <div className="absolute top-[80%] left-[10%] w-50 h-50 bg-blue-300 opacity-30 rounded-full animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-[20%] left-[50%] w-65 h-65 bg-blue-300 opacity-30 rounded-full animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-[50%] left-[80%] w-50 h-50 bg-blue-300 opacity-30 rounded-full animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-[70%] left-[70%] w-24 h-24 bg-pink-300 opacity-30 rounded-full animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute top-[25%] left-[20%] w-50 h-50 bg-pink-300 opacity-30 rounded-full animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute top-[14%] left-[70%] w-24 h-24 bg-pink-300 opacity-30 rounded-full animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute top-[60%] left-[25%] w-16 h-16 bg-green-300 opacity-25 rounded-full animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute top-[75%] left-[45%] w-24 h-24 bg-green-300 opacity-25 rounded-full animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute top-[30%] left-[5%] w-35 h-35 bg-green-300 opacity-25 rounded-full animate-[float_10s_ease-in-out_infinite]" />

      <div className="text-center flex justify-center flex-col gap-12 z-10">
        <div className="flex flex-col gap-4">
          <div className="text-7xl font-semibold">
            {`Hello, I'm `}
            <span className="text-myBlue">Eric</span>
          </div>
          <div className="text-5xl">
            {"I'm a full stack software developer."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
