class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

  def current_user
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
		session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    # @current_user = nil
  end

  def logged_in?
    !!current_user 
  end

  def ensure_logged_in
    render json: ["Invalid user"], status: 404 unless logged_in?
  end
end
