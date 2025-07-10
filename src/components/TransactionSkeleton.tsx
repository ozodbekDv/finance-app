import React from "react";
import { Skeleton } from "./ui/skeleton";

function TransactionSkeleton() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex ld:gap-8 gap-4 ">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <Skeleton className="h-8 w-[120px] ml-17" />
      <Skeleton className="h-8 w-[120px]" />
      <Skeleton className="h-8 w-[50px]" />
    </div>
  );
}

export default React.memo(TransactionSkeleton);
