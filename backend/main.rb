require 'optparse'
require_relative 'equilibria'

# This will hold the options we parse
options = {}

OptionParser.new do |parser|
  parser.banner = "Usage: main.rb [options]"

  parser.on("-h", "--help", "Show this help message") do ||
    puts parser
  end

  parser.on("-s", "--s STRING", "Multiline string to parse.") do |v|
    options[:s] = v
    puts Equilibria.new(options[:s]).indexes
  end
end.parse!

