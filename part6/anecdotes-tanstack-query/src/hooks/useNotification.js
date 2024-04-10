import { useContext } from "react";
import { NotificationContext } from "../contexts/notificationContext";

export function useNotification () {
  return useContext(NotificationContext)
}