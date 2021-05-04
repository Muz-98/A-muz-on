class ChangeReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :password_digest
  end
end
