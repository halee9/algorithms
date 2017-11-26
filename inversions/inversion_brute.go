package main

import "fmt"

func inversionBrute(arr []int) int {
	count := 0
	size := len(arr)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if i < j && arr[i] > arr[j] {
				fmt.Println("(", arr[i], arr[j], ")")
				count++
			}
		}
	}
	return count
}
