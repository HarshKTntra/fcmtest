# frozen_string_literal: true

require 'fcm'
# app > services > new_task_notification
class NewTaskNotification < ::BaseNotification
  def self.push(task, receiver)
    sender = task.user
    title = title(sender.name)
    notification = create_notification(notification_params(title, body, data, receiver))
    reg_ids = receiver.registration_tokens
    fcm_client.send(reg_ids, options(title, body, fcm_data(data, notification.id))) if reg_ids.present?
  end

  def self.title(sender_name)
    sender_name.to_s
  end

  def self.data
    {
      type: 'new_task'
    }
  end

  def self.body
    'created a new task'
  end

  def self.notification_params(title, body, data, user)
    {
      title:,
      body:,
      data:,
      notifiable_type: 'User',
      notifiable_id: user.id
    }
  end
end
