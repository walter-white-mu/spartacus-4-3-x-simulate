import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { configuratorTranslations } from '@spartacus/product-configurator/common/assets';
import {
  PRODUCT_CONFIGURATOR_RULEBASED_FEATURE,
  RulebasedConfiguratorRootModule,
} from '@spartacus/product-configurator/rulebased/root';
import { VariantConfiguratorInteractiveLayoutModule } from '@spartacus/product-configurator/rulebased/root';
import { VariantConfiguratorOverviewLayoutModule } from '@spartacus/product-configurator/rulebased/root';

@NgModule({
  imports: [
    RulebasedConfiguratorRootModule,
    VariantConfiguratorInteractiveLayoutModule,
    VariantConfiguratorOverviewLayoutModule,
  ],
  providers: [
    provideConfig({
      featureModules: {
        [PRODUCT_CONFIGURATOR_RULEBASED_FEATURE]: {
          module: () =>
            import('@spartacus/product-configurator/rulebased').then(
              (m) => m.RulebasedConfiguratorModule
            ),
        },
      },
      i18n: {
        resources: configuratorTranslations,
      },
    }),
  ],
})
export class ProductConfiguratorRulebasedFeatureModule {}
