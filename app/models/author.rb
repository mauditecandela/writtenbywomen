class Author < ApplicationRecord
  has_many :author_authors
  has_many :author_male_authors
  has_many :authors, through: :author_authors
  has_many :male_authors, through: :author_male_authors
end
