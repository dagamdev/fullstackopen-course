/**
 * @typedef {Object} Notifi
 * @property {'success' | 'error'} type - Type of notification
 * @property {string} message - Message of notification
 */

/**
 * @typedef {{name: string, username: string, token: string}} UserSession
 * @typedef {{id: string, title: string, author: string, url: string, likes: number}} Blog
 */

/**
 * @typedef {Notifi | null} NotifiState
 * @typedef {UserSession | null} UserState
 */

/**
 * @template T
 * @typedef {import("react").Dispatch<import("react").SetStateAction<T>>} SetState
 */
