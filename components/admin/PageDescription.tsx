import React from "react";

type Props = {
  title: string;
  description: string;
  length?: number;
};

function PageDescription({ title, description, length }: Props) {
  return (
    <div className="py-2">
      <h2 className="font-bold text-3xl">
        {title} <span className="text-xl">{length ? `(${length})` : ""}</span>
      </h2>
      <h3 className="text-gray-500 text-sm">{description}</h3>
    </div>
  );
}

export default PageDescription;
