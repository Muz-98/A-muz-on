json.array! @carts_products do |product|
    json.extract! product, :id, :cart_id, :product_id, :quantity
    json.product_name product.product.name 
    json.price product.product.price 
    json.photos do 
        json.array! product.photos do |photo|
            json.imageUrl url_for(photo)
        end 
    end
end 