# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord 

    has_many_attached :photos

    def self.get_search(query)
        # search_title = search_params[:title]
        # search_description = search_params[:description]
        # total_search = search_title + search_description
        split_query = query.split(" ")
        mapped_query = split_query.map{|n| "name LIKE '%#{n}%'"}.join(" OR ")

        Product 
            .where(mapped_query)
    end
end
