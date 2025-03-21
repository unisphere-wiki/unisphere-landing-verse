
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  fallback: string;
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sandile Chitsa",
      role: "Designer",
      fallback: "SC",
    },
    {
      name: "Melody Amaizu",
      role: "AI-Charmer",
      fallback: "MA",
    },
    {
      name: "Jyojith George Thaliath",
      role: "Technical Architect",
      fallback: "JG",
    },
    {
      name: "Paola Andrea",
      role: "Visionary",
      fallback: "PA",
    },
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the brilliant minds behind UniSphere, working together to transform how we connect and share knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-unisphere-100 to-knowledge-100 pt-8 pb-4 px-4 flex justify-center">
                <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : (
                    <AvatarFallback className="text-xl bg-gradient-to-r from-unisphere-600 to-knowledge-500 text-white">
                      {member.fallback}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <CardContent className="text-center pt-4">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex justify-center">
                  <a 
                    href="#" 
                    className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
