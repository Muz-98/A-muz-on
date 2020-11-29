json.array! @products do |product|
    json.extract! product, :id, :name, :description, :price 
    json.photos do 
        json.array! product.photos do |photo|
            json.imageUrl url_for(photo)
        end 
    end
end