defmodule Ygritte.Repo do
  use Ecto.Repo,
    otp_app: :ygritte,
    adapter: Ecto.Adapters.Postgres
end
