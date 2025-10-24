import olkutotoImage from "@/assets/Olkutoto.jpeg";

const OlkutotoBanner = () => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src={olkutotoImage}
            alt="Olkutoto Tours"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
};

export default OlkutotoBanner;