import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  link: string;
  title: string;
}

function OverviewCardTop({ path, link, title }: Props) {
  return (
    <div className="flex justify-between">
      <h2 className="text-gray-900 font-bold text-[20px]">{title}</h2>
      <Link className="text-gray-500 hover:text-gray-900 flex gap-3" to={path}>
        {link}
        <ChevronRight />
      </Link>
    </div>
  );
}

export default React.memo(OverviewCardTop);
