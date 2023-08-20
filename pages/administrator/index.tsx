import { withAuthAdmin } from "@/HOC/withAuthAdmin";
import PageDescription from "@/components/admin/PageDescription";

export default function AdminHome() {
  return (
    <main>
      <PageDescription title="Dashboard" description="Overview of your app" />
    </main>
  );
}

// export const getServerSideProps = withAuthAdmin(async (context) => {
//   return { props: {} };
// });
