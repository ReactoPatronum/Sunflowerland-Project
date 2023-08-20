import React from "react";

type Props = {
  title: string;
  description: string;
};

function PageDescription({ title, description }: Props) {
  return (
    <div className="py-2">
      <h2 className="font-bold text-3xl">{title}</h2>
      <h3 className="text-gray-500 text-sm">{description}</h3>
    </div>
  );
}

export default PageDescription;
