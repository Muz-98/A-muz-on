json.extract! @carts_product, :id, :cart_id, :product_id, :quantity
json.product_name @carts_product.product.name 
json.price @carts_product.product.price 
    json.photos do 
        json.array! @carts_product.photos do |photo|
            json.imageUrl url_for(photo)
        end 
    end