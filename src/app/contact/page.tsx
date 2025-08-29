import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black py-12 pt-36">
      <h1 className="text-center text-5xl md:text-7xl font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
      <div className="mt-10 px-4 flex flex-col justify-center items-center gap-4 max-w-5xl w-full">
        <input
          type="text"
          placeholder="Your email address"
          className="p-4 border border-gray-700 rounded-4xl w-full z-1"
        />
        <textarea
          name=""
          id=""
          rows={8}
          placeholder="Your message"
          className="p-4 border border-gray-700 rounded-4xl z-1 w-full"
        ></textarea>
        <button className="p-4 rounded-4xl cursor-pointer z-1 text-gray-900 bg-gray-400">
          Send Message
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
