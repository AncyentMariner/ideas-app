require 'test_helper'

class IdeasControllerTest < ActionDispatch::IntegrationTest
  test "should get indea" do
    get ideas_indea_url
    assert_response :success
  end

end
