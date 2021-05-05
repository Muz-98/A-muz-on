class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.integer :cart_id, null: false 
      t.integer :product_id, null: false 
      t.integer :quantity, null: false

      t.timestamps
    end

    add_index :purchases, :cart_id
    add_index :purchases, :product_id
  end
end
