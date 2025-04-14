#!/bin/bash

# coloring https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color


# handling arguments
checkIfInstallNecessary=0

for variable in "$@"
do
    case "${variable}" in
        check) checkIfInstallNecessary=1
        ;;
    esac
done

# if "check" parameter given, check first before install
if [ "$checkIfInstallNecessary" = "1" ]
  then
    if [ -d ".ddev/commands" ] && [ -d "test/playwright/node_modules" ];
      then
        printf "${GREEN}-> Install check: project setup is ready.${NC}\n"
        exit 0
    fi
fi

# do not double start this script:
if test -f "./Build/INSTALLATION_RUNNING";
  then
    exit
fi

# blocking other scripts while intall process
touch ./Build/INSTALLATION_RUNNING

printf "${GREEN}Run ddev config.${NC}\n"
ddev config --project-type=php --docroot=


########################
##### Start DDEV   #####
printf "${GREEN}-> Run ddev start while install process...${NC}\n"
ddev start

printf "${GREEN}-> Get ddev deviantintegral/ddev-playwright...${NC}\n"
ddev get deviantintegral/ddev-playwright

printf "${GREEN}-> Install Playwright...${NC}\n"
ddev exec -d /var/www/html/test/playwright npm init playwright@latest

ddev install-playwright

# remove lock file
rm ./Build/INSTALLATION_RUNNING
rm ./test/playwright/.gitignore
rm ./test/playwright/tests/examples.spec.ts

printf "${GREEN}-> Done.${NC}\n"
printf "${GREEN}-> Restart DDEV so that the new functions are available...${NC}\n"

ddev restart
