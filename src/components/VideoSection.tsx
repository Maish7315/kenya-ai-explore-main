const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience the</span> Great Migration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness one of nature's most spectacular events - the annual wildebeest migration across the Maasai Mara plains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-elegant">
            <iframe
              src="https://www.youtube.com/embed/oTw4XnLnSmU"
              title="Wild Beast Migration Maasai Mara Kenya"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Watch the incredible journey of over 1.5 million wildebeest and hundreds of thousands of zebras
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;