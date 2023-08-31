import { withAuthAdmin } from "@/HOC/withAuthAdmin";
import SkeletonDemo from "@/components/TableSkeleton";
import PageDescription from "@/components/admin/PageDescription";

export default function AdminHome() {
  return (
    <main>
      <PageDescription title="Dashboard" description="Overview of your app" />
      <SkeletonDemo />
    </main>
  );
}

// export const getServerSideProps = withAuthAdmin(async (context) => {
//   return { props: {} };
// });
