class FrontsController < ApplicationController
  before_action :demo_book, only: [:index]
  def index
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def demo_book
      @book1 = Book.find(1)
      @book3 = Book.find(3)
    end
end
