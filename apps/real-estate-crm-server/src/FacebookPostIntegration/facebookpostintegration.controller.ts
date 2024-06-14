import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FacebookPostIntegrationService } from "./facebookpostintegration.service";

@swagger.ApiTags("facebookPostIntegrations")
@common.Controller("facebookPostIntegrations")
export class FacebookPostIntegrationController {
  constructor(protected readonly service: FacebookPostIntegrationService) {}

  @common.Post("/facebook-post")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateFacebookPost(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateFacebookPost(body);
      }
}
