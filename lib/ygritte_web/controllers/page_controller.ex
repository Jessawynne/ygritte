defmodule YgritteWeb.PageController do
  use YgritteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
