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

    def self.search(search_params)
        search_title = search_params[:title]
        search_description = search_params[:description]
        total_search = search_title + search_description 

        Product 
            .where("name LIKE '%(?)%' OR description LIKE '%(?)%'", search_title, search_description)
    end
end
