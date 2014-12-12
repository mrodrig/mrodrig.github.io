#!/usr/bin/python
#
# All of the code in this file was written by Michael C. Rodrigues.
# At the time of writing this code, he is in his 2nd year at 
# Northeastern University and is currently pursuing a Dual Major in
# Computer and Information Science.
#
# It is free for public use, and may be distributed WITHOUT any WARRANTY under
# the sole condition that it is distributed with the following line included:
#    Copyright 2012 (c) Michael C. Rodrigues
# 
# If you choose to use this program, I am in no way liable for any incorrect
#    results or data collected.
#
# If you wish to use/test this file, run: python pyfactor.py
#
# As you can tell from the code below, the main method runs dataCheck to ensure
# correctness of the results.  You may disable this dataCheck to obtain faster
# results, however it is not recommended for quality assurance reasons.
#
# NOTE: This implementation is _memoized_. This means that when you initialize
# the program, it will factor all numbers from [2, 30000] and store them into a
# dictionary such that it will allow you to compute the list of factors of much
# larger numbers than other programs because of the fact that it stores the
# results to avoid recomputation.  Please look at my MFactor.java file if you
# prefer a non-memoized factoring program.

# Modules
import os, sys, pickle

# Create a dictionary that will be used for storing computed results.
# Using memo we will memoize all computed factor lists to avoid re-computing
# them later on which will allow us to computer the factors of much larger
# numbers much quicker than without this dictionary
memo = {}

version = "1.1.5"

# Find the smallest factor of the given number
def findFactor(arg):
	i = 2 # Starting index @ 2 since every number is divisible by 1
	while (i <= arg):
		if ((arg % i) == 0):
			return i
		else:
			i += 1
	return -1 # This line should never be reached - if it is, datacheck fails
 
# Find the list of factors either from memo or using findFactor and return it
def findFactors(arg):
	global memo
	number = arg # In order to memoize the results later
	if arg in memo: # already computed, return the list
		return memo[arg]
	else: # not computed, go through and compute
	 	factors = [] # create new list
	 	while (arg != 1): # while arg isn't 1 - all numbers divisible by 1
	 		if arg in memo: # if a new arg value was already computed, use it
	 			memo[number] = appendLists(factors, memo[arg]) # also store it
	 			arg = 1
	 			return memo[number]
	 		else: # else, not already computed so calculate it and store it
				factor = findFactor(arg)
				arg = arg/factor
				factors.append(factor)
		memo[number] = factors
	 	return factors

# Append the two given lists together
def appendLists(list1, list2):
	for element in list2:
		list1.append(element)
	return list1

# Check our results for integrity
def dataCheck(nums, arg):
	acc = 1
	for i in range(len(nums)):
		acc = acc * nums[i]
	if (acc == arg): # Test passes
		return True
	else: # Test fails
		return false
 
def main():
	global memo
	MIN = 2 # Smallest number we will memoize - should not change
	MAX = 30000 # Largest number we will memoize - can change if user types 'range'
	filename = "factors.pkl"
	fakeKey = "PyFactor"
	os.system("clear #Clear the Screen")
	print ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
	print "                       Initializing the PyFactor Program                       "
	print "                                Version: " + str(version)
	for i in range(MIN, MAX): # calculate some factors already so results are quicker for user
		findFactors(i) # do nothing with results, findFactors memoizes them for us
	print "0%   ###################################################################   100%"
	print "                           Initialization Completed                            "
	print ":: Input a number at '>' prompt                                                "
	print ":: Type 'exit' or 'quit' to close PyFactor                                     "
	print ":: Type 'range n' where n is a number larger than the largest factored number  " 
	print "      to factor all numbers up to the number provided.                         "
	print "      Default largest number: " + str(MAX)
	print ":: Type 'save' to save all memoized factors in a file at the root directory for"
	print "      later loading which would prevent having to re-compute factors.          "
	print ":: Type 'load' to load all memoized factors in a previously saved file at the  "
	print "      root directory for which would prevent having to re-compute factors.     "
	
	print "" # For an extra line in between"

	while(True):
		try:
			sys.stdout.write('> ')
			sys.stdout.flush() # Flush output buffer to display the 'prompt'
			inputarg = sys.stdin.readline()
			if (inputarg == "exit\n" or inputarg == "quit\n"): # Exit or Quit?
			 	os.system("clear #Clear the Screen")
				exit(0)
			elif (inputarg.startswith("range")): # Factor a range?
				args = inputarg.split()
				if (len(args) > 1 and int(args[1]) > MAX): # Number > MAX
					for i in range(MAX, int(args[1]) + 1):
						findFactors(i)
					MAX = int(args[1])
				else:
					print "Invalid input number: " + str(int(args[1]))
			elif (inputarg.startswith("save")): # Save the dictionary?
				save_file = open(filename, 'wb')
				memo[fakeKey] = version # Add fake key and value so we can
										   # determine whether a loaded dict is
										   # valid later on or whether it is
										   # even compatible
				pickle.dump(memo, save_file)
				save_file.close()
				print "The file was created: " + os.getenv("PWD") + "/" + str(filename)
			elif (inputarg.startswith("load")): # Load a dictionary?
				load_file = open(filename, 'rb')
				load_dict = pickle.load(load_file)
				load_file.close()
				if (load_dict[fakeKey] == version):
					del load_dict[fakeKey] # remove fake key
					memo = load_dict        # update the memo to all loaded keys and values
					MAX = max(memo.keys(), key=int) # find the MAX value
					print "The file was loaded. The largest memoized results are for: " + str(MAX)
				else:
					print "The dictionary is invalid. Either the version of PyFactor used differs"
					print "from the current edition, or it is not a valid dictionary."
			elif (inputarg.lower() == "print max\n"):
			    print "MAX: " + str(MAX)
			else: # Number was provided, factor it
				inputarg = int(inputarg[:])
				factors = findFactors(inputarg)
				result = dataCheck(factors, inputarg)
				if (result):
					print "List of Factors:"
					print factors
				else:
					print "Data Check Failed. Results computed are incorrect."
		except KeyboardInterrupt:
			print ""
			print "Keyboard Interruption Detected."
			MAX = max(memo.keys(), key=int)
			print "If you wish to exit, please type 'exit' or 'quit'"

	exit(0)
	
main()
