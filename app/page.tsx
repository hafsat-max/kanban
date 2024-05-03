import Ticket from "@/components/ticket";
import { data } from "@/components/utils/data";

export default function Home() {
  const status = ['Not started' ,'Ongoing',  'Completed'];
  return (
    <main className="h-screen flex justify-center items-center flex-1">
      <div className="w-[70%] mx-auto flex justify-between border rounded-xl p-3 h-[80%] overflow-auto shadow">
        {status.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-5">
            <h3 className="font-extrabold text-2xl">{item}</h3>
            {data
              .filter((project) => project.status === item)
              .map((project, index) => (
                <Ticket key={index} project={project}  />
              ))}
          </div>
        ))}
      </div>
    </main>
  );
}