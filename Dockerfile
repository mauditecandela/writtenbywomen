
FROM ruby:2.4.0
MAINTAINER https://github.com/mauditecandela

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs npm

RUN mkdir -p /writtenbywomen
WORKDIR /writtenbywomen

COPY Gemfile /writtenbywomen/Gemfile
COPY Gemfile.lock /writtenbywomen/Gemfile.lock
RUN bundle install
COPY . /writtenbywomen

COPY package.json yarn.lock /writtenbywomen/
RUN npm build

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
