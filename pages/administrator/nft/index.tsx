import { withAuthAdmin } from "@/HOC/withAuthAdmin";
import PageDescription from "@/components/admin/PageDescription";
import CreateNft from "@/components/admin/modals/CreateNft";
import { useGetAllNftDataQuery } from "@/redux/services/nftService";
import { Nft } from "@prisma/client";
import { NftColumns, columns } from "@/components/admin/table/nft/NftColumns";
import { DataTable } from "@/components/ui/data-table";
import TableSkeleton from "@/components/TableSkeleton";

const NftPage = () => {
  const { data: res, error, isLoading, refetch } = useGetAllNftDataQuery({});
  const nfts = res?.data as Nft[];

  const formatDataforTable: NftColumns[] = nfts?.map((nft) => ({
    id: nft.id,
    name: nft.name,
    imageUrl: nft.imageUrl,
    createdAt: new Date(nft.createdAt).toLocaleString("tr-TR"),
  }));

  return (
    <main>
      <div className="border-b flex items-center justify-between">
        <PageDescription
          length={nfts?.length}
          title="NFT's"
          description="Manage NFT's"
        />
        <CreateNft refetch={refetch} />
      </div>
      {error ? (
        <div className="w-full flex items-center justify-center h-40">
          An error occured.
        </div>
      ) : isLoading ? (
        <TableSkeleton />
      ) : (
        <DataTable columns={columns} data={formatDataforTable} />
      )}
    </main>
  );
};

export default NftPage;

export const getServerSideProps = withAuthAdmin(async (context) => {
  return { props: {} };
});
