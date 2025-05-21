import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-screen">
      <div className="w-[60%] bg-background"></div>
      <div className="w-[40%] bg-primary"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[70%] bg-green-500 flex items-center justify-center">
        <div>
          <Image src={"/PFP.png"} width={300} height={300} alt="Image of me" />
        </div>
      </div>
    </main>
  );
}
