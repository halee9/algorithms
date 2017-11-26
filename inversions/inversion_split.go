package main

func inversion(arr []int) ([]int, int) {
	if len(arr) == 1 {
		return arr, 0
	}
	middle := len(arr) / 2
	sortedFirstHalf, x := inversion(arr[:middle])
	sortedSecondHalf, y := inversion(arr[middle:])
	merged, z := merge(sortedFirstHalf, sortedSecondHalf)
	return merged, x + y + z
}

func merge(firstHalf []int, secondHalf []int) ([]int, int) {
	var i, j int = 0, 0
	var size = len(firstHalf) + len(secondHalf)
	merged := make([]int, size, size)
	count := 0
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
		} else if firstHalf[i] > secondHalf[j] {
			count += len(firstHalf) - i
			merged[k] = secondHalf[j]
			j++
		}
	}
	// fmt.Println("array: ", firstHalf, secondHalf)
	// fmt.Println("count: ", count)
	return merged, count
}
