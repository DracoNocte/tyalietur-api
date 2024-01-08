import { Module } from '@nestjs/common';
import { ExampleModule } from '@features/_example/example.module';

const featureModules = [ExampleModule];

@Module({
  imports: featureModules,
  exports: featureModules,
})
export class FeaturesModule {}
