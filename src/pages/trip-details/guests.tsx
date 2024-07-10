import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";

interface IParticipants {
  id: string;
  nome: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams<{ tripId: string }>();

  const [participants, setParticipants] = useState<IParticipants[] | undefined>();

  useEffect(() => {
    api.get(`trips/${tripId}/participants`).then((response) => {
      setParticipants(response.data.participants);
    });
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {/* <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 ">
            <span className="block font-medium text-zinc-100">Jessica White</span>
            <span className="block font-xs text-zinc-400 truncate">
              jessica.white@yahoo.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div> */}

        {participants?.map((participant, index) => (
          <div key={participant.id} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 ">
              <span className="block font-medium text-zinc-100">{participant.nome || `Convidado ${index + 1}`}</span>
              {/* <span className="block font-medium text-zinc-100">Dr. Ricka</span> */}
              <span className="block font-xs text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>

            {participant?.is_confirmed ? (
              <CheckCircle2 className="size-5 text-green-400 shrink-0" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5 text-zinc-400" />
        Gerenciar Convidados
      </Button>
    </div>
  );
}
