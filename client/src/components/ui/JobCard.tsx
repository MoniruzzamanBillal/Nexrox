import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TJob } from "@/types/globalTypes";
import { format } from "date-fns";

const tags = [
  { name: "Remote", color: "bg-purple-100 text-purple-700" },
  { name: "Senior level", color: "bg-red-100 text-red-700" },
  { name: "Freelancer", color: "bg-green-100 text-green-700" },
];

const JobCard = ({ project }: { project: TJob }) => {
  return (
    <Card
      key={project?._id}
      className="bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <CardHeader className="pb-3">
        <div className="text-sm text-gray-500 mb-2">
          {format(new Date(project?.createdAt), "dd-MMMM-yyyy")}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
          {project?.title}
        </CardTitle>
        <div className="flex justify-between items-center mt-3 bg-gray-200/90 p-2 rounded-md ">
          <span className="text-sm text-gray-700"> Fixed Price Project </span>
          <span className="text-lg font-semibold text-gray-900">
            {project?.lowSalary}$ - {project?.highSalary}$
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-4 line-clamp-3">
          {project?.description}
        </CardDescription>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
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
          {project?.category?.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-gray-600 border-gray-300"
            >
              {skill}
            </Badge>
          ))}
          {project?.category?.length > 4 && (
            <p className=" text-sm "> +{project?.category?.length} more</p>
          )}
        </div>

        {/* Client and Apply button */}
        <div className="  mb-3 ">
          <span className="text-sm text-gray-500">Posted by</span>{" "}
          <span className="text-sm text-gray-900 font-semibold ">
            {project?.author?.name}
          </span>
        </div>
        <Button className="bg-black hover:bg-gray-800 text-white px-6">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
