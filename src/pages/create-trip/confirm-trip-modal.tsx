import { User, X } from "lucide-react";
import { Button } from "../../components/button";

interface IConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: React.FormEvent<HTMLFormElement>) => void;
  setOwnerName: React.Dispatch<React.SetStateAction<string>>;
  setOwnerEmail: React.Dispatch<React.SetStateAction<string>>;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: IConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <button onClick={closeConfirmTripModal}>
              <X className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Você foi convidado(a) para participar de uma viagem para{" "}
            <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas
            datas de{" "}
            <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span>
            . Para confirmar sua presença na viagem, preencha os dados abaixo:
          </p>
        </div>

        <form className="space-y-3" onSubmit={createTrip}>
          <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              name="name"
              type="text"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </div>

          <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              name="email"
              type="email"
              placeholder="Seu email pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
              onChange={(event) => setOwnerEmail(event.target.value)}
            />
          </div>

          <Button type="submit" size="full" variant="primary">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
