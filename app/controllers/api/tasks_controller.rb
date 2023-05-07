class Api::TasksController < ApplicationController
  # GET /tasks
  def index
    @tasks = Tasks.all 
    render json: @tasks
  end

  # GET /tasks/:id
  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  # POST /tasks
  def create
      @task = Task.new(task_param)
      if @task.save
        render json: @task
      else  
        render error: {error: 'Unable to create User.'}, status: 400
      end
  end

end


