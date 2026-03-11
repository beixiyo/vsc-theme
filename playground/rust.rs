enum Status {
  Idle,
  Busy,
}

struct User {
  id: u32,
  name: String,
}

fn sum(a: i32, b: i32) -> i32 {
  a + b
}

fn main() {
  let status = Status::Idle;
  let user = User {
    id: 1,
    name: "Rust".to_string(),
  };

  let active = matches!(status, Status::Idle) && user.id > 0;
  let total = sum(1, 2);

  if active && total != 0 {
    println!("user: {}, total: {}", user.name, total);
  }
}

