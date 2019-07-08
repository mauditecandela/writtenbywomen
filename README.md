# README

* Rails version 5.1.6
* Ruby version 2.3.1 - may update to 2.5 soon

This app is a work in progress that I would like to maintain as Free Open Software soon. The main goal is to create an app that recommends books written by women, to decrease the gender gap in literature.

Currently the app is a simple Rails App that serves as API to a React Frontend.

Dependencies:
- Yarn
- Postgress
(You can install both by using brew)


# Docker installation

If you use docker and have `docker-compose` installed, you can run:

- `docker-compose build`
- `docker-compose run web bin/rails db:create`
- `docker-compose run web bin/rails db:migrate`
- `docker-compose up`

...and start having fun!
