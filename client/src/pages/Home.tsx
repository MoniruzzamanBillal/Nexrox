import Wrapper from "@/components/shared/Wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    id: 1,
    date: "Apr 30, 2024",
    title: "Website Design and Front-End Development",
    type: "Fixed Price Project",
    price: "$1,200-$1,400",
    description:
      "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
    tags: [
      { name: "Remote", color: "bg-purple-100 text-purple-700" },
      { name: "Senior level", color: "bg-red-100 text-red-700" },
      { name: "Freelancer", color: "bg-green-100 text-green-700" },
    ],
    skills: ["App Design", "Art Generation", "Illustration"],
    moreSkills: 5,
    client: "Earnman Oto",
  },
  {
    id: 2,
    date: "Apr 30, 2024",
    title: "Website Design and Front-End Development",
    type: "Fixed Price Project",
    price: "$1,200-$1,400",
    description:
      "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
    tags: [
      { name: "Remote", color: "bg-purple-100 text-purple-700" },
      { name: "Senior level", color: "bg-red-100 text-red-700" },
      { name: "Freelancer", color: "bg-green-100 text-green-700" },
    ],
    skills: ["App Design", "Art Generation", "Illustration"],
    moreSkills: 5,
    client: "Earnman Oto",
  },
  {
    id: 3,
    date: "Apr 30, 2024",
    title: "Website Design and Front-End Development",
    type: "Fixed Price Project",
    price: "$1,200-$1,400",
    description:
      "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
    tags: [
      { name: "Remote", color: "bg-purple-100 text-purple-700" },
      { name: "Senior level", color: "bg-red-100 text-red-700" },
      { name: "Freelancer", color: "bg-green-100 text-green-700" },
    ],
    skills: ["App Design", "Art Generation", "Illustration"],
    moreSkills: 5,
    client: "Earnman Oto",
  },
  {
    id: 4,
    date: "Apr 30, 2024",
    title: "Website Design and Front-End Development",
    type: "Fixed Price Project",
    price: "$1,200-$1,400",
    description:
      "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
    tags: [
      { name: "Remote", color: "bg-purple-100 text-purple-700" },
      { name: "Senior level", color: "bg-red-100 text-red-700" },
      { name: "Freelancer", color: "bg-green-100 text-green-700" },
    ],
    skills: ["App Design", "Art Generation", "Illustration"],
    moreSkills: 5,
    client: "Earnman Oto",
  },
  {
    id: 5,
    date: "Apr 30, 2024",
    title: "Website Design and Front-End Development",
    type: "Fixed Price Project",
    price: "$1,200-$1,400",
    description:
      "In this role, you will be responsible for conducting comprehensive SEO audits and implementing strategies to optimize websites...",
    tags: [
      { name: "Remote", color: "bg-purple-100 text-purple-700" },
      { name: "Senior level", color: "bg-red-100 text-red-700" },
      { name: "Freelancer", color: "bg-green-100 text-green-700" },
    ],
    skills: ["App Design", "Art Generation", "Illustration"],
    moreSkills: 5,
    client: "Earnman Oto",
  },
];

const Home = () => {
  return (
    <div className="HomeContainer  bg-gray-50 ">
      <Wrapper className=" py-6  ">
        {/* Search results header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {projects.length} search result(s) found
          </h1>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="text-sm text-gray-500 mb-2">{project.date}</div>
                <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                  {project.title}
                </CardTitle>
                <div className="flex justify-between items-center mt-3 bg-gray-200/90 p-2 rounded-md ">
                  <span className="text-sm text-gray-700">
                    {" "}
                    Fixed Price Project{" "}
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {project.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`${tag.color} border-0`}
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-gray-600 border-gray-300"
                    >
                      {skill}
                    </Badge>
                  ))}

                  <p className=" text-sm "> +{project.moreSkills} more</p>
                </div>

                {/* Client and Apply button */}
                <div className="  mb-3 ">
                  <span className="text-sm text-gray-500">Posted by</span>{" "}
                  <span className="text-sm text-gray-900 font-semibold ">
                    {" "}
                    {project.client}{" "}
                  </span>
                </div>
                <Button className="bg-black hover:bg-gray-800 text-white px-6">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
