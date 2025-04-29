const team = [
  {
    id: 1,
    name: "Alexandre Martin",
    position: "CEO & Senior Portfolio Manager",
    bio: "With over 20 years of experience in asset management, Alexandre leads our team with expertise in global markets.",
    imagePlaceholder: "AM"
  },
  {
    id: 2,
    name: "Sophie Dubois",
    position: "Chief Investment Officer",
    bio: "Sophie brings 15 years of investment strategy experience, specializing in fixed income and alternative investments.",
    imagePlaceholder: "SD"
  },
  {
    id: 3,
    name: "Marc Keller",
    position: "Head of Client Relations",
    bio: "Marc ensures our clients receive personalized service and clear communication about their investment strategies.",
    imagePlaceholder: "MK"
  },
  {
    id: 4,
    name: "Claire Moreau",
    position: "Senior Financial Analyst",
    bio: "Claire's analytical expertise helps identify investment opportunities across various sectors and markets.",
    imagePlaceholder: "CM"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a2e74] font-['campaign-serif']">Our Professional Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-[#0a2e74]/10">
              <div className="h-48 bg-[#0a2e74] flex items-center justify-center">
                <span className="text-white text-3xl font-bold">{member.imagePlaceholder}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 font-['campaign-serif']">{member.name}</h3>
                <p className="text-[#0a2e74] mb-3">{member.position}</p>
                <p className="text-black">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
