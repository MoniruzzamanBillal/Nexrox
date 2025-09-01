import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const tags = [
  { name: "Remote", color: "bg-purple-100 text-purple-700" },
  { name: "Senior level", color: "bg-red-100 text-red-700" },
  { name: "Freelancer", color: "bg-green-100 text-green-700" },
];

const JobLoadingSkeleton = () => {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-6 w-2/3 mb-2" />
        <div className="flex justify-between items-center mt-3 bg-gray-200/90 p-2 rounded-md">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Skeleton className="h-4 mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Skeleton
              key={index}
              className={`h-6 w-24 ${tag.color} border-0`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-10 w-32" />
      </CardContent>
    </Card>
  );
};

export default JobLoadingSkeleton;
