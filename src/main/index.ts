import { app, BrowserWindow } from 'electron'
import { loadWindowEntrypoint } from '@src/main/window/util';

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: 'Main window',
  });

  loadWindowEntrypoint(win, 'main');
});
