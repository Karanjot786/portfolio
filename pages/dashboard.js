import Container from "@/components/Container";
import GitHub from "@/components/metrics/Github";
import Followers from "@/components/metrics/Followers";
import Following from "@/components/metrics/Following";
import Repositories from "@/components/metrics/Repositories";
// import TopTracks from "@/components/TopTracks";
import Analytics from "@/components/metrics/Analytics";

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Karanjot Singh"
      description="A Dashboard to show various metrics via Next JS _api routes, deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This dashboard is created with NextJS _api routes converted to
            serverless functions that tracks various metrics across platforms
            like GitHub and more 🚀.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <GitHub />
          <Followers />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Following />
          <Repositories />
        </div>{" "}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          
          <Analytics />
        </div>{" "}
        
        {/* <TopTracks /> */}
      </div>
    </Container>
  );
}