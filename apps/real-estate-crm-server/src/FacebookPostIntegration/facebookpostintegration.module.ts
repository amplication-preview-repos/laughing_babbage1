import { Module } from "@nestjs/common";
import { FacebookPostIntegrationService } from "./facebookpostintegration.service";
import { FacebookPostIntegrationController } from "./facebookpostintegration.controller";
import { FacebookPostIntegrationResolver } from "./facebookpostintegration.resolver";

@Module({
  controllers: [FacebookPostIntegrationController],
  providers: [FacebookPostIntegrationService, FacebookPostIntegrationResolver],
  exports: [FacebookPostIntegrationService],
})
export class FacebookPostIntegrationModule {}
