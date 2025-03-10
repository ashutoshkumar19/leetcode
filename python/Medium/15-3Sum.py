class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """

        result = []

        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                for k in range(j + 1, len(nums)):
                    if nums[i] + nums[j] + nums[k] == 0:
                        sorted_entry = sorted([nums[i], nums[j], nums[k]])
                        if not result.__contains__(sorted_entry):
                            result.append(sorted_entry)
                        # result.add(tuple(sorted([nums[i], nums[j], nums[k]])))

        print(result)


s = Solution()
s.threeSum([-1, 0, 1, 2, -1, -4])
