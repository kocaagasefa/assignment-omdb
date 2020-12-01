# This is a "NextJS" project

## Before starting:

    yarn install

## Start in development mode:

    yarn dev

## Start in production mode:

- Build first with `yarn build`
- Then start with `yarn start`
- Both dev and prod mode runs on port `3000`

## Notes

- Api responses are cached by `axios cache adaptor`, on server side.
- Prefered to fetch data from external source on server; in this way client access to api key is restricted.
