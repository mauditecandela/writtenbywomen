class MaleAuthor < ApplicationRecord
  has_many :author_male_authors
  has_many :authors, through: :author_male_authors
end
