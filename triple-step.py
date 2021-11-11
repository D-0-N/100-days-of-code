def triple_step(i,memo=[]):
    # Raw-Recursion
    # if i==1:return 1
    # if i==2:return 2
    # if i==3:return 3
    # return triple_step(i-1)*triple_step(i-2)*triple_step(i-3)

    # Memoization
    if memo==[]:
        memo=[0]*i
    if(i==1 or i==2 or i==3):
        return i
    if memo[i]==0:
        memo[i]=triple_step(i-1,memo)*triple_step(i-2,memo)*triple_step(i-3,memo)
    return memo[i]

print(triple_step(4))