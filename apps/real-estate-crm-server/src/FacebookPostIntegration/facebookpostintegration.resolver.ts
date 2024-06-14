import * as graphql from "@nestjs/graphql";
import { FacebookPostIntegrationService } from "./facebookpostintegration.service";

export class FacebookPostIntegrationResolver {
  constructor(protected readonly service: FacebookPostIntegrationService) {}

  @graphql.Mutation(() => String)
  async CreateFacebookPost(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateFacebookPost(args);
  }
}
