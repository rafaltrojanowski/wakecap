require './data_reader'

RSpec.describe DataReader do
  let(:input) {
    <<~EOS
      8
      0 -3 5 -4 -2 3 1 1000 77
    EOS
  }

  subject { described_class.new(input) }

  describe 'to_a' do
    it 'returns an array of n integers' do
      expect(subject.to_a.size).to eq(8)
      expect(subject.to_a).to eq([0, -3, 5, -4, -2, 3, 1, 1000])
    end
  end
end
