import type { BrowserWindow } from 'electron';

/**
 * Returns `true` if Alteration Mod Manager is running via `vite dev`.
 *
 * This is determined by checking the existence of the `VITE_DEV_SERVER_URL`
 * environment variable.
 *
 * @returns `true` if Alteration Mod Manager is being run via Vite's dev server.
 */
export const isDevServerMode = (): boolean => {
  return !!process.env.VITE_DEV_SERVER_URL;
};

/**
 * Returns the URL to the Vite dev server.
 *
 * @throws When Alteration Mod Manager is not being run via Vite Dev Server.
 *
 * @returns Vite dev server URL.
 */
export const getDevServerUrl = (): string => {
  if (!process.env.VITE_DEV_SERVER_URL) {
    throw new Error('Alteration Mod Manager is not running via a dev server.');
  }
  return process.env.VITE_DEV_SERVER_URL;
};

/**
 * Returns the URL to the Vite dev server for a specific app entrypoint.
 *
 * @param entrypoint - The entrypoint for which to return a Vite dev server URL.
 *
 * @throws When Alteration Mod Manager is not being run via Vite Dev Server.
 *
 * @returns Vite dev server URL for entrypoint.
 */
export const getDevServerUrlForEntrypoint = (entrypoint: string): string => {
  return `${getDevServerUrl()}/html/index.${entrypoint}.html`;
};

/**
 * Returns the path to the given entrypoint's HTML file.
 *
 * @param entrypoint - The entrypoint for which to return an entrypoint path.
 *
 * @returns Entrypoint path.
 */
export const getPathForEntrypoint = (entrypoint: string): string => {
  return `${__dirname}/html/index.${entrypoint}.html`;
};

/**
 * Loads an entrypoint using the given window.
 *
 * @param window - Window with which to load entrypoint.
 * @param entrypoint - Entrypoint to load.
 */
export const loadWindowEntrypoint = (window: BrowserWindow, entrypoint: string) => {
  if (isDevServerMode()) {
    window.loadURL(getDevServerUrlForEntrypoint(entrypoint));
  }
  else {
    window.loadFile(getPathForEntrypoint(entrypoint));
  }
};
