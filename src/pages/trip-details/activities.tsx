import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

import { ptBR } from "date-fns/locale";
import { CircleCheck } from "lucide-react";

interface IActivity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export function Activities() {
  const { tripId } = useParams<{ tripId: string }>();

  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then((response) => {
      setActivities(response.data.activities);
    });
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((category) => (
        <div key={category.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(category.date, "d")}
            </span>
            {/* <span className="text-xl text-zinc-300 font-semibold">Dia 17</span> */}
            {/* <span className="text-xs text-zinc-500">Sábado</span> */}
            <span className="text-xs text-zinc-500">
              {format(category.date, "EEEE", { locale: ptBR })}
            </span>
          </div>

          {category.activities.length === 0 ? (
            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
          ) : (
            <>
              {category.activities.map((activity) => (
                <div key={activity.id} className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-lg shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    {/* <span className="text-zinc-100">Academia em grupo</span> */}
                    <span className="text-zinc-400 text-sm ml-auto">
                      {format(activity.occurs_at, "HH:mm")}h
                    </span>
                    {/* <span className="text-zinc-400 text-sm ml-auto">08:00h</span> */}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
