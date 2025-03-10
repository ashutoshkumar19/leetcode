class Solution(object):

    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """

        length = len(nums)

        break_index = -1

        for i in range(length - 1, -1, -1):
            if nums[i] > nums[i - 1]:
                break_index = i - 1
                break

        if break_index > -1:
            for i in range(length - 1, break_index, -1):
                if nums[i] > nums[break_index]:
                    nums[i], nums[break_index] = nums[break_index], nums[i]
                    break

        if nums[length - 1] < nums[break_index + 1]:
            # nums[i + 1:] = reversed(nums[i + 1:])
            for i in range(break_index + 1, length):
                if i >= length + break_index - i:
                    break
                elif nums[i] > nums[length + break_index - i]:
                    nums[i], nums[length + break_index - i] = (nums[length + break_index - i], nums[i])

        print(nums)


s = Solution()
s.nextPermutation([9, 6, 5, 8, 7, 4, 3, 2, 1])
