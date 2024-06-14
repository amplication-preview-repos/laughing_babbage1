import { Injectable } from "@nestjs/common";

@Injectable()
export class DashboardService {
  constructor() {}
  async GetLeadsWithStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetPropertyListingsWithStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
