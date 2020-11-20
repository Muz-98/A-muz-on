json.array! @products do |product|
    json.extract! product, :id, :name, :description, :price
    jason.photoUrl url_for(product.photo)
end

