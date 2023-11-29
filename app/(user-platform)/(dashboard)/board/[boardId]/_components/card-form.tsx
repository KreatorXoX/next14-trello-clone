"use client";

import CardWrapper from "./card-wrapper";

type Props = {};

const CardForm = (props: Props) => {
  return (
    <CardWrapper>
      <form action="" className="w-full p-3 rounded-md bg-white">
        <button className="w-full">Add a list</button>
      </form>
    </CardWrapper>
  );
};

export default CardForm;
