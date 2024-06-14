import * as graphql from "@nestjs/graphql";
import { DashboardService } from "./dashboard.service";

export class DashboardResolver {
  constructor(protected readonly service: DashboardService) {}

  @graphql.Query(() => String)
  async GetLeadsWithStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetLeadsWithStatus(args);
  }

  @graphql.Query(() => String)
  async GetPropertyListingsWithStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetPropertyListingsWithStatus(args);
  }
}
