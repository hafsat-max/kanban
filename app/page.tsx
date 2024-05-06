
'use client'
import Ticket from "@/components/ticket";
import { data } from "@/components/utils/data";
import { DragEvent, useState } from "react";

export default function Home() {
  const [tickets, setTickets] = useState(data);
  const status = ["Not started", "Ongoing", "Completed"];

  const handleDrop = (e: DragEvent<HTMLDivElement>, item: string): void => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    console.log("Dropped ticket ID:", id, "to status:", item);

    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: item };
      }
      return ticket;
    });

    setTickets(updatedTickets);
  };

  return (
    <main className="h-screen flex justify-center items-center flex-1">
      <div className=" mx-auto flex flex-wrap gap-5 border  rounded-xl p-4  overflow-auto shadow">
        {status.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-5 min-w-[286px] p-2"
            onDrop={(e) => handleDrop(e, item)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h3 className="font-extrabold text-2xl">{item}</h3>
            {tickets
              .filter((ticket) => ticket.status === item)
              .map((ticket, index) => (
                <Ticket key={index} project={ticket} />
              ))}
          </div>
        ))}
      </div>
    </main>
  );
}
