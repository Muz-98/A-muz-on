json.array! @prodducts do |product|
    json.extract! product, :name, :description, :price 
end