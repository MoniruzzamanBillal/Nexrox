import Wrapper from "@/components/shared/Wrapper";
import JobCard from "@/components/ui/JobCard";
import JobLoadingSkeleton from "@/components/ui/JobLoadingSkeleton";
import { useGetAllJobsQuery } from "@/redux/features/jobs/jobs.api";
import { TJob } from "@/types/globalTypes";

const Home = () => {
  const { data: jobsData, isLoading } = useGetAllJobsQuery(undefined);

  console.log(jobsData?.data);
  return (
    <div className="HomeContainer  bg-gray-50 ">
      <Wrapper className=" py-6  ">
        {/* Search results header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {jobsData?.data?.length} search result(s) found
          </h1>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading &&
            Array.from({ length: 6 })?.map((_, ind) => (
              <JobLoadingSkeleton key={ind} />
            ))}
          {jobsData &&
            jobsData?.data?.map((project: TJob) => (
              <JobCard key={project?._id} project={project} />
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
