@purchases.each do |purchase|
    json.set! purchase.id do 
        json.partial! '/api/purchases/purchases', purchase: purchase
        json.name purchase.product.name
        json.price purchase.product.price
        json.photos do 
            json.array! purchase.product.photos do |photo|
                json.imageUrl url_for(photo)
                json.photoUrl url_for(photo)
            end 
        end
    end
end