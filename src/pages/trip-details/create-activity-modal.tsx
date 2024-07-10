import { Calendar, Tag, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";

interface ICreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: ICreateActivityModalProps) {
  const { tripId } = useParams<{ tripId: string }>();

  async function createActivity(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title") as string;
    const occurs_at = data.get("occurs_at") as string;

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    });

    // closeCreateActivityModal();
    window.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividades</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">Todos convidados podem ver a atividade</p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Qual a atividade"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>

          <div className="px-4 h-14 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              name="occurs_at"
              type="datetime-local"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
            />
          </div>

          <Button size="full" type="submit" variant="primary">
            Salvar Atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
