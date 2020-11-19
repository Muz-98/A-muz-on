class CreateCartsProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts_products do |t|
      t.integer :cart_id, null: false 
      t.integer :product_id, null: false 

      t.timestamps
    end

    add_index :carts_products, :cart_id
    add_index :carts_products, :product_id
  end
end
