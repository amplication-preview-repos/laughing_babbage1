import { Injectable } from "@nestjs/common";

@Injectable()
export class FacebookPostIntegrationService {
  constructor() {}
  async CreateFacebookPost(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
