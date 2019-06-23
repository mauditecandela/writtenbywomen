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
COPY . ./
RUN gem install bundler && bundle install --jobs 20 --retry 5

FROM node:8 as react-build
WORKDIR /writtenbywomen

RUN yarn

# Expose port 3000 to the Docker host, so we can access it
# from the outside.
EXPOSE 3000

# The main command to run when the container starts. Also
# tell the Rails dev server to bind to all interfaces by
# default.
CMD ["rails", "server", "-b", "0.0.0.0"]
