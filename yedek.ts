import { withAuthAdmin } from "@/HOC/withAuthAdmin";
import PageDescription from "@/components/admin/PageDescription";
import CreateNft from "@/components/admin/modals/CreateNft";
import { useGetAllNftDataQuery } from "@/redux/services/nftService";
import React, { useEffect } from "react";
import { Nft } from "@prisma/client";
import { NftColumns, columns } from "@/components/admin/table/nft/NftColumns";
import { DataTable } from "@/components/ui/data-table";
import { useAppSelector } from "@/redux/store";
import { ApiResponse } from "@/types/typing";

const NftPage = () => {
  const { error, isLoading } = useGetAllNftDataQuery({});
  const nftsResponse: ApiResponse<Nft[]> = useAppSelector(
    (state) => state.nfts
  );
  const nfts = nftsResponse?.data as Nft[];

  const formatDataforTable: NftColumns[] = nfts?.map((nft, index) => ({
    id: index + 1,
    name: nft.name,
    imageUrl: nft.imageUrl,
    createdAt: new Intl.DateTimeFormat("tr-TR").format(new Date(nft.createdAt)),
  }));

  //console.log("DATA:", asd);
  return (
    <main>
      <div className="border-b flex items-center justify-between">
        <PageDescription
          length={nfts?.length}
          title="NFT's"
          description="Manage NFT's"
        />
        <CreateNft />
      </div>
      {error ? (
        <>An error occurred.</>
      ) : isLoading ? (
        <>Loading...</>
      ) : nfts ? (
        <DataTable columns={columns} data={formatDataforTable} />
      ) : null}
    </main>
  );
};

export default NftPage;

export const getServerSideProps = withAuthAdmin(async (context) => {
  return { props: {} };
});
