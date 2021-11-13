# def triple_step(i):
#     # Raw-Recursion
#     if i==1:return 1
#     if i==2:return 2
#     if i==3:return 3
#     return triple_step(i-1)*triple_step(i-2)*triple_step(i-3)

    # Memoization
# def triple_step(n):
#     return triple_step(n, [0]*n)
# def triple_step(i,memo):
#     if(i==1 or i==2 or i==3):
#         return i
#     if memo[i]==0:
#         memo[i]=triple_step(i-1,memo)*triple_step(i-2,memo)*triple_step(i-3,memo)
#     return memo[i]

def triple_step(n,memo=[]):
    if memo==[]:
        memo=[0]*n
    if(n==1 or n==2 or n==3):
        return n
    if memo[n-1]==0:
        memo[n-1]=triple_step(n-1,memo)*triple_step(n-2,memo)*triple_step(n-3,memo)
    return memo[n-1]
        

print(triple_step(100))