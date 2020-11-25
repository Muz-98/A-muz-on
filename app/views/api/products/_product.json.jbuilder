json.extract! product, :id, :name, :description, :price

json.photos product.photos.map { |file| url_for(file) }