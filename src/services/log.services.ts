import { Log } from "../models/log.model.js";

export async function getLogActivity() {
  try {
    const logs = await Log.find();

    return logs;
  } catch (error) {
    console.error(error);
  }
}
