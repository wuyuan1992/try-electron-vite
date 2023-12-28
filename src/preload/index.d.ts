import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      ipcInvoke: <D, T>(event: string, args: D) => Promise<T>;
    };
  }
}
