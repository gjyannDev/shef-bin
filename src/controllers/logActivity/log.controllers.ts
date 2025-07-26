import { Request, Response } from "express";
import { getLogActivity } from "../../services/log.services.js";
import { formatPrettyDate } from "../../utils/dateFormatter.js";

export async function getLogActivityPage(req: Request, res: Response) {
  try {
    const log_activity = await getLogActivity();

    return res.render("pages/logActivity", {
      logs:
        log_activity?.map((log) => ({
          ...log.toObject(),
          formattedTime: formatPrettyDate(log.createdAt),
        })) || [],
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
