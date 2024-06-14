import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type HouseKeepingState = {
  meterSelected: number;
  houseKeeping: string;
};

export type HouseKeepingAction = {
  setMeterSelected: (v: number) => void;
  setHouseKeeping: (v: string) => void;
  reset: () => void;
};

const initialState = {
  meterSelected: -1,
  houseKeeping: "false",
};

const useHouseKeepingStore = create(
  persist<HouseKeepingState & HouseKeepingAction>(
    (set) => ({
      ...initialState,
      setMeterSelected: (v) => set(() => ({ meterSelected: v })),
      setHouseKeeping: (v) => set(() => ({ houseKeeping: v })),
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "housekeeping",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useHouseKeepingStore;
