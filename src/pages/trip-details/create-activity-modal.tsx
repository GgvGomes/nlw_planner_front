import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface ICreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: ICreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividades</h2>
            <Button onClick={closeCreateActivityModal}>
              <X className="size-5" />
            </Button>
          </div>

          <p className="text-sm text-zinc-400">Todos convidados podem ver a atividade</p>
        </div>

        <form className="space-y-3">
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

          <Button
          size="full"
            // className="w-full justify-center h-11 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
            type="submit"
            variant="primary">
            Salvar Atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
