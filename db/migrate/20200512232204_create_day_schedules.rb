class CreateDaySchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :day_schedules do |t|
      t.references :schedule, foreign_key: true
      t.string :day
      t.integer :hour
      t.integer :minute
      t.integer :quota

      t.timestamps
    end
  end
end
