import { Log } from "../models/log.model.js";
import { ActivityLogs } from "../types/log.types.js";

export async function addActivityLogs({
  itemId,
  action,
  details,
}: ActivityLogs) {
  try {
    return await Log.create({
      itemId: itemId,
      action: action,
      details: details,
    });
  } catch (error) {
    console.error(error);
    return false;
  }
}
