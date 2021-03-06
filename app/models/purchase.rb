# == Schema Information
#
# Table name: purchases
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Purchase < ApplicationRecord

    validates :cart_id, :product_id, :quantity, presence: true

    belongs_to :product,
    class_name: :Product,
    primary_key: :id,
    foreign_key: :product_id 

    belongs_to :cart,
    class_name: :Cart,
    primary_key: :id,
    foreign_key: :cart_id 


end
