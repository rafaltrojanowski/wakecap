require_relative 'data_reader'

class Equilibria

  def initialize(input)
    @numbers = DataReader.new(input).to_a
  end

  # @returs String
  def indexes
    indexes = []
    sum = 0
    sum = numbers.inject(&:+) # total sum
    left = 0 # left sum
    right = 0 # right sum
    acc = 0 # accumulator

    numbers[0..-1].each_with_index do |element, index|
      left += numbers[index-1] if index != 0
      acc += element
      right = (sum - acc)
      indexes << index if right == left
    end

    indexes.join(' ')
  end

  private

    attr_accessor :numbers
end
