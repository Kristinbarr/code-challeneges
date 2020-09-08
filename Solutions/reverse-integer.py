class Solution:
    def reverse(self, x: int) -> int:
        # save variable for negative
        # check if negative number
        if x < 0:
            neg = True
        else:
            neg = False
        # convert number to string
        num_str = str(x)
        if neg:
            num_str = num_str[1:]
        # reverse string 
        num_str = num_str[::-1]
        # check if within signed integer range
        if int(num_str) > 2147483647 or int(num_str) < -2147483648:
            return 0
        # return num
        if neg:
            num_str = '-' + num_str
        return int(num_str)