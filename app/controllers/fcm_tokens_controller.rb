class FcmTokensController < ApplicationController
  def create
    available_tokens = current_user.registration_tokens
    if available_tokens.include?(params[:registration_token])
      flash[:notice] = "Token Updated"
    else
      current_user.registration_tokens << params[:registration_token]
      if current_user.save
        flash[:notice] = "Token Updated"
        # redirect_to root_url
      else
        flash[:notice] = "Failed to Update the Token"
      end
    end
  end
end
