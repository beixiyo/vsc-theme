package main

import "fmt"

type User struct {
	ID   int
	Name string
	Tags []string
}

func sum(a, b int) int {
	return a + b
}

func main() {
	u := User{ID: 1, Name: "Go", Tags: []string{"lang", "typed"}}

	active := u.ID > 0 && u.Name != ""
	total := sum(1, 2)

	if active && total != 0 {
		fmt.Println(u, total)
	}
}

