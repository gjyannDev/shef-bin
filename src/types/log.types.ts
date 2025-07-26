import { Types } from "mongoose";

export interface ActivityLogs {
  itemId: Types.ObjectId;
  action: "add" | "updated" | "delete";
  details: string;
}
