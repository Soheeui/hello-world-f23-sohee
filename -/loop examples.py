

def sayMessage(myMessage):
    print(myMessage)
sayMessage("goodbye")

for x in range(1,10):
  print(x)


fruits = [ "mango", "banana", "apple" ]
for fruit in fruits:  
  print(fruit)

x = 0             # we want to keep track of this
def increaseCount():
  global x        # because we want to modify a global variable
  x += 1          # math
  print (str(x))    # print it to make sure

while x < 10:     # increase count 10 times
	increaseCount() # call a function we define above


for x in range(1,10): # a for loop that counts from 1 to 10
  if (x > 5):     # a conditional, are we less than 5
    break       # exit the loop once our count is higher than 5
  else:
    print(x)