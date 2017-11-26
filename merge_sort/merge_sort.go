package main

import "fmt"

func mergeSort(arr []int) []int {
	if len(arr) == 1 {
		return arr
	}
	middle := len(arr) / 2
	sortedFirstHalf := mergeSort(arr[:middle])
	sortedSecondHalf := mergeSort(arr[middle:])
	merged := merge(sortedFirstHalf, sortedSecondHalf)
	return merged
}

func merge(firstHalf []int, secondHalf []int) []int {
	var i, j int = 0, 0
	var size = len(firstHalf) + len(secondHalf)
	merged := make([]int, size, size)
	for k := 0; k < size; k++ {
		if i >= len(firstHalf) {
			merged[k] = secondHalf[j]
			j++
			continue
		}
		if j >= len(secondHalf) {
			merged[k] = firstHalf[i]
			i++
			continue
		}
		if firstHalf[i] < secondHalf[j] {
			merged[k] = firstHalf[i]
			i++
		} else {
			merged[k] = secondHalf[j]
			j++
		}
	}
	return merged
}

func main() {
	var unsorted = []int{3, 1, 5, 4, 2, 6, 7}
	sorted := mergeSort(unsorted)
	fmt.Println("unsorted: ", unsorted)
	fmt.Println("sorted:   ", sorted)
}
