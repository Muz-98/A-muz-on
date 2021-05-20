json.array! @cart.purchases do |item|
    json.extract! item, :id, :quantity, :product_id
    json.extract! item.product, :name, :price
end