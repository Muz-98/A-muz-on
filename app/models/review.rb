# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  rating     :integer          not null
#  user_id  :integer          not null
#  product_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :title, :body, :rating, :user_id, :product_id, presence: true

    belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

    belongs_to :product,
    class_name: :Product,
    primary_key: :id,
    foreign_key: :product_id
end
