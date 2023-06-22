class AddColumntoUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :registration_tokens, :string, array: true, default: []
    remove_column :users, :fcm_token, :string
  end
end
