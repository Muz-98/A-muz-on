json.partial! '/api/purchases/purchase', purchase: @purchase
json.name @purchase.product.product_name
json.price @purchase.product.price
json.photos do 
        json.array! @purchase.product.photos do |photo|
            json.imageUrl url_for(photo)
        end 
    end
json.photoUrl url_for(@purchase.product.photo)