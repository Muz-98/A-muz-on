json.array! @prodducts do |product|
    json.extract! product, :name, :description, :price 
    json.image_url product.image_url
end