json.array! @products do |product|
    json.extract! product, :id, :name
    jason.photoUrl url_for(product.photo)
end