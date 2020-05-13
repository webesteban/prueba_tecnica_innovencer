class Schedule < ApplicationRecord

  validates_uniqueness_of :start_date, scope: :end_date, :message => 'y Fecha de Finalizacion ya ha sido creada para un horario!'

  validates_date :start_date, :on_or_after => lambda { Date.current }
  validates_date :end_date, :on_or_after => :start_date

end
