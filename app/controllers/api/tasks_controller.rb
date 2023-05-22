class Api::TasksController < ApplicationController
  # GET /tasks
  def index
    @tasks = Task.all
    render json: @tasks
  end

  # GET /tasks/:id
  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  # POST /tasks
  def create
    puts params
    @task = Task.new(task_param)
    if @task.save
      render json: @task
    else
      render error: { error: 'Unable to create task.' }, status: 400
    end
  end

  private

  def task_param
    params.require(:task).permit(:title, :body)
  end
end
