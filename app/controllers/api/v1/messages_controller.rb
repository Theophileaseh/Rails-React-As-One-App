class Api::V1::MessagesController < ApplicationController
  protect_from_forgery with: :null_session
  def new
    @message = Message.new
    respond_to do |format|
      format.json { render json: @message }
    end
  end

  def create
    @message = @user.messages.new(post_id: @post.id, author_id: current_user.id, Text: message_params)
    @message.post_id = @post.id
    return unless
    @message.save

    respond_to do |format|
      format.json { render json: @message, status: 'Created' }
    end
  end

  def index
    @user = User.find(params[:user_id])
    @posts = @user.posts.find(params[:post_id])
    @messages = @posts.messages

    render json: @messages
  end

  def message_params
    params.require(:message).permit(:text)[:text]
  end
end
