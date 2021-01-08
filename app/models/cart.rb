# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, uniqueness: true
    
    belongs_to :user,
    class_name: :User, 
    foreign_key: :user_id

    has_many :cart_products,
    class_name: :CartsProducts, 
    foreign_key: :cart_id 

    has_many :products,
    through: :cart_products,
    source: :product 
end
