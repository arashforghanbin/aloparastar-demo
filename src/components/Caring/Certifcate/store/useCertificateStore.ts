import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CertificateState = {
  certificateSelected: number;
  mustHaveCertificate: boolean;
};

export type CertificateAction = {
  setCertificateSelected: (v: number) => void;
  setMustHaveCertificate: (v: boolean) => void;
  reset: () => void;
};

const initialState = {
  certificateSelected: -1,
  mustHaveCertificate: false,
};

const useCertificateStore = create(
  persist<CertificateState & CertificateAction>(
    (set) => ({
      ...initialState,
      setCertificateSelected: (v) => set(() => ({ certificateSelected: v })),
      setMustHaveCertificate: (v) => set(() => ({ mustHaveCertificate: v })),
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "certificate",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCertificateStore;
