import { Avatar } from "@mantine/core";
import React, { ReactNode } from "react";
import { data } from "./utils/data";
import { Activity } from "iconsax-react";

const Ticket = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    user: string;
    duration: number | string;
    status: string;
    icon?: ReactNode;
    color?:string
  };
}) => {
  return (
    <div
      draggable
      className="shadow z-50 flex flex-col gap-5 border border-[#F0F0F0] rounded-lg p-3 min-w-[286px]"
    >
      <div className=" flex flex-col gap-1">
        <span className="font-medium text-xs text-[#8F8E91]">
          {project.title}
        </span>
        <h4 className="font-medium text-sm text-[#3851DD]">
          {project.description}
        </h4>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size={24} radius="100%" />
          <p className="text-[#5D5B60] font-xs font-medium ">{project.user}</p>
        </div>
        <Activity size="32" color={`${project.status ==='Ongoing'?'#2ecc71':project.status==='Not started'?'#95a5a6 ':'#3498db' }`} /> 
        {/* <p className="font-[10px] text-[#1A171F]">{project.icon}</p> */}
      </div>
    </div>
  );
};

export default Ticket;
