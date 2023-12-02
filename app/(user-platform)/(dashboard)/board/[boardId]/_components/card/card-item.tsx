import { CardWithContent } from "@/types";
import React, { ElementRef, useRef, useState } from "react";
import CardHeader from "./card-header";
import ContentForm from "../content/content-form";

type Props = {
  idx: number;
  data: CardWithContent;
};

const CardItem = ({ data, idx }: Props) => {
  const [isEditMode, setEditMode] = useState(false);
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const onEditHandler = () => {
    setEditMode(true);
    // setTimeout needed because when button clicked and edit mode is activated ref dont select all or focuses the input
    // because of the conditional return
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 30);
  };

  return (
    <div className="shrink-0 w-[300px]">
      <div
        className="w-full rounded-md bg-gradient-to-r from-purple-900/60 to-sky-900/60 shadow-lg pb-2
      text-white
      "
      >
        <CardHeader data={data} onAddContent={onEditHandler} />
        <ContentForm
          cardId={data.id}
          ref={textareaRef}
          isEditMode={isEditMode}
          enableEditting={onEditHandler}
          disableEditting={() => {
            setEditMode(false);
          }}
        />

        {/* content list */}
        <div className="flex flex-col w-full gap-2 px-2">
          {data.contents.map((content) => (
            <p
              key={content.id}
              className="bg-white/90 text-neutral-700 p-2 rounded hover:bg-white hover:ring-2 cursor-pointer hover:ring-neutral-700 transition"
            >
              {content.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
