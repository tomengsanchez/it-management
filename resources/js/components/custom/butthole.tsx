import React from "react";
import { cn } from "@/lib/utils";
export function Butthole({ 
    className,
    dataAttrib: attrib,
    itData:it,
    }: React.ComponentProps<"div"> & {
      dataAttrib?: string;
      className?: string;
      itData?: string;
}) {
  return (
    <div data-attrib={attrib}>
      <b>Hello</b>
      <i>{it}</i>
    </div>
  );
  };

