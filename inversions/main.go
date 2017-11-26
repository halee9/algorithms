package main

import "fmt"

func main() {
	var data = []int{3, 1, 5, 4, 2, 6, 7}
	count := inversionBrute(data)
	fmt.Println("inversion brute: ", count)
	sorted, count := inversion(data)
	fmt.Println("inversion split: ", count, sorted)
}
