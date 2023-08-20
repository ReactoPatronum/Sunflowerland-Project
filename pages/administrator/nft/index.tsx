import { withAuthAdmin } from "@/HOC/withAuthAdmin";
import PageDescription from "@/components/admin/PageDescription";
import CreateNft from "@/components/admin/modals/CreateNft";
import React from "react";
import { Nft } from "@prisma/client";

const NftPage = ({ allNfts }: { allNfts: Nft[] }) => {
  console.log(allNfts);
  return (
    <main>
      <div className="border-b flex items-center justify-between">
        <PageDescription title="NFT's" description="Manage NFT's" />
        <CreateNft />
      </div>
    </main>
  );
};

export default NftPage;

export const getServerSideProps = withAuthAdmin(async (context) => {
  const res = await fetch("http://localhost:3000/api/nft/getAll");
  const allNfts: Nft[] = await res.json();
  return { props: { allNfts } };
});
