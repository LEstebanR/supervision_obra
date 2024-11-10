import Link from "next/link";
import { CardDescription, CardTitle } from "./typography";

type Props = {
  tool: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    commingsoon?: boolean;
  };
};

const ToolCard: React.FC<Props> = ({ tool }) => {
  if (tool.commingsoon) {
    return (
      <div className="p-6 rounded-md border-2 shadow-md hover:shadow-gray-500 max-w-96 flex flex-col gap-4 h-56  items-center justify-center">
        <div className="flex gap-2 items-center">
          {tool.icon}
          <CardTitle className="text-gray-300">{tool.title}</CardTitle>
        </div>
        <p className="text-center text-gray-500 text-3xl z-10 rotate-45">
          Próximamente
        </p>
      </div>
    );
  }

  return (
    <Link href={tool.link}>
      <div className="p-6 rounded-md border-2 shadow-md hover:shadow-primary max-w-96 flex flex-col gap-4 h-56">
        <div className="flex gap-2 items-center">
          {tool.icon}
          <CardTitle>{tool.title}</CardTitle>
        </div>
        <CardDescription>{tool.description}</CardDescription>
      </div>
    </Link>
  );
};

export default ToolCard;
