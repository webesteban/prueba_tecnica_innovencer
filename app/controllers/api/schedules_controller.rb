module Api
  class SchedulesController < ApplicationController

    def create

      schedule = Schedule.new(schedule_params)

      #save schedule
      if schedule.save

        # parse JSON schedule days
        days = JSON.parse(params[:schedule_days])

        # create days schedule
        days.each do |day|
          DaySchedule.create(
            day: day['day'],
            hour: day['hour'],
            minute: day['minute'],
            quota: day['quote'],
            schedule: schedule
          )
        end

        render json: {msg: "El horario fue creado correctamente"}
      else

        render json: schedule.errors.full_messages[0], status: :forbidden
      end

    end

    private
    def schedule_params
      params.require(:schedule).permit(:start_date, :end_date)
    end
  end
end

