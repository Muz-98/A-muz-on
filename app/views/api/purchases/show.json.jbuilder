json.id @purchase.product.id
json.name @purchase.product.name
json.price @purchase.product.price
json.photos do 
        json.array! @purchase.product.photos do |photo|
            json.imageUrl url_for(photo)
        end 
    end
