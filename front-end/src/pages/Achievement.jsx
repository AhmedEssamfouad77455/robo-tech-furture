
const Achievements = () => {
  const competitions = [
    {
      title: "GENIUS CUP EGYPT 2025",
      description:
        "Won 1st place for developing a smart learning platform using AI technology.",
      image: "https://via.placeholder.com/400x250",
      year: "2024",
    },
    {
      title: "Digital Egypt Pioneers Initiative",
      description:
        "Our AI team reached the top 5 finalists nationwide with an advanced chatbot project.",
      image: "https://via.placeholder.com/400x250",
      year: "2023",
    },
    {
      title: "Startup Weekend Alexandria",
      description:
        "Presented an educational startup idea and achieved 2nd place out of 40 teams.",
      image: "https://via.placeholder.com/400x250",
      year: "2023",
    },
    {
      title: "Code4Future Challenge",
      description:
        "Developed a sustainability web app to promote eco-friendly technology.",
      image: "https://via.placeholder.com/400x250",
      year: "2022",
    },
    {
      title: "Tech Innovators Cup",
      description:
        "Competed with 50+ teams and secured 3rd place for innovation and creativity.",
      image: "https://via.placeholder.com/400x250",
      year: "2021",
    },
  ];

  const awards = [
    {
      title: "Best Educational Academy 2024",
      description:
        "Recognized as one of the leading academies in Egypt for innovation in education.",
      image: "https://via.placeholder.com/400x250",
      year: "2024",
    },
    {
      title: "Community Impact Award",
      description:
        "Awarded for outstanding contribution to youth education and development.",
      image: "https://via.placeholder.com/400x250",
      year: "2023",
    },
  ];

  const stats = [
    { number: "500+", label: "Graduates" },
    { number: "120+", label: "Awards & Certificates" },
    { number: "30+", label: "Strategic Partnerships" },
    { number: "5+", label: "Years of Excellence" },
  ];

  const galleryImages = [
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
  ];

  return (
    <div className="bg-gray-50 py-20">
  

      {/* Competitions Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Competitions We Participated In
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={comp.image}
                alt={comp.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {comp.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{comp.description}</p>
                <span className="text-blue-600 text-sm font-medium">
                  {comp.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Awards & Recognitions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {award.description}
                </p>
                <span className="text-blue-600 text-sm font-medium">
                  {award.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Academy in Numbers
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl px-8 py-6 w-48 hover:scale-105 transition-transform"
            >
              <p className="text-3xl font-bold text-blue-600">{s.number}</p>
              <p className="text-gray-700 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Achievements Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className="rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Achievements;
