# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord 

    has_many_attached :photos

    def self.search_by(query)
        split_query = query.split(" ")
        mapped_query = split_query.map{|n| "name LIKE '%#{n}%'"}.join(" OR ")

        Product 
            .where(mapped_query)
    end

    has_many :reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :product_id
end
