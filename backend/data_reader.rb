class DataReader

  def initialize(input)
    @input = input
    @n = input.split("\n")[0].to_i
    @sequence = input.split("\n")[1]
  end

  # @returns Array
  def to_a
    @sequence.split(' ').map(&:to_i)[0..@n-1]
  end
end
