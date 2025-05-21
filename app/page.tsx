import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-screen">
      <div className="w-[40%] bg-primary"></div>
      <div className="w-[60%] bg-background"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[70%] flex items-center justify-center">
        <div className="w-full h-full flex justify-between">
          <div
            className="flex justify-center items-center flex-col w-full bg-secondary z-1"
            style={{ boxShadow: "-6px 4px 8px 2px rgba(0,0,0,0.1)" }}
          >
            <Image
              src={"/PFP.png"}
              width={250}
              height={250}
              alt="Image of me"
              className="rounded-full"
            />
            <h3 className="text-3xl font-bold">Eric Lam</h3>
            <h4 className="text-3xl">Software Developer</h4>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-background px-8 text-center">
            <div className="text-8xl">Hello</div>
            <div className="text-3xl">
              A passionate Software Developer wanting to make an impact
            </div>
            <div>
              <button>Resume</button>
              <button>Projects</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
