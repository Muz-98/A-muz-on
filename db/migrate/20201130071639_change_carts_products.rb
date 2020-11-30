class ChangeCartsProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :carts_products, :quantity, :integer
  end
end
