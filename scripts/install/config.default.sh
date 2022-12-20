# These are the default configs
# DON'T EDIT THIS FILE
# If you want to use different values, create a file named 'config.sh'
# If present, 'config.sh' will be used as well in addition to 'config.default.sh' (to override variables).

# Url of the hybris backend
# Will replace default host (https://localhost:9002) as a backend endpoint
# Make sure you specify the full url for the backend (https://[host]:[port]
BACKEND_URL="https://localhost:9002"

# A comma separated list of base sites.
# When empty, the base sites will not be explicitly specified in spartacus-configuration.module.ts
BASE_SITE=

OCC_PREFIX="/occ/v2/"

SPARTACUS_PROJECTS=(
        "projects/core"
        "projects/assets"
        "projects/storefrontlib"
        "projects/storefrontstyles"
        "projects/schematics"
        "integration-libs/cds"
        "integration-libs/cdc"
        "integration-libs/epd-visualization"
        "core-libs/setup"
        "feature-libs/asm"
        "feature-libs/organization"
        "feature-libs/storefinder"
        "feature-libs/checkout"
        "feature-libs/smartedit"
        "feature-libs/product"
        "feature-libs/product-configurator"
        "feature-libs/qualtrics"
        "feature-libs/cart"
        "feature-libs/order"
        "feature-libs/user"
        "feature-libs/tracking"
        )

SPARTACUS_REPO_URL="https://github.com/SAP/spartacus.git"
BRANCH='develop'

# custom location for the installation output
# BASE_DIR='/tmp/'

# other locations
CLONE_DIR="clone"
INSTALLATION_DIR="apps"
E2E_TEST_DIR=${CLONE_DIR}/projects/storefrontapp-e2e-cypress

ANGULAR_CLI_VERSION='~12.0.5'
SPARTACUS_VERSION='latest'

CSR_PORT="4200"
SSR_PORT="4100"
SSR_PWA_PORT=

CSR_APP_NAME="csr"
SSR_APP_NAME="ssr"
SSR_PWA_APP_NAME="ssr-pwa"

ADD_B2B_LIBS=false

ADD_CPQ=false
ADD_CDC=false
# config.epd-visualization.sh contains default values to use in your config.sh when ADD_EPD_VISUALIZATION is true.
ADD_EPD_VISUALIZATION=false

# The base URL (origin) of the SAP EPD Fiori launchpad
EPD_VISUALIZATION_BASE_URL=
