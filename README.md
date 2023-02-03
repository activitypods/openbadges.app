[![SemApps](https://badgen.net/badge/Powered%20by/SemApps/28CDFB)](https://semapps.org)

![](./public/logo192.png)

# OpenBadges.app

## Getting started

Requirements:
- Node (v14 recommended)
- Yarn

### Launch

Create a `.env.local` file. This file is ignored by Git. Check the `.env` file and copy the env variables that you wish to change.

Then you can do:

```bash
yarn install
yarn start
```

## Linking to SemApps packages

To modify packages on the [SemApps repository](https://github.com/assemblee-virtuelle/semapps) and see the changes before they are published, we recommend to use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/).

```bash
cd /SEMAPPS_REPO/src/frontend
yarn run link-all
cd /THIS_REPO/frontend
yarn run link-semapps-packages
```

Additionally, frontend packages need to be rebuilt, or your changes will not be taken into account.
You can use `yarn run build` to build a package once, or `yarn run dev` to rebuild a package on every change.
