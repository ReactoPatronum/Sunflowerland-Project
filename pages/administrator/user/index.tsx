import { withAuthAdmin } from "@/HOC/withAuthAdmin";
import TableSkeleton from "@/components/TableSkeleton";
import PageDescription from "@/components/admin/PageDescription";
import {
  UserColumns,
  columns,
} from "@/components/admin/table/user/UserColumns";
import { DataTable } from "@/components/ui/data-table";
import { useGetAllUsersQuery } from "@/redux/services/userService";
import { User } from "@prisma/client";
import React from "react";

const Index = () => {
  const { data: res, error, isLoading, refetch } = useGetAllUsersQuery({});
  const users = res?.data as User[];

  const formatDataForTable: UserColumns[] = users?.map((user) => ({
    id: user.id,
    name: user.name,
    image: user.image,
    isAdmin: user.isAdmin,
    provider: user.provider,
    email: user.email,
    updatedAt: new Date(user.updatedAt).toLocaleString("tr-TR"),
    createdAt: new Date(user.createdAt).toLocaleString("tr-TR"),
  }));

  return (
    <main>
      <div className="border-b flex items-center justify-between">
        <PageDescription
          length={users?.length}
          title="User's"
          description="Manage User's"
        />
      </div>
      {error ? (
        <div className="w-full flex items-center justify-center h-40">
          An error occured.
        </div>
      ) : isLoading ? (
        <TableSkeleton />
      ) : (
        <DataTable columns={columns} data={formatDataForTable} />
      )}
    </main>
  );
};

export default Index;

export const getServerSideProps = withAuthAdmin(async (context) => {
  return { props: {} };
});
