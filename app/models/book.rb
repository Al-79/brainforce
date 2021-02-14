class Book < ApplicationRecord
  has_many :questions, dependent: :destroy
  has_many :scores, dependent: :destroy
  belongs_to :user
  accepts_nested_attributes_for :questions, allow_destroy: true
end
