require 'rails_helper'

RSpec.describe Schedule, type: :model do

  it "Schedule is no valid for date past" do
    schedule = Schedule.new(start_date: "01-01-1900",end_date: "01-01-1900" )
    expect(schedule).to_not be_valid
  end

  it "Schedule is no valid for end_date past for start_date" do
    schedule = Schedule.new(start_date:  Date.today.strftime('%F'),end_date: "01-01-1900" )
    expect(schedule).to_not be_valid
  end

  it "Schedule is  valid for end_date past for start_date" do
    schedule = Schedule.new(start_date: Date.today.strftime('%F'),end_date:  (Date.today + 100.days).strftime('%F') )
    expect(schedule).to be_valid
  end


end
