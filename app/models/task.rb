class Task < ApplicationRecord
  belongs_to :user
  after_create_commit :send_notification

  def send_notification
    recievers = User.all
    recievers.each do |reciever|
      NewTaskNotification.push(self, reciever)
    end
  end
end
