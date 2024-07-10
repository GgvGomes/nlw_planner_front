import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "../../../components/button";

import { format } from "date-fns";

import "react-day-picker/dist/style.css";

interface IDestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  setEventStartAndEndDates: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  eventStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  closeGuestInput,
  isGuestInputOpen,
  openGuestInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates
}: IDestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndEndDates?.from && eventStartAndEndDates?.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestInputOpen}
        className="flex items-center gap-2 outline-none text-left">
        <Calendar className="size-5 text-zinc-400" />
        <span className="bg-transparent text-lg text-zinc-400 flex-1 min-w-24">
          {displayedDate || "Quando?"}
        </span>
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data <Settings2 className="size-5 " />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          Continuar <ArrowRight className="size-5 " />
        </Button>
      )}

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className=" rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione uma data</h2>
                <button onClick={closeDatePicker}>
                  <X className="size-5" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}
    </div>
  );
}
