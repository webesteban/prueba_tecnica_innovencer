class Schedule < ApplicationRecord

  validates_uniqueness_of :start_date, scope: :end_date, :message => 'y Fecha de Finalizacion ya ha sido creada para un horario!'

end
