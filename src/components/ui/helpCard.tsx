import React from "react";
import { CardDescription, CardTitle } from "./typography";
import Button from "./button";

type Props = {
  help: {
    title: string;
    description: string;
    icon: React.ReactNode;
    butonLabel: string;
  };
};

const HelpCard: React.FC<Props> = ({ help }) => {
  return (
    <div className="p-6 rounded-md border-2 shadow-md hover:shadow-gray-500 max-w-96 flex flex-col gap-4 h-64  items-center justify-between bg-background">
      <div className="flex gap-2 items-center">
        {help.icon}
        <CardTitle>{help.title}</CardTitle>
      </div>
      <CardDescription>{help.description}</CardDescription>
      <Button variant="outline" size="lg" className="text-sm">
        {help.butonLabel}
      </Button>
    </div>
  );
};

export default HelpCard;
