import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface IInviteGuestsStepsProps {
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
  openGuestModal: () => void;
}

export function InviteGuestsSteps({
  emailsToInvite,
  openConfirmTripModal,
  openGuestModal,
}: IInviteGuestsStepsProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button onClick={openGuestModal} className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100 flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-lg text-zinc-400 flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viagem <ArrowRight className="size-5 " />
      </Button>
    </div>
  );
}
