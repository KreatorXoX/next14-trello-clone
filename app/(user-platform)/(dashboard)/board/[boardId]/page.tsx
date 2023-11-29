import React from "react";

type Props = { params: { boardId: string } };

const BoardPage = ({ params }: Props) => {
  const boardId = params.boardId;
  return <div className="">BoardPage</div>;
};

export default BoardPage;
