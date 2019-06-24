FROM ruby:2.4.0
MAINTAINER https://github.com/mauditecandela

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
RUN mkdir -p /writtenbywomen
WORKDIR /writtenbywomen

# Copy the Gemfile as well as the Gemfile.lock and install
# the RubyGems. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.

COPY Gemfile /writtenbywomen/Gemfile
COPY Gemfile.lock /writtenbywomen/Gemfile.lock
RUN bundle install
COPY . /writtenbywomen

FROM node:8 as react-build
RUN yarn install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
