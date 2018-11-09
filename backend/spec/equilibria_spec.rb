require './equilibria'

RSpec.describe Equilibria do

  describe '.points' do
    subject { described_class.new(input).indexes }

    context 'case 1' do
      let(:input) {
        <<~EOS
          8
          0 -3 5 -4 -2 3 1 0
        EOS
      }

      it 'returns equilibria indexes separated by spaces' do
        expect(subject).to eq('0 3 7')
      end
    end

    context 'case 2' do
      let(:input) {
        <<~EOS
          11
          3 -2 2 0 3 4 -6 3 5 -4 8
        EOS
      }

      it 'returns equilibria index' do
        expect(subject).to eq('5')
      end
    end

    context 'case 3' do
      let(:input) {
        <<~EOS
          11
          9 0 -5 -4 1 4 -4 -9 0 -7 -1
        EOS
      }

      it 'returns equilibria index' do
        expect(subject).to eq('8')
      end
    end

    context 'case 4' do
      let(:input) {
        <<~EOS
          11
          9 -7 6 -8 3 -9 -5 3 -6 -8 5
        EOS
      }

      it 'returns equilibria index' do
        expect(subject).to eq('6')
      end
    end
  end
end
