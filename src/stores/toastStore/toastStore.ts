import { create } from "zustand";

interface ToastState {
  showToast: boolean;
  setShowToast: (value: boolean) => void;
  closeToast: () => void;
}

export const toastStore = create<ToastState>((set) => ({
  showToast: false,
  setShowToast: (value: boolean) =>
    set((state) => ({
      showToast: (state.showToast = value),
    })),
  closeToast: () =>
    set((state) => ({
      showToast: (state.showToast = false),
    })),
}));
